// Import necessary modules for the build process
import { exec } from "child_process";
import { minify } from "terser";
import fs from "fs/promises";
import path from "path";
import util from "util";

// Convert the exec function to return a Promise for easier async handling
const execPromise = util.promisify(exec);
// Set the output directory for compiled files
const distDir = "./dist";

// Function to remove all files from the dist directory
async function cleanDistDirectory() {
  try {
    await fs.rm(distDir, { recursive: true, force: true });
    await fs.mkdir(distDir, { recursive: true });
    console.log("Cleaned dist directory.");
  } catch (error) {
    console.error("Error cleaning dist directory:", error);
    process.exit(1);
  }
}

// Function to compile TypeScript files
async function compileTSFiles() {
  try {
    // Execute the TypeScript compiler (tsc) command
    await execPromise("tsc");
    console.log("TypeScript compilation completed successfully.");
  } catch (error) {
    // If compilation fails, log the error and exit the process
    console.error("TypeScript compilation failed:", error);
    process.exit(1);
  }
}

// Updated function to replace path aliases in compiled files
async function replacePathAliases() {
  const files = await fs.readdir(distDir);
  for (const file of files) {
    if (path.extname(file) === ".mjs") {
      const filePath = path.join(distDir, file);
      let content = await fs.readFile(filePath, "utf-8");

      // Replace ./logic with ./logic.mjs
      content = content.replace(
        /from ['"]\.\/logic['"]/g,
        "from './logic.mjs'",
      );

      // Replace ./api with ./api.mjs
      content = content.replace(/from ['"]\.\/api['"]/g, "from './api.mjs'");

      await fs.writeFile(filePath, content);
    }
  }
  console.log("Replaced path aliases in compiled files.");
}

// Updated minifyFiles function to handle .mjs files
async function minifyFiles() {
  const files = await fs.readdir(distDir);
  for (const file of files) {
    if (path.extname(file) === ".mjs") {
      const filePath = path.join(distDir, file);
      const code = await fs.readFile(filePath, "utf-8");
      const minified = await minify(code, {
        module: true,
        toplevel: true,
      });
      await fs.writeFile(filePath, minified.code);
    }
  }
  console.log("Minified JavaScript files.");
}

// Function to update package.json
async function updatePackageJson() {
  const packageJsonPath = "./package.json";
  const packageJson = JSON.parse(await fs.readFile(packageJsonPath, "utf-8"));
  packageJson.files = ["dist"];
  packageJson.bin = {
    wfs: "./dist/index.mjs",
  };
  await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log("Updated package.json.");
}

// Main build function to orchestrate the build process
async function build() {
  try {
    await cleanDistDirectory();
    await compileTSFiles();
    await replacePathAliases();
    await minifyFiles();
    await updatePackageJson();
    console.log("Build completed successfully!");
  } catch (error) {
    console.error("Build failed:", error);
    process.exit(1);
  }
}

// Execute the build process
build();
