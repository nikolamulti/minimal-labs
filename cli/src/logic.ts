import { saveConfig, loadConfig, removeConfig } from "@/utils";
import fs from "fs";
import path from "path";
import {
  log,
  text,
  spinner,
  confirm,
  isCancel,
  multiselect,
  outro,
} from "@clack/prompts";

import {
  cliActivateLicense,
  cliDeactivateLicense,
  cliDeactivateAllInstances,
  cliFetchComponents,
  cliInstallComponent,
  fetchGlobalsCSSContent,
  cliInstallBitsUI,
} from "@/api";

import { APIResponse, InstanceId, LicenseKey, Component } from "@/types";

const s = spinner();

/**
 * Initializes the project with the following steps:
 * 1. Checks for existing license key in the config
 * 2. If no license key, prompts user to enter one
 * 3. Activates the license
 * 4. Saves the configuration
 * 5. Initializes the project (creates/updates globals.css)
 * 6. Installs bits-ui package
 * 7. Logs success message
 */
export async function init(): Promise<void> {
  const config = loadConfig();
  let licenseKey = config?.license_key;

  if (!licenseKey) {
    const licenseKey = await text({
      message: "Please enter your license key:",
      validate(value) {
        if (value.length === 0) return "License key is required";
        return;
      },
    });

    if (isCancel(licenseKey)) {
      outro("Operation cancelled");
      return;
    }

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

  const newGlobalsCSS = await fetchGlobalsCSSContent();

  // Update globals.css file
  const filePath = path.join(process.cwd(), "globals.css");

  s.start("Adding CSS...");
  if (fs.existsSync(filePath)) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const existingContent = fs.readFileSync(filePath, "utf8");

    const updatedContent = existingContent + "\n\n" + newGlobalsCSS;
    fs.writeFileSync(filePath, updatedContent);
    s.stop("globals.css updated successfully");
  } else {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    fs.writeFileSync(filePath, newGlobalsCSS);
    s.stop("globals.css created successfully");
  }

  log.success("Initialization completed successfully");
}

/**
 * Activates a license with the following steps:
 * 1. Check if license key is already activated, if yes, return (don't allow multiple activations)
 * 2. Prompts user for license key
 * 3. Activates the license
 * 4. Saves the configuration
 * 5. Optionally adds components
 */
export async function activate(): Promise<void> {
  const existingConfig = loadConfig();
  if (existingConfig && existingConfig.license_key) {
    log.error("License key is already activated.");
    return;
  }

  const licenseKey = (await text({
    message: "Enter your license key:",
    validate: (value: string) => {
      if (value.trim() === "") return "License key cannot be empty";
    },
  })) as LicenseKey;

  if (isCancel(licenseKey)) {
    outro("Operation cancelled");
    return;
  }

  s.start("Processing license...");

  const data = (await cliActivateLicense(licenseKey)) as APIResponse;
  s.stop("License activated successfully");

  const instanceId = data.instance_id;

  if (!instanceId) {
    log.error("License activation failed: No instance ID received.");
    return;
  }

  saveConfig({ license_key: licenseKey, instance_id: instanceId });

  const addNow = await confirm({
    message: "Do you want to add components now?",
  });

  if (isCancel(addNow)) {
    outro("Operation cancelled");
    return;
  }

  if (addNow) {
    await add();
  }
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
  let licenseKey: LicenseKey;
  let instanceId: InstanceId | undefined;

  if (config && config.license_key) {
    licenseKey = config.license_key;
    instanceId = config.instance_id;
  } else {
    log.warn("No local license configuration found.");
    licenseKey = (await text({
      message: "Please enter your license key to deactivate:",
      validate: (value: string) => {
        if (value.trim() === "") return "License key cannot be empty";
      },
    })) as LicenseKey;

    if (isCancel(licenseKey)) {
      outro("Operation cancelled");
      return;
    }
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
      }`
    );
  }
}

/**
 * Adds components to the project with the following steps:
 * 1. Checks for valid license
 * 2. Fetches available components
 * 3. Allows user to select components (or uses provided component)
 * 4. Installs selected components
 *
 * @param {string} [componentToAdd] - Optional specific component to add
 * @returns {Promise<void>}
 */
export async function add(componentToAdd?: string): Promise<void> {
  const config = loadConfig();
  if (!config || !config.license_key) {
    log.error(
      "No valid license key found. Please activate your license first."
    );
    return;
  }

  try {
    const availableComponents: Component[] = await cliFetchComponents(
      config.license_key
    );

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

    s.start("Adding components...");
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const installedComponents: { name: string; prefixed: boolean }[] = [];

    for (const component of componentsToInstall) {
      const componentDir = path.join(
        process.cwd(),
        "components",
        component.toLowerCase()
      );
      let finalComponentName = component;
      let isPrefixed = false;

      if (fs.existsSync(componentDir)) {
        s.stop("Component already exists");
        const overrideConfirm = await confirm({
          message: `A folder for "${component}" already exists. Do you want to override it?`,
        });

        if (isCancel(overrideConfirm)) {
          log.warn(`Skipping "${component}" installation.`);
          continue;
        }

        if (!overrideConfirm) {
          finalComponentName = `wfs-${component}`;
          isPrefixed = true;
        }
      }

      await cliInstallComponent(
        component,
        config.license_key,
        finalComponentName
      );

      installedComponents.push({
        name: finalComponentName,
        prefixed: isPrefixed,
      });
    }
    s.stop(
      `Successfully added ${
        installedComponents.length === 1 ? "component" : "components"
      }: ${installedComponents
        .map((component) => `${component.name}`)
        .join(", ")}`
    );
  } catch (error: unknown) {
    s.stop("Operation failed");
    log.error(
      `Error: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}
