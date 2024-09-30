import { NextResponse } from "next/server";
import fetch from "node-fetch";
import {
  removeAllInstancesByLicenseKey,
  getAllInstancesByLicenseKey,
} from "@/utils/supabaseFunctions";
import { DeactivateLicense } from "@/types";

const LEMON_SQUEEZY_API_KEY = process.env.LEMON_SQUEEZY_API_KEY;
const LEMON_SQUEEZY_DEACTIVATE_URL =
  "https://api.lemonsqueezy.com/v1/licenses/deactivate";

export async function POST(request: Request) {
  if (!LEMON_SQUEEZY_API_KEY) {
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  const { licenseKey } = await request.json();

  if (!licenseKey) {
    return NextResponse.json({ error: "Missing license key" }, { status: 400 });
  }

  try {
    const instances = await getAllInstancesByLicenseKey(licenseKey);

    for (const instance of instances) {
      const response = await fetch(LEMON_SQUEEZY_DEACTIVATE_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${LEMON_SQUEEZY_API_KEY}`,
        },
        body: JSON.stringify({
          license_key: licenseKey,
          instance_id: instance.instance_id,
        }),
      });

      const deactivateData = (await response.json()) as DeactivateLicense;

      if (!response.ok || !deactivateData.deactivated) {
        console.error(`Failed to deactivate instance ${instance.instance_id}`);
      }
    }

    // Remove all instances for this license key from the database
    await removeAllInstancesByLicenseKey(licenseKey);

    return NextResponse.json({
      message: "All instances deactivated successfully",
      license_key: licenseKey,
    });
  } catch (error) {
    console.error("Error in deactivate-all-instances:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
