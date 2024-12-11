# Webflow Svelte CLI

A command-line interface for adding Webflow Svelte components to your project.

## Installation

```bash
# Using npm
npm install webflow-svelte-cli

# Using yarn
yarn add webflow-svelte-cli

# Using pnpm
pnpm add webflow-svelte-cli
```

## Usage

The CLI provides several commands to help you manage your Webflow Svelte components:

### Initialize Project

```bash
wfs init
```

This command:

- Prompts for your license key (if not already activated)
- Installs required dependencies (bits-ui)
- Creates wfs.css with required styles
- Installs all available components
- Allows you to customize installation paths for both wfs.css and components

### Activate License

```bash
wfs activate
```

This command:

- Prompts for your license key
- Activates the license for your machine
- Saves the configuration locally

### Deactivate License

```bash
wfs deactivate
```

This command:

- Deactivates your license key
- Removes local configuration

### Help

```bash
wfs help
```

Displays available commands and their descriptions.

## Project Structure

After initialization, your project will have the following structure (by default):

```
your-project/
├── src/
│   ├── lib/
│   │   └── components/    # Installed components
│   └── wfs.css         # Required styles
```

## Requirements

- Node.js 14.0.0 or higher
- npm, yarn, or pnpm package manager

## License

This package requires a valid license key. Visit [Minimal Labs](https://minimal-labs.com/svelte/license) for more information about licensing.

## Support

For support, documentation, and updates, visit:

- [Documentation](https://minimal-labs.com/svelte/docs)
- [Homepage](https://minimal-labs.com/svelte)

## Author

Minimal Labs
