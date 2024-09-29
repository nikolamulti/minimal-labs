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

// Function to minify compiled JavaScript files
async function minifyFiles() {
  // Read all files in the dist directory
  const files = await fs.readdir(distDir);
  for (const file of files) {
    // Process only .mjs files (ES modules)
    if (path.extname(file) === ".mjs") {
      const filePath = path.join(distDir, file);
      // Read the content of the file
      const code = await fs.readFile(filePath, "utf-8");
      // Minify the code using terser
      const minified = await minify(code, {
        module: true,
        toplevel: true,
      });
      // Write the minified code back to the file
      await fs.writeFile(filePath, minified.code);
    }
  }
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
    // Step 1: Clean the dist directory
    await cleanDistDirectory();
    // Step 2: Compile TypeScript files
    await compileTSFiles();
    // Step 3: Minify the compiled JavaScript files
    await minifyFiles();
    // Step 4: Update package.json
    await updatePackageJson();
    console.log("Build completed successfully!");
  } catch (error) {
    // If any step of the build process fails, log the error and exit
    console.error("Build failed:", error);
    process.exit(1);
  }
}

// Execute the build process
build();
