import { log } from "@clack/prompts";

import fs from "fs";
import path from "path";
import os from "os";
import { Config } from "../types";

const CONFIG_FOLDER = path.join(os.homedir(), ".wfs-config");
const CONFIG_FILE = path.join(CONFIG_FOLDER, "config.json");

/**
 * Loads the configuration from the config file.
 *
 * This function performs the following steps:
 * 1. Attempts to read the config file
 * 2. Parses the JSON content of the file
 * 3. Returns the parsed config object or null if an error occurs
 *
 * @returns {Config | null} The loaded configuration object or null if the file doesn't exist or is invalid
 */
export function loadConfig(): Config | null {
  try {
    const data = fs.readFileSync(CONFIG_FILE, "utf8");
    return JSON.parse(data) as Config;
  } catch (error) {
    return null;
  }
}

/**
 * Saves the configuration to the config file.
 *
 * This function performs the following steps:
 * 1. Creates the config folder if it doesn't exist
 * 2. Converts the config object to a JSON string
 * 3. Writes the JSON string to the config file
 *
 * @param {Config} config - The configuration object to save
 */
export function saveConfig(config: Config): void {
  if (!fs.existsSync(CONFIG_FOLDER)) {
    fs.mkdirSync(CONFIG_FOLDER, { recursive: true });
  }
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2));
}

/**
 * Removes the configuration file if it exists.
 *
 * This function performs the following steps:
 * 1. Checks if the config file exists
 * 2. If it exists, deletes the file
 * 3. Removes the config folder if it's empty
 */
export function removeConfig(): void {
  if (fs.existsSync(CONFIG_FILE)) {
    fs.unlinkSync(CONFIG_FILE);
  }
  if (
    fs.existsSync(CONFIG_FOLDER) &&
    fs.readdirSync(CONFIG_FOLDER).length === 0
  ) {
    fs.rmdirSync(CONFIG_FOLDER);
  }
}

export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function handleError(error: unknown): void {
  log.error(`Error: ${error instanceof Error ? error.message : String(error)}`);
}
