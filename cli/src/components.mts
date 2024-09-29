import { multiselect, isCancel, log, spinner } from "@clack/prompts";
import { loadConfig } from "./config.mjs";
import { cliFetchComponents, cliInstallComponent } from "./api.mjs";
import { outro } from "@clack/prompts";
import { Component, LicenseKey } from "./types.mjs";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

/**
 * Adds components to the project.
 *
 * This function performs the following steps:
 * 1. Loads configuration and checks for a valid license key
 * 2. Fetches available components
 * 3. Determines which components to install
 * 4. Begins the installation process
 * 5. Checks and installs the bits-ui package if not already installed
 * 6. Installs selected components
 * 7. Finalizes the installation
 *
 * @param {string} [componentToAdd] - Optional specific component to add
 * @returns {Promise<void>}
 */
export async function add(componentToAdd?: string): Promise<void> {
  /*---------------------------------------------
  / Step 1: Load configuration and check for valid license key
  /---------------------------------------------*/
  const config = loadConfig();
  if (!config || !config.license_key) {
    log.error(
      "No valid license key found. Please activate your license first."
    );
    return;
  }

  /*---------------------------------------------
  / Step 2: Fetch available components
  /---------------------------------------------*/
  const s = spinner();
  s.start("Fetching available components...");

  try {
    const availableComponents: Component[] = await cliFetchComponents(
      config.license_key
    );
    s.stop("Components fetched successfully");

    /*---------------------------------------------
    / Step 3: Determine components to install
    /---------------------------------------------*/
    let componentsToInstall: Component[];

    if (componentToAdd) {
      if (availableComponents.includes(componentToAdd as Component)) {
        componentsToInstall = [componentToAdd as Component];
      } else {
        log.error(`Component "${componentToAdd}" is not available.`);
        return;
      }
    } else {
      const selectedComponents = await multiselect({
        message: "Select components to add:",
        options: [
          { value: "all", label: "All components" },
          ...availableComponents.map((component) => ({
            value: component,
            label: component.charAt(0).toUpperCase() + component.slice(1),
          })),
        ],
      });

      if (isCancel(selectedComponents)) {
        outro("Operation cancelled");
        return;
      }

      if (selectedComponents.length === 0) {
        log.warn("No components selected. Installation cancelled.");
        return;
      }

      componentsToInstall = selectedComponents.includes("all")
        ? availableComponents
        : (selectedComponents as Component[]);
    }

    /*---------------------------------------------
    / Step 4: Begin installation process
    /---------------------------------------------*/
    s.start("Adding components...");

    const installedComponents: Component[] = [];

    /*---------------------------------------------
    / Step 5: Check and install bits-ui package if not already installed
    /---------------------------------------------*/
    const packageJsonPath = path.join(process.cwd(), "package.json");
    let packageJson;
    try {
      packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
    } catch (error) {
      log.error("Failed to read package.json");
      throw error;
    }

    const bitsUiInstalled =
      packageJson.dependencies && "bits-ui" in packageJson.dependencies;

    if (!bitsUiInstalled && componentsToInstall.length > 0) {
      s.message("Installing bits-ui package...");
      try {
        /*---------------------------------------------
        / Step 5.1: Determine which package manager to use
        /---------------------------------------------*/
        const useYarn = fs.existsSync(path.join(process.cwd(), "yarn.lock"));
        const usePnpm = fs.existsSync(
          path.join(process.cwd(), "pnpm-lock.yaml")
        );

        let installCommand;
        if (usePnpm) {
          installCommand = "pnpm add bits-ui";
        } else if (useYarn) {
          installCommand = "yarn add bits-ui";
        } else {
          installCommand = "npm install bits-ui";
        }

        execSync(installCommand, { stdio: "inherit" });
        log.success("bits-ui package installed successfully");
      } catch (error) {
        log.error("Failed to install bits-ui package");
        throw error;
      }
    } else if (bitsUiInstalled) {
      log.info("bits-ui package is already installed");
    }

    /*---------------------------------------------
    / Step 6: Install selected components
    /---------------------------------------------*/
    for (const component of componentsToInstall) {
      await cliInstallComponent(component, config.license_key);
      installedComponents.push(component);
    }

    /*---------------------------------------------
    / Step 7: Finalize installation
    /---------------------------------------------*/
    s.stop("Installation completed");

    log.success(
      `Successfully added components: ${installedComponents
        .map(
          (component) => component.charAt(0).toUpperCase() + component.slice(1)
        )
        .join(", ")}`
    );
  } catch (error: unknown) {
    /*---------------------------------------------
    / Error handling
    /---------------------------------------------*/
    s.stop("Operation failed");
    log.error(
      `Error: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}
