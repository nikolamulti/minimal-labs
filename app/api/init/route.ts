import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const GLOBALS_CSS_PATH = path.join(
  process.cwd(),
  "app",
  "api",
  "init",
  "globals.css"
);

export async function GET(request: NextRequest) {
  try {
    // Read the contents of globals.css
    const globalsCSS = fs.readFileSync(GLOBALS_CSS_PATH, "utf-8");

    // Return the contents as the response
    return new NextResponse(globalsCSS, {
      status: 200,
      headers: {
        "Content-Type": "text/css",
      },
    });
  } catch (error) {
    console.error("Error reading globals.css:", error);
    return NextResponse.json(
      { error: "Failed to read globals.css" },
      { status: 500 }
    );
  }
}
