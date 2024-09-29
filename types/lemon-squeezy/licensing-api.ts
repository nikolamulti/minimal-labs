export interface ActivateLicense {
  activated: boolean;
  error: string;
  license_key: LicenseKey;
  instance: Instance;
  meta: Meta;
}

export interface ValidateLicense {
  valid: boolean;
  error: string;
  license_key?: LicenseKey;
  instance?: Instance;
  meta?: Meta;
}

export interface DeactivateLicense {
  deactivated: boolean;
  error: string;
  license_key: LicenseKey;
  meta: Meta;
}

interface Instance {
  id: string;
  name: string;
  created_at: Date;
}

interface LicenseKey {
  id: number;
  status: string;
  key: string;
  activation_limit: number;
  activation_usage: number;
  created_at: Date;
  expires_at: Date;
}

interface Meta {
  store_id: number;
  order_id: number;
  order_item_id: number;
  product_id: number;
  product_name: string;
  variant_id: number;
  variant_name: string;
  customer_id: number;
  customer_name: string;
  customer_email: string;
}
