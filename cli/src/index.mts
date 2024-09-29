#!/usr/bin/env node

import { log, outro } from "@clack/prompts";
import { activate, deactivate } from "./license.mjs";
import { add } from "./components.mjs";
import { Command } from "./types.mjs";

function displayHelp(): void {
  log.info(`Available commands:
activate        - Activate a license
deactivate      - Deactivate the license
add [component] - Add components (if component is specified, adds that component immediately)
help            - Display this help message`);
}

// Main function to run the CLI
async function main(): Promise<void> {
  const command = process.argv[2] as Command;
  const componentToAdd = process.argv[3];

  switch (command) {
    case "activate":
      await activate();
      break;
    case "deactivate":
      await deactivate();
      break;
    case "add":
      await add(componentToAdd);
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
