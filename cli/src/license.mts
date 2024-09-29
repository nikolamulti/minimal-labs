import { text, confirm, isCancel, log, spinner, outro } from "@clack/prompts";
import { loadConfig, saveConfig, removeConfig } from "./config.mjs";
import {
  cliActivateLicense,
  cliDeactivateLicense,
  cliDeactivateAllInstances,
} from "./api.mjs";
import { add } from "./components.mjs";
import { APIResponse, InstanceId, LicenseKey } from "./types.mjs";

/**
 * Activates a license key for the application.
 *
 * This function performs the following steps:
 * 1. Prompts the user to enter a license key
 * 2. Validates the entered license key
 * 3. Activates the license key using the API
 * 4. Saves the activated license key to the configuration
 * 5. Optionally prompts the user to add components
 *
 * @returns {Promise<void>}
 */
export async function activate(): Promise<void> {
  /*---------------------------------------------
  / Step 1: Check if license is already activated
  /---------------------------------------------*/
  const existingConfig = loadConfig();
  if (existingConfig && existingConfig.license_key) {
    log.error("License key is already activated.");
    return;
  }

  /*---------------------------------------------
  / Step 2: Prompt for license key
  /---------------------------------------------*/
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

  /*---------------------------------------------
  / Step 2: Activate license
  /---------------------------------------------*/
  const s = spinner();
  s.start("Processing license...");

  try {
    const data = (await cliActivateLicense(licenseKey)) as APIResponse;
    s.stop("Processing completed");

    const instanceId = data.instance_id;

    if (!instanceId) {
      log.error("License activation failed: No instance ID received.");
      return;
    }

    saveConfig({ license_key: licenseKey, instance_id: instanceId });

    /*---------------------------------------------
    / Step 4: Prompt to add components
    /---------------------------------------------*/
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
  } catch (error: unknown) {
    s.stop("Processing failed");
    log.error(
      `Error activating license: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

/**
 * Deactivates a license key for the application.
 *
 * This function performs the following steps:
 * 1. Checks for an existing license key in the configuration
 * 2. If not found, prompts the user to enter a license key
 * 3. Confirms with the user if they want to deactivate the license
 * 4. Deactivates the license key using the API
 * 5. Removes the license key from the configuration
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

  /*---------------------------------------------
  / Step 2: Confirm deactivation
  /---------------------------------------------*/
  const confirmDeactivate = await confirm({
    message: "Are you sure you want to deactivate your license?",
  });

  if (isCancel(confirmDeactivate) || !confirmDeactivate) {
    outro("Operation cancelled");
    return;
  }

  /*---------------------------------------------
  / Step 3: Deactivate license
  /---------------------------------------------*/
  const s = spinner();
  s.start("Deactivating license...");

  try {
    let data: APIResponse;
    if (instanceId) {
      // Deactivate specific instance
      data = await cliDeactivateLicense(licenseKey, instanceId);
    } else {
      // Deactivate all instances
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
