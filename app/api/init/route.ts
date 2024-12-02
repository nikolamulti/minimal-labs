import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const GLOBALS_CSS_PATH = path.join(
  process.cwd(),
  "app",
  "api",
  "init",
  "global.css",
);

export async function GET(request: NextRequest) {
  try {
    // Read the contents of global.css
    const globalCSS = fs.readFileSync(GLOBALS_CSS_PATH, "utf-8");

    // Return the contents as the response
    return new NextResponse(globalCSS, {
      status: 200,
      headers: {
        "Content-Type": "text/css",
      },
    });
  } catch (error) {
    console.error("Error reading global.css:", error);
    return NextResponse.json(
      { error: "Failed to read global.css" },
      { status: 500 },
    );
  }
}
