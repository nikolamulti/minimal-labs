import { log, text, spinner, confirm, isCancel, outro } from "@clack/prompts";
import { saveConfig, loadConfig, removeConfig } from "./utils/index.js";
import fs from "fs";
import path from "path";

import {
  cliActivateLicense,
  cliDeactivateLicense,
  cliDeactivateAllInstances,
  cliFetchComponents,
  cliInstallComponent,
  fetchGlobalCSSContent,
  cliInstallBitsUI,
} from "./api.mjs";

import { APIResponse, InstanceId, LicenseKey, Component } from "./types";

const s = spinner();

/**
 * Initializes the project with the following steps:
 * 1. Checks for existing license key in the config
 * 2. If no license key, prompts user to enter one
 * 3. Activates the license
 * 4. Saves the configuration
 * 5. Initializes the project (creates/updates global.css)
 * 6. Installs bits-ui package
 * 7. Installs all available components
 * 8. Logs success message
 */
export async function init(): Promise<void> {
  const config = loadConfig();
  let licenseKey = config?.license_key;

  if (!licenseKey) {
    const enteredLicenseKey = await text({
      message: "Please enter your license key:",
      validate(value) {
        if (value.length === 0) return "License key is required";
        return;
      },
    });

    if (isCancel(enteredLicenseKey)) {
      outro("Operation cancelled");
      return;
    }

    licenseKey = enteredLicenseKey as string;

    // Activate and save license
    s.start("Activating license...");
    const activationResponse = await cliActivateLicense(licenseKey);
    s.stop("License activated successfully");

    saveConfig({
      license_key: licenseKey,
      instance_id: activationResponse.instance_id,
    });
  }

  // Install bits-ui package
  s.start("Installing dependencies...");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await cliInstallBitsUI();
  s.stop("Dependencies installed successfully");

  const newGlobalCSS = await fetchGlobalCSSContent();

  // Update global.css file
  const filePath = path.join(process.cwd(), "global.css");

  s.start("Adding CSS...");
  if (fs.existsSync(filePath)) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const existingContent = fs.readFileSync(filePath, "utf8");

    const updatedContent = existingContent + "\n\n" + newGlobalCSS;
    fs.writeFileSync(filePath, updatedContent);
    s.stop("global.css updated successfully");
  } else {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    fs.writeFileSync(filePath, newGlobalCSS);
    s.stop("global.css created successfully");
  }

  // Install all components
  s.start("Fetching available components...");
  const availableComponents: Component[] = await cliFetchComponents(licenseKey);
  s.stop("Components fetched successfully");

  let installedCount = 0;

  for (const component of availableComponents) {
    const componentDir = path.join(
      process.cwd(),
      "components",
      component.toLowerCase(),
    );
    let finalComponentName = component;

    if (fs.existsSync(componentDir)) {
      const overrideConfirm = await confirm({
        message: `A component named "${component}" already exists. Do you want to override it?`,
      });

      if (isCancel(overrideConfirm)) {
        continue;
      }

      if (!overrideConfirm) {
        const newName = await text({
          message: `Enter a new name for the "${component}" component:`,
          validate: (value: string) => {
            if (value.trim() === "") return "Component name cannot be empty";
            const sanitizedName = value.replace(/\s+/g, "-").toLowerCase();
            if (
              fs.existsSync(
                path.join(process.cwd(), "components", sanitizedName),
              )
            ) {
              return "A component with this name already exists";
            }
          },
        });

        if (isCancel(newName)) {
          continue;
        }

        finalComponentName = (newName as string).replace(/\s+/g, "-");
      }
    }

    await cliInstallComponent(component, licenseKey, finalComponentName);
    installedCount++;
  }

  log.success(
    `Successfully installed ${installedCount} component${installedCount !== 1 ? "s" : ""}`,
  );
  log.success("Initialization completed successfully");
}

/**
 * Activates a license with the following steps:
 * 1. Check if license key is already activated, if yes, return (don't allow multiple activations)
 * 2. Prompts user for license key
 * 3. Activates the license
 * 4. Saves the configuration
 */
export async function activate(): Promise<void> {
  const existingConfig = loadConfig();
  if (existingConfig && existingConfig.license_key) {
    log.error("License key is already activated.");
    return;
  }

  const licenseKey = await text({
    message: "Enter your license key:",
    validate: (value: string) => {
      if (value.trim() === "") return "License key cannot be empty";
    },
  });

  if (isCancel(licenseKey)) {
    outro("Operation cancelled");
    return;
  }

  s.start("Processing license...");

  const data = await cliActivateLicense(licenseKey as string);
  s.stop("License activated successfully");

  const instanceId = data.instance_id;

  if (!instanceId) {
    log.error("License activation failed: No instance ID received.");
    return;
  }

  saveConfig({ license_key: licenseKey as string, instance_id: instanceId });

  log.success("License activated and saved successfully.");
}

/**
 * Deactivates a license with the following steps:
 * 1. Checks for existing license configuration
 * 2. If no config, prompts user for license key
 * 3. Confirms deactivation with user
 * 4. Deactivates the license (either specific instance or all instances)
 * 5. Removes the local configuration
 *
 * @returns {Promise<void>}
 */
export async function deactivate(): Promise<void> {
  const config = loadConfig();
  let licenseKey: string;
  let instanceId: InstanceId | undefined;

  if (config && config.license_key) {
    licenseKey = config.license_key;
    instanceId = config.instance_id;
  } else {
    log.warn("No local license configuration found.");
    const enteredLicenseKey = await text({
      message: "Please enter your license key to deactivate:",
      validate: (value: string) => {
        if (value.trim() === "") return "License key cannot be empty";
      },
    });

    if (isCancel(enteredLicenseKey)) {
      outro("Operation cancelled");
      return;
    }

    licenseKey = enteredLicenseKey as string;
  }

  const confirmDeactivate = await confirm({
    message: "Are you sure you want to deactivate your license?",
  });

  if (isCancel(confirmDeactivate) || !confirmDeactivate) {
    outro("Operation cancelled");
    return;
  }

  const s = spinner();
  s.start("Deactivating license...");

  try {
    let data: APIResponse;
    if (instanceId) {
      data = await cliDeactivateLicense(licenseKey, instanceId);
    } else {
      data = await cliDeactivateAllInstances(licenseKey);
    }
    s.stop("Processing completed");
    log.success("License deactivated successfully!");
    removeConfig();
  } catch (error: unknown) {
    s.stop("Processing completed");
    log.error(
      `Error deactivating license: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
}
