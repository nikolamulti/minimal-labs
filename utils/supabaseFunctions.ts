import { supabase } from "@/utils";

/**
 * Supabase Functions
 *
 * This module contains functions for interacting with the Supabase database.
 * These functions handle CRUD operations for customers, orders, and instances.
 */

/**
 * Upserts a customer in the database.
 * @param customerId - The unique identifier for the customer.
 * @param fullName - The full name of the customer.
 * @param email - The email address of the customer.
 * @example await upsertCustomer(customerId, fullName, email);
 */
export async function upsertCustomer(
  customerId: number,
  fullName: string,
  email: string
) {
  const { error } = await supabase
    .from("customers")
    .upsert([{ customer_id: customerId, full_name: fullName, email: email }], {
      onConflict: "customer_id",
    });

  if (error) {
    console.error("Supabase customer insert error:", error);
    throw new Error("Failed to add customer data to Supabase");
  }
}

/**
 * Upserts an order in the database.
 * @param orderId - The unique identifier for the order.
 * @param customerId - The customer ID associated with the order.
 * @param licenseKey - The license key for the order.
 * @example await upsertOrder(orderId, customerId, licenseKey);
 */
export async function upsertOrder(
  orderId: number,
  customerId: number,
  licenseKey: string
) {
  const { error } = await supabase
    .from("orders")
    .upsert(
      [{ order_id: orderId, customer_id: customerId, license_key: licenseKey }],
      {
        onConflict: "order_id",
      }
    );

  if (error) {
    console.error("Supabase order insert error:", error);
    throw new Error("Failed to add order data to Supabase");
  }
}

/**
 * Retrieves the license key for a given order.
 * @param orderId - The unique identifier for the order.
 * @example const { licenseKey } = await getOrderLicenseKey(orderId);
 * @returns `licenseKey`.
 */
export async function getOrderLicenseKey(orderId: number) {
  const { data, error } = await supabase
    .from("orders")
    .select("license_key")
    .eq("order_id", orderId)
    .single();

  const licenseKey = data?.license_key;

  if (error) {
    console.error("Supabase order fetch error:", error);
    throw new Error("Failed to fetch order data from Supabase");
  }

  return licenseKey;
}

/**
 * Updates the license key for a given order.
 * @param orderId - The unique identifier for the order.
 * @param licenseKey - The new license key to be updated.
 * @example await updateOrderLicenseKey(orderId, licenseKey);
 */
export async function updateOrderLicenseKey(
  orderId: number,
  licenseKey: string
) {
  const { error } = await supabase
    .from("orders")
    .update({ license_key: licenseKey })
    .eq("order_id", orderId);

  if (error) {
    console.error("Supabase license key update error:", error);
    throw new Error("Failed to update license key in Supabase");
  }
}

/**
 * Retrieves an order by its license key.
 * @param licenseKey - The license key to search for.
 * @returns The order data associated with the license key, or null if not found.
 * @example const { orderId } = await getOrderIdByLicenseKey(licenseKey);
 */
export async function getOrderIdByLicenseKey(licenseKey: string) {
  if (!licenseKey) {
    console.error("License key is undefined or empty");
    return null;
  }

  const { data, error } = await supabase
    .from("orders")
    .select("order_id")
    .eq("license_key", licenseKey)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      // No data found
      return null;
    }
    console.error("Supabase order fetch error:", error);
    throw new Error("Failed to fetch order data from Supabase");
  }

  return data?.order_id ?? null;
}

/**
 * Deletes all instances associated with a given order.
 * @param orderId - The unique identifier for the order.
 * @example await deleteInstancesByOrderId(orderId);
 */
export async function deleteInstancesByOrderId(orderId: string) {
  const { error } = await supabase
    .from("instances")
    .delete()
    .eq("order_id", orderId);

  if (error) {
    console.error("Supabase instances deletion error:", error);
    throw new Error("Failed to delete instances from Supabase");
  }
}

/**
 * Retrieves the customer ID associated with a given order.
 * @param orderId - The unique identifier for the order.
 * @returns The customer ID associated with the order.
 * @example const { customerId } = await getOrderCustomerId(orderId);
 */
export async function getOrderCustomerId(orderId: string) {
  const { data, error } = await supabase
    .from("orders")
    .select("customer_id")
    .eq("order_id", orderId)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      // No order found
      return null;
    }
    console.error("Supabase order fetch error:", error);
    throw new Error("Failed to fetch order data from Supabase");
  }

  return data.customer_id;
}

/**
 * Deletes an order from the database.
 * @param orderId - The unique identifier for the order to be deleted.
 * @example await deleteOrder(orderId);
 */
export async function deleteOrder(orderId: string) {
  const { error } = await supabase
    .from("orders")
    .delete()
    .eq("order_id", orderId);

  if (error) {
    console.error("Supabase order deletion error:", error);
    throw new Error("Failed to delete order from Supabase");
  }
}

/**
 * Counts the number of orders for a given customer.
 * @param customerId - The unique identifier for the customer.
 * @example const { count } = await countCustomerOrders(customerId);
 * @returns `count`.
 */
export async function countCustomerOrders(customerId: string) {
  const { count, error } = await supabase
    .from("orders")
    .select("order_id", { count: "exact" })
    .eq("customer_id", customerId);

  if (error) {
    console.error("Supabase order count error:", error);
    throw new Error("Failed to count customer orders in Supabase");
  }

  return count;
}

/**
 * Deletes a customer from the database.
 * @param customerId - The unique identifier for the customer to be deleted.
 * @example await deleteCustomer(customerId);
 */
export async function deleteCustomer(customerId: string) {
  const { error } = await supabase
    .from("customers")
    .delete()
    .eq("customer_id", customerId);

  if (error) {
    console.error("Supabase customer deletion error:", error);
    throw new Error("Failed to delete customer from Supabase");
  }
}

/**
 * Inserts a new instance into the database.
 * @param orderId - The order ID associated with the instance.
 * @param instanceId - The unique identifier for the instance.
 * @example await insertInstance(orderId, instanceId);
 * @returns `error`
 */
export async function insertInstance(orderId: number, instanceId: string) {
  const { error } = await supabase
    .from("instances")
    .insert({
      order_id: orderId,
      instance_id: instanceId,
    })
    .select();

  if (error) {
    console.error("Supabase instance insert error:", error);
    throw new Error("Failed to insert instance into Supabase");
  }

  return { error };
}

/**
 * Fetches the instance_id for a given license key.
 * @param licenseKey - The license key to search for.
 * @example const { instanceId } = await getInstanceIdByLicenseKey(licenseKey);
 * @returns The `instanceId` associated with the license key, or null if not found.
 */
export async function getInstanceIdByLicenseKey(licenseKey: string) {
  // Get the order_id from the orders table
  const { data: orderData, error: orderError } = await supabase
    .from("orders")
    .select("order_id")
    .eq("license_key", licenseKey)
    .single();

  if (orderError) {
    console.error("Error fetching order:", orderError);
    throw new Error("Failed to fetch order data");
  }

  // Now, get the instance_id from the instances table
  const { data: instanceData, error: instanceError } = await supabase
    .from("instances")
    .select("instance_id")
    .eq("order_id", orderData.order_id)
    .single();

  if (instanceError) {
    if (instanceError.code === "PGRST116") {
      // No instance found
      return { instanceId: null };
    }
    console.error("Error fetching instance:", instanceError);
    throw new Error("Failed to fetch instance data");
  }

  return { instanceId: instanceData.instance_id };
}

/**
 * Removes the instance_id for a given license key.
 * @param licenseKey - The license key to update.
 */
export async function removeInstanceIdByLicenseKey(
  licenseKey: string,
  instanceId: string
) {
  // First, get the order_id from the orders table
  const { data: orderData, error: orderError } = await supabase
    .from("orders")
    .select("order_id")
    .eq("license_key", licenseKey)
    .single();

  if (orderError) {
    console.error("Error fetching order:", orderError);
    throw new Error("Failed to fetch order data");
  }

  // Now, remove the instance from the instances table
  const { error: instanceError } = await supabase
    .from("instances")
    .delete()
    .eq("order_id", orderData.order_id)
    .eq("instance_id", instanceId);

  if (instanceError) {
    console.error("Error removing instance:", instanceError);
    throw new Error("Failed to remove instance");
  }
}

export async function getAllInstancesByLicenseKey(licenseKey: string) {
  const { data, error } = await supabase
    .from("orders")
    .select(
      `
      order_id,
      instances (*)
    `
    )
    .eq("license_key", licenseKey)
    .single();

  if (error) {
    console.error("Error fetching instances:", error);
    throw new Error("Failed to fetch instances");
  }

  return data.instances;
}

export async function removeAllInstancesByLicenseKey(licenseKey: string) {
  // First, get the order_id from the orders table
  const { data: orderData, error: orderError } = await supabase
    .from("orders")
    .select("order_id")
    .eq("license_key", licenseKey)
    .single();

  if (orderError) {
    console.error("Error fetching order:", orderError);
    throw new Error("Failed to fetch order data");
  }

  // Now, remove all instances for this order
  const { error } = await supabase
    .from("instances")
    .delete()
    .eq("order_id", orderData.order_id);

  if (error) {
    console.error("Error removing instances:", error);
    throw new Error("Failed to remove instances");
  }
}
