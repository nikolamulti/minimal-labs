import fetch from "node-fetch";
import fs from "fs";
import path from "path";
import {
  APIResponse,
  ComponentsResponse,
  ComponentFilesResponse,
  LicenseKey,
  Component,
  InstanceId,
} from "./types/index.js";
import { execSync } from "child_process";

const API_URL = "https://minimal-labs.com";

/**
 * Initializes the project by creating or updating a wfs.css file in the current directory
 *
 * This function performs the following steps:
 * 1. Fetches the wfs.css content from the API
 * 2. Checks if a wfs.css file already exists in the current directory
 * 3. If it exists, appends the fetched content to the existing file
 * 4. If it doesn't exist, creates a new file with the fetched content
 *
 * @returns {Promise<void>}
 * @throws {Error} If the request fails or file operations fail
 */
export async function cliInit(): Promise<void> {
  const response = await fetch(`${API_URL}/api/init`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch wfs.css content.");
  }

  const newGlobalCSS = await response.text();

  const filePath = path.join(process.cwd(), "wfs.css");

  try {
    if (fs.existsSync(filePath)) {
      // If wfs.css exists, append the new content
      const existingContent = fs.readFileSync(filePath, "utf8");
      const updatedContent = existingContent + "\n\n" + newGlobalCSS;
      fs.writeFileSync(filePath, updatedContent);
      console.log("wfs.css file updated successfully.");
    } else {
      // If wfs.css doesn't exist, create a new file
      fs.writeFileSync(filePath, newGlobalCSS);
      console.log("wfs.css file created successfully.");
    }
  } catch (error) {
    throw new Error(`Failed to create or update wfs.css file: ${error}`);
  }
}

/**
 * Activates a license key using the API.
 *
 * This function performs the following steps:
 * 1. Sends a POST request to the license activation endpoint
 * 2. Validates the response
 * 3. Returns the API response
 *
 * @param {LicenseKey} licenseKey - The license key to activate
 * @returns {Promise<APIResponse>} The API response
 * @throws {Error} If the license key is invalid or the request fails
 */
export async function cliActivateLicense(
  licenseKey: LicenseKey
): Promise<APIResponse> {
  if (!API_URL) {
    throw new Error(
      "API_URL is not set. Please check your environment variables."
    );
  }

  const response = await fetch(`${API_URL}/api/activate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ licenseKey }),
  });

  if (!response.ok) {
    throw new Error("License key is invalid.");
  }

  const data = (await response.json()) as APIResponse;

  // Return the entire data object
  return data;
}

/**
 * Deactivates a license key using the API.
 *
 * This function performs the following steps:
 * 1. Sends a POST request to the license deactivation endpoint
 * 2. Validates the response
 * 3. Returns the API response
 *
 * @param {LicenseKey} licenseKey - The license key to deactivate
 * @param {InstanceId} instanceId - The instance ID to deactivate
 * @returns {Promise<APIResponse>} The API response
 * @throws {Error} If the license key is invalid or the request fails
 */
export async function cliDeactivateLicense(
  licenseKey: LicenseKey,
  instanceId: InstanceId
): Promise<APIResponse> {
  const response = await fetch(`${API_URL}/api/deactivate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ licenseKey, instanceId }),
  });

  if (!response.ok) {
    throw new Error("Failed to deactivate license.");
  }

  return (await response.json()) as APIResponse;
}

/**
 * Deactivates all instances using the API.
 *
 * This function performs the following steps:
 * 1. Sends a POST request to the deactivation endpoint
 * 2. Validates the response
 * 3. Returns the API response
 *
 * @param {LicenseKey} licenseKey - The license key to deactivate
 * @returns {Promise<APIResponse>} The API response
 * @throws {Error} If the license key is invalid or the request fails
 */
export async function cliDeactivateAllInstances(
  licenseKey: LicenseKey
): Promise<APIResponse> {
  const response = await fetch(`${API_URL}/api/deactivate-all-instances`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ licenseKey }),
  });

  if (!response.ok) {
    throw new Error("Failed to deactivate all instances.");
  }

  return (await response.json()) as APIResponse;
}

/**
 * Fetches available components from the API.
 *
 * This function performs the following steps:
 * 1. Sends a GET request to the components endpoint
 * 2. Validates the response
 * 3. Returns the list of available components
 *
 * @param {LicenseKey} licenseKey - The license key for authentication
 * @returns {Promise<Component[]>} An array of available components
 * @throws {Error} If the request fails or the response is invalid
 */
export async function cliFetchComponents(
  licenseKey: LicenseKey
): Promise<Component[]> {
  const response = await fetch(`${API_URL}/api/components`, {
    headers: {
      Authorization: `Bearer ${licenseKey}`,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch available components: ${response.statusText}`
    );
  }

  const data = (await response.json()) as ComponentsResponse;
  return data.components;
}

/**
 * Installs a component by fetching its data and writing it to the file system.
 *
 * This function performs the following steps:
 * 1. Fetches component data from the API
 * 2. Validates the response
 * 3. Creates the component directory
 * 4. Writes component files to the directory
 *
 * @param {Component} component - The component to install
 * @param {LicenseKey} licenseKey - The license key for authentication
 * @param {string} finalComponentName - The final name of the component
 * @param {string} workingDir - The working directory
 * @returns {Promise<void>}
 * @throws {Error} If the request fails, the response is invalid, or file operations fail
 */
export async function cliInstallComponent(
  component: Component,
  licenseKey: LicenseKey,
  finalComponentName: string,
  workingDir: string
): Promise<void> {
  /*---------------------------------------------
  / Step 1: Fetch component data
  /---------------------------------------------*/
  const response = await fetch(
    `${API_URL}/api/components?component=${component}`,
    {
      headers: {
        Authorization: `Bearer ${licenseKey}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch ${
        component.charAt(0).toUpperCase() + component.slice(1)
      } component: ${response.statusText}`
    );
  }

  const data = (await response.json()) as ComponentFilesResponse;

  /*---------------------------------------------
  / Step 2: Validate response data
  /---------------------------------------------*/
  if (
    !data.components ||
    !Array.isArray(data.components) ||
    data.components.length === 0
  ) {
    throw new Error(
      `Invalid response for ${
        component.charAt(0).toUpperCase() + component.slice(1)
      } component: components are missing or invalid`
    );
  }

  /*---------------------------------------------
  / Step 3: Create component directory
  /---------------------------------------------*/
  const componentDir = path.join(workingDir, finalComponentName.toLowerCase());

  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });
  }

  /*---------------------------------------------
  / Step 4: Write component files
  /---------------------------------------------*/
  for (const { fileName, code } of data.components) {
    const filePath = path.join(componentDir, fileName);
    fs.writeFileSync(filePath, code);
  }
}

// Add a new function to fetch wfs.css content
export async function fetchGlobalCSSContent(): Promise<string> {
  const response = await fetch(`${API_URL}/api/init`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch wfs.css content.");
  }

  return await response.text();
}

export async function cliInstallBitsUI(): Promise<void> {
  const useYarn = fs.existsSync(path.join(process.cwd(), "yarn.lock"));
  const usePnpm = fs.existsSync(path.join(process.cwd(), "pnpm-lock.yaml"));

  let installCommand;
  if (usePnpm) {
    installCommand = "pnpm add bits-ui";
  } else if (useYarn) {
    installCommand = "yarn add bits-ui";
  } else {
    installCommand = "npm install bits-ui";
  }

  execSync(installCommand, { stdio: "ignore" });
}
