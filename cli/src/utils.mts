import { log } from "@clack/prompts";

export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function handleError(error: unknown): void {
  log.error(`Error: ${error instanceof Error ? error.message : String(error)}`);
}
