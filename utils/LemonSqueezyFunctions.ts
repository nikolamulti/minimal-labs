import type {
  ActivateLicense,
  ValidateLicense,
  LicenseKeyObject,
} from "@/types";
import fetch from "node-fetch";
import crypto from "crypto";

const LEMON_SQUEEZY_VALIDATE_URL =
  "https://api.lemonsqueezy.com/v1/licenses/validate";
const LEMON_SQUEEZY_ACTIVATE_URL =
  "https://api.lemonsqueezy.com/v1/licenses/activate";

/**
 * Fetches the license key from the given URL.
 * @param licenseKeysUrl - The URL to fetch the license key from.
 * @param apiKey - The Lemon Squeezy API key.
 * @example const { licenseKey } = await fetchLicenseKey(licenseKeysUrl, apiKey);
 * @returns The license key response including `licenseKey`.
 */
export async function fetchLicenseKey(
  licenseKeysUrl: string,
  apiKey: string | undefined
): Promise<LicenseKeyObject> {
  if (!apiKey) {
    console.error("API key is not provided");
    throw new Error("API key is not provided");
  }

  try {
    const response = await fetch(licenseKeysUrl, {
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch license key: ${response.status}.`);
    }

    const licenseKey = (await response.json()) as LicenseKeyObject;

    if (!licenseKey) {
      throw new Error("License key not found");
    }

    return licenseKey;
  } catch (error) {
    console.error("Error fetching license key:", error);
    throw new Error(
      `Failed to fetch license key: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

/**
 * Validates a license key with Lemon Squeezy API.
 * @param licenseKey - The license key to validate.
 * @param apiKey - The Lemon Squeezy API key.
 * @example const { valid, error } = await validateLicenseKey(licenseKey, apiKey);
 * @returns The validation response including `valid` and `error`.
 */
export async function validateLicenseKey(
  licenseKey: string,
  apiKey: string
): Promise<ValidateLicense> {
  if (!apiKey) {
    throw new Error("API key is not provided");
  }

  try {
    const response = await fetch(LEMON_SQUEEZY_VALIDATE_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ license_key: licenseKey }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { valid, license_key, instance, error } =
      (await response.json()) as ValidateLicense;

    if (!valid) {
      throw new Error(error || "Invalid license key");
    }

    return {
      valid,
      error,
    };
  } catch (error) {
    console.error("Error validating license key:", error);
    throw new Error(
      `Failed to validate license key: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

/**
 * Activates a license key with Lemon Squeezy API.
 * @param licenseKey - The license key to activate.
 * @param instanceName - The name of the instance to activate.
 * @param apiKey - The Lemon Squeezy API key.
 * @example const { activated, error, instanceId } = await activateLicenseKey(licenseKey, instanceName, apiKey);
 * @returns The activation response including `activated`, `error`, and `instanceId`.
 */
export async function activateLicenseKey(
  licenseKey: string,
  instanceName: string,
  apiKey: string
): Promise<any> {
  if (!apiKey) {
    throw new Error("API key is not provided");
  }

  try {
    const response = await fetch(LEMON_SQUEEZY_ACTIVATE_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        license_key: licenseKey,
        instance_name: instanceName,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to activate license key. HTTP status: ${response.status}.`
      );
    }

    const activationResponse = (await response.json()) as ActivateLicense;

    const { activated, error, instance } = activationResponse;

    const instanceId = instance.id;

    if (!activated) {
      throw new Error(error || "Failed to activate license");
    }

    if (!instanceId) {
      throw new Error("Instance ID not found in activation response");
    }

    return {
      activated,
      error,
      instanceId,
    };
  } catch (error) {
    console.error("Error activating license key:", error);
    throw new Error(
      `Failed to activate license key: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

/**
 * Validates the Lemon Squeezy webhook signature.
 * @param rawBody - The raw body of the webhook request.
 * @param signature - The signature from the webhook request.
 * @example const isValid = validateSignature(rawBody, signature, LEMON_SQUEEZY_WEBHOOK_SECRET);
 * @returns The validation result as a `boolean`.
 */
export function validateSignature(
  rawBody: string,
  signature: string,
  LEMON_SQUEEZY_WEBHOOK_SECRET: string
): boolean {
  if (!LEMON_SQUEEZY_WEBHOOK_SECRET) {
    console.error("Missing LEMON_SQUEEZY_WEBHOOK_SECRET");
    return false;
  }

  const hmac = crypto.createHmac("sha256", LEMON_SQUEEZY_WEBHOOK_SECRET);
  const digest = Buffer.from(hmac.update(rawBody).digest("hex"), "utf8");
  const signatureBuffer = Buffer.from(signature, "utf8");

  return crypto.timingSafeEqual(digest, signatureBuffer);
}
