import { NextResponse } from "next/server";
import fetch from "node-fetch";
import {
  removeAllInstancesByLicenseKey,
  getAllInstancesByLicenseKey,
  getOrderIdByLicenseKey,
  deleteOrder,
  getOrderCustomerId,
  countCustomerOrders,
  deleteCustomer,
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

    // Find and remove the order associated with this license key
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

    return NextResponse.json({
      message: "All instances deactivated and order removed successfully",
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
