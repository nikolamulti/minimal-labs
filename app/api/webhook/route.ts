/**
 * This file handles webhook events from Lemon Squeezy for a purchase system.
 * It processes various events such as order creation, license key updates, and order refunds.
 * The file interacts with a Supabase database to store and manage customer, order, and license information.
 */

import { NextResponse } from "next/server";

import {
  upsertCustomer,
  upsertOrder,
  getOrderLicenseKey,
  getOrderIdByLicenseKey,
  getOrderCustomerId,
  updateOrderLicenseKey,
  deleteInstancesByOrderId,
  deleteOrder,
  deleteCustomer,
  countCustomerOrders,
} from "@/utils/supabaseFunctions";

import {
  validateSignature,
  fetchLicenseKey,
} from "@/utils/LemonSqueezyFunctions";
import { LicenseKeyUpdatedWebhook } from "@/types/lemon-squeezy/webhook/license-key-updated";
import { OrderCreatedWebhook } from "@/types/lemon-squeezy/webhook/order-created";
import { OrderRefundedWebhook } from "@/types/lemon-squeezy/webhook/order-refunded";

// Get environment variables
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const LEMON_SQUEEZY_WEBHOOK_SECRET = process.env.LEMON_SQUEEZY_WEBHOOK_SECRET;
const LEMON_SQUEEZY_API_KEY = process.env.LEMON_SQUEEZY_API_KEY;

/**
 * Handles incoming POST requests for Lemon Squeezy webhooks.
 *
 * Steps:
 * 1. Check if all required environment variables are available
 * 2. Verify the Lemon Squeezy signature
 * 3. Parse the request body
 * 4. Determine the event type
 * 5. Handle the event based on its type
 * 6. Return appropriate response or error
 */
export async function POST(request: Request) {
  /*---------------------------------------------
  / Check if required environment variables are available
  /---------------------------------------------*/
  if (
    !SUPABASE_URL ||
    !SUPABASE_SERVICE_ROLE_KEY ||
    !LEMON_SQUEEZY_WEBHOOK_SECRET ||
    !LEMON_SQUEEZY_API_KEY
  ) {
    console.error("Missing configuration");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  /*---------------------------------------------
  / Process the incoming webhook
  /---------------------------------------------*/
  const rawBody = await request.text();
  const webhookData = JSON.parse(rawBody);
  const eventName = webhookData.meta.event_name;

  /*---------------------------------------------
  / Verify the Lemon Squeezy signature
  /---------------------------------------------*/
  const signature = request.headers.get("X-Signature") || "";

  const isValid = validateSignature(
    rawBody,
    signature,
    LEMON_SQUEEZY_WEBHOOK_SECRET
  );

  if (!isValid) {
    console.error("Invalid signature");
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  /*---------------------------------------------
  / Handle the event based on its type
  /---------------------------------------------*/
  try {
    switch (eventName) {
      case "order_created":
        return await handleOrderCreated(webhookData as OrderCreatedWebhook);
      case "license_key_updated":
        return await handleLicenseKeyUpdated(
          webhookData as LicenseKeyUpdatedWebhook
        );
      case "order_refunded":
        return await orderRefunded(webhookData as OrderRefundedWebhook);
      default:
        console.error(`Unsupported event type: ${eventName}`);
        return NextResponse.json(
          { error: `Unsupported event type: ${eventName}` },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error(`Error handling ${eventName} event: ${error}`);
    return NextResponse.json(
      { error: `Error handling ${eventName} event: ${error}` },
      { status: 500 }
    );
  }
}

/**
 * Handles the 'order_created' event from Lemon Squeezy.
 *
 * Steps:
 * 1. Extract order data from the webhook payload
 * 2. Fetch the license key associated with the order
 * 3. Extract the license key from the response
 * 4. Upsert customer data in Supabase
 * 5. Upsert order data in Supabase
 * 6. Return success response
 */

async function handleOrderCreated(webhookData: OrderCreatedWebhook) {
  const { data } = webhookData;

  const orderId = data.id;
  const email = data.attributes.user_email;
  const customerId = data.attributes.customer_id;
  const fullName = data.attributes.user_name;
  const licenseKeysUrl = data.relationships["license-keys"].links.related;

  const licenseData = await fetchLicenseKey(
    licenseKeysUrl,
    LEMON_SQUEEZY_API_KEY
  );

  const licenseKey = licenseData.data[0].attributes.key;

  console.log("License key:", licenseKey);

  await upsertCustomer(customerId, fullName, email);
  await upsertOrder(orderId, customerId, licenseKey);

  return NextResponse.json({
    message: `Customer and order data added to Supabase for order ${orderId}`,
  });
}

/**
 * Handles the 'license_key_updated' event from Lemon Squeezy.
 *
 * Steps:
 * 1. Extract data from the webhook payload
 * 2. Check if the order exists and if the license key has changed
 * 3. Update the license key in Supabase if it has changed
 * 4. Handle license deactivation if status is 'inactive'
 * 5. Return appropriate response
 */
async function handleLicenseKeyUpdated(webhookData: LicenseKeyUpdatedWebhook) {
  console.log(
    "Received license_key_updated webhook:",
    JSON.stringify(webhookData, null, 2)
  );

  const { data } = webhookData;

  const licenseKey = data.attributes.key;
  const orderId = data.attributes.order_id;

  if (!data || !data.attributes) {
    console.error("Invalid data structure in license_key_updated event");
    return NextResponse.json(
      { error: "Invalid data structure" },
      { status: 400 }
    );
  }

  if (!orderId || !licenseKey) {
    console.error(
      "Missing order_id or license key in license_key_updated event"
    );
    return NextResponse.json(
      { error: "Missing required data" },
      { status: 400 }
    );
  }

  try {
    const existingOrderId = await getOrderIdByLicenseKey(licenseKey);

    if (existingOrderId === null) {
      console.error(`No order found for license key: ${licenseKey}`);
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    await updateOrderLicenseKey(orderId, licenseKey);
    return NextResponse.json({ message: "License key updated successfully" });
  } catch (error) {
    console.error("Error handling license_key_updated event:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * Handles the 'order_refunded' event from Lemon Squeezy.
 *
 * Steps:
 * 1. Remove associated instances from Supabase
 * 2. Fetch the customer_id associated with this order
 * 3. Remove order from Supabase
 * 4. Check if this was the customer's only order
 * 5. If it was the only order, remove the customer from Supabase
 */
async function orderRefunded(webhookData: OrderRefundedWebhook) {
  const { data } = webhookData;

  const orderId = data.id;

  await deleteInstancesByOrderId(orderId);
  const customer_id = await getOrderCustomerId(orderId);
  await deleteOrder(orderId);
  const orderCount = await countCustomerOrders(customer_id);

  if (orderCount === 0) {
    await deleteCustomer(customer_id);

    return NextResponse.json({
      message: `Order ${orderId}, associated instances, and customer removed from Supabase`,
    });
  }

  return NextResponse.json({
    message: `Order ${orderId} and associated instances removed from Supabase`,
  });
}
