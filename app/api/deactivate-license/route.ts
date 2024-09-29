import { NextResponse } from "next/server";
import {
  getAllInstancesByLicenseKey,
  getOrderIdByLicenseKey,
  deleteOrder,
  getOrderCustomerId,
  countCustomerOrders,
  deleteCustomer,
  removeInstanceIdByLicenseKey,
} from "@/utils/supabaseFunctions";
import fetch from "node-fetch";
import { DeactivateLicense } from "@/types";

// Import necessary functions from supabaseFunctions

const LEMON_SQUEEZY_API_KEY = process.env.LEMON_SQUEEZY_API_KEY;
const LEMON_SQUEEZY_DEACTIVATE_URL =
  "https://api.lemonsqueezy.com/v1/licenses/deactivate";

/**
 * Handles incoming POST requests for license key deactivation.
 *
 * Steps:
 * 1. Check if required environment variables are available
 * 2. Extract license key from request body
 * 3. Fetch the instance_id associated with the license key
 * 4. Attempt to deactivate the license with Lemon Squeezy API
 * 5. Remove the instance_id from the database if deactivation is successful
 * 6. Return appropriate response or error
 */
export async function POST(request: Request) {
  // Step 1: Check if required environment variables are available
  if (!LEMON_SQUEEZY_API_KEY) {
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  // Step 2: Extract license key from request body
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
    // Step 4: Attempt to deactivate the license with Lemon Squeezy API
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

    // Step 5: Check if deactivation was successful
    if (!response.ok || !deactivateData.deactivated) {
      return NextResponse.json(
        { error: "Failed to deactivate license" },
        { status: 400 }
      );
    }

    // Step 6: Remove the specific instance from the database
    if (instanceId) {
      await removeInstanceIdByLicenseKey(licenseKey, instanceId);
    }

    // NEWWWW
    // Step 6.5: Check if there are any remaining instances for this license key
    const remainingInstances = await getAllInstancesByLicenseKey(licenseKey);

    if (remainingInstances.length === 0) {
      // If no instances remain, remove the order associated with this license key
      const orderId = await getOrderIdByLicenseKey(licenseKey);
      if (orderId) {
        await deleteOrder(orderId);

        // Check if the customer has any remaining orders
        const customerId = await getOrderCustomerId(orderId);
        if (customerId) {
          const remainingOrders = await countCustomerOrders(customerId);
          if (remainingOrders === 0) {
            // If the customer has no remaining orders, delete the customer
            await deleteCustomer(customerId);
          }
        }
      }
    }

    // Step 7: Return success response
    return NextResponse.json({
      message: "License deactivated successfully",
      license_key: deactivateData.license_key,
    });
  } catch (error) {
    // Step 8: Handle any errors that occur during the process
    console.error("Error in deactivate-license:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
