import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface ComponentTemplate {
  fileName: string;
  code: string;
}

const COMPONENTS_DIR = path.join(process.cwd(), "app", "api", "components");

async function getComponentTemplates(
  componentName: string
): Promise<ComponentTemplate[]> {
  const componentDir = path.join(COMPONENTS_DIR, componentName);

  if (!fs.existsSync(componentDir)) {
    return [];
  }

  const files = fs.readdirSync(componentDir);
  const templates: ComponentTemplate[] = [];

  for (const file of files) {
    if (file.endsWith(".svelte") || file.endsWith(".ts")) {
      const filePath = path.join(componentDir, file);
      const code = fs.readFileSync(filePath, "utf-8");
      templates.push({
        fileName: file,
        code: code,
      });
    }
  }

  return templates;
}

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json(
      { error: "Invalid authorization header" },
      { status: 401 }
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const licenseKey = authHeader.split(" ")[1];

  // Here you would typically validate the license key
  // For now, we'll assume it's valid

  const component = request.nextUrl.searchParams.get("component");

  // If no specific component is requested, return the list of available components
  if (!component) {
    const availableComponents = fs
      .readdirSync(COMPONENTS_DIR)
      .filter((item) =>
        fs.statSync(path.join(COMPONENTS_DIR, item)).isDirectory()
      );
    return NextResponse.json({ components: availableComponents });
  }

  const componentTemplates = await getComponentTemplates(component);

  if (componentTemplates.length === 0) {
    return NextResponse.json({ error: "Invalid component" }, { status: 400 });
  }

  return NextResponse.json({
    components: componentTemplates,
  });
}
