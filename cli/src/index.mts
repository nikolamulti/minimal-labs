#!/usr/bin/env node

import { log, intro, outro } from "@clack/prompts";
import { activate, deactivate, init } from "./logic.mjs";
import { Command } from "./types/index.js";

function displayHelp(): void {
  intro("WFS CLI");
  log.info(`Available commands:
init            - Initialize the project and install all components
activate        - Activate a license
deactivate      - Deactivate the license
help            - Display this help message`);
  outro("For more information, visit https://minimal-labs.com/svelte/docs");
}

// Main function to run the CLI
async function main(): Promise<void> {
  const command = process.argv[2] as Command;

  switch (command) {
    case "init":
      await init();
      break;
    case "activate":
      await activate();
      break;
    case "deactivate":
      await deactivate();
      break;
    case "help":
      displayHelp();
      break;
    default:
      log.error("Invalid command. Use 'help' to see available commands.");
      displayHelp();
      process.exit(1);
  }
}

// Run the main function and catch any uncaught errors
main().catch((error: unknown) =>
  log.error(`Error: ${error instanceof Error ? error.message : String(error)}`)
);
