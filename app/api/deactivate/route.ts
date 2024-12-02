import { NextResponse } from "next/server";
import { removeInstanceIdByLicenseKey } from "@/utils/supabaseFunctions";
import fetch from "node-fetch";
import { DeactivateLicense } from "@/types";

const LEMON_SQUEEZY_API_KEY = process.env.LEMON_SQUEEZY_API_KEY;
const LEMON_SQUEEZY_DEACTIVATE_URL =
  "https://api.lemonsqueezy.com/v1/licenses/deactivate";

/**
 * Handles incoming POST requests for license key deactivation.
 *
 * Steps:
 * 1. Check if required environment variables are available
 * 2. Extract license key and instance ID from request body
 * 3. Attempt to deactivate the license with Lemon Squeezy API
 * 4. Remove the instance_id from the database if deactivation is successful
 * 5. Return appropriate response or error
 */
export async function POST(request: Request) {
  // Step 1: Check if required environment variables are available
  if (!LEMON_SQUEEZY_API_KEY) {
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  // Step 2: Extract license key and instance ID from request body
  const { licenseKey, instanceId } = await request.json();

  if (!licenseKey) {
    return NextResponse.json(
      {
        error:
          "Missing license key. Please provide a license key to deactivate.",
      },
      { status: 400 }
    );
  }

  try {
    // Step 3: Attempt to deactivate the license with Lemon Squeezy API
    const response = await fetch(LEMON_SQUEEZY_DEACTIVATE_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${LEMON_SQUEEZY_API_KEY}`,
      },
      body: JSON.stringify({
        license_key: licenseKey,
        instance_id: instanceId,
      }),
    });

    const deactivateData = (await response.json()) as DeactivateLicense;

    // Step 4: Check if deactivation was successful
    if (!response.ok || !deactivateData.deactivated) {
      return NextResponse.json(
        { error: "Failed to deactivate license" },
        { status: 400 }
      );
    }

    // Step 5: Remove the specific instance from the database
    if (instanceId) {
      await removeInstanceIdByLicenseKey(licenseKey, instanceId);
    }

    // Step 6: Return success response
    return NextResponse.json({
      message: "License deactivated successfully",
      license_key: deactivateData.license_key,
    });
  } catch (error) {
    // Step 7: Handle any errors that occur during the process
    console.error("Error in deactivate-license:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
