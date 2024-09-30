import { NextResponse } from "next/server";
import {
  getOrderIdByLicenseKey,
  insertInstance,
} from "@/utils/supabaseFunctions";

import {
  validateLicenseKey,
  activateLicenseKey,
} from "@/utils/LemonSqueezyFunctions";

const LEMON_SQUEEZY_API_KEY = process.env.LEMON_SQUEEZY_API_KEY;

/**
 * Handles incoming POST requests for license key activation.
 *
 * Steps:
 * 1. Check if required environment variables are available
 * 2. Extract license key from request body
 * 3. Validate the license key
 * 4. Activate the license key
 * 5. Get order associated with license key
 * 6. Insert new instance if activation is successful
 * 7. Return appropriate response or error
 */

export async function POST(request: Request): Promise<NextResponse> {
  /*---------------------------------------------
  / Check if required environment variables are available
  /---------------------------------------------*/
  if (!LEMON_SQUEEZY_API_KEY) {
    console.error(
      "Server configuration error: LEMON_SQUEEZY_API_KEY is not set"
    );

    return NextResponse.json(
      { error: "Server configuration error: LEMON_SQUEEZY_API_KEY is not set" },
      { status: 500 }
    );
  }

  /*---------------------------------------------
  / Extract license key from request
  /---------------------------------------------*/
  const { licenseKey } = await request.json();

  if (!licenseKey) {
    console.error("Missing license key in request body");

    return NextResponse.json(
      { error: "Missing license key in request body" },
      { status: 400 }
    );
  }

  try {
    /*---------------------------------------------
    / Validate license key
    /---------------------------------------------*/
    const { valid, error: validationError } = await validateLicenseKey(
      licenseKey,
      LEMON_SQUEEZY_API_KEY
    );
    if (!valid) {
      console.error("License key validation failed:", validationError);

      return NextResponse.json(
        { error: `Invalid license key: ${validationError}` },
        { status: 400 }
      );
    }

    /*---------------------------------------------
    / Activate license key
    /---------------------------------------------*/
    const {
      activated,
      instanceId,
      error: activationError,
    } = await activateLicenseKey(
      licenseKey,
      "CLI Activation",
      LEMON_SQUEEZY_API_KEY
    );
    if (!activated) {
      console.error("License key activation failed:", activationError);

      return NextResponse.json(
        { error: `Failed to activate license key: ${activationError}` },
        { status: 400 }
      );
    }

    /*---------------------------------------------
    / Get order associated with license key
    /---------------------------------------------*/
    const orderId = await getOrderIdByLicenseKey(licenseKey);
    if (!orderId) {
      console.error("No order found for license key:", licenseKey);

      return NextResponse.json(
        { error: `No order found for license key: ${licenseKey}` },
        { status: 404 }
      );
    }

    /*---------------------------------------------
    / Insert instance into database
    /---------------------------------------------*/
    if (!instanceId) {
      console.error("Failed to get instance ID from activation");

      return NextResponse.json(
        { error: "Failed to get instance ID from activation" },
        { status: 500 }
      );
    }

    const { error } = await insertInstance(orderId, instanceId);
    if (error) {
      console.error("Failed to insert instance:", error);

      return NextResponse.json(
        { error: `Failed to insert instance in database: ${error}` },
        { status: 500 }
      );
    }

    /*---------------------------------------------
    / Return successful response
    /---------------------------------------------*/
    return NextResponse.json(
      {
        success: true,
        instance_id: instanceId,
        license_key: licenseKey,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Unexpected error occurred during license activation process:",
      error
    );

    return NextResponse.json(
      {
        error: `Unexpected error occurred during license activation process:: ${
          error instanceof Error ? error.message : String(error)
        }`,
      },
      { status: 500 }
    );
  }
}
