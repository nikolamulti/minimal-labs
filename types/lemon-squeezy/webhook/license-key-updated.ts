export interface LicenseKeyUpdatedWebhook {
  data: Data;
  meta: Meta;
}

interface Data {
  id: string;
  type: string;
  links: DataLinks;
  attributes: Attributes;
  relationships: Relationships;
}

interface Attributes {
  key: string;
  status: string;
  disabled: boolean;
  order_id: number;
  store_id: number;
  key_short: string;
  test_mode: boolean;
  user_name: string;
  created_at: Date;
  expires_at: null;
  product_id: number;
  updated_at: Date;
  user_email: string;
  customer_id: number;
  order_item_id: number;
  instances_count: number;
  activation_limit: number;
  status_formatted: string;
}

interface DataLinks {
  self: string;
}

interface Relationships {
  order: Customer;
  store: Customer;
  product: Customer;
  customer: Customer;
  "order-item": Customer;
  "license-key-instances": Customer;
}

interface Customer {
  links: CustomerLinks;
}

interface CustomerLinks {
  self: string;
  related: string;
}

interface Meta {
  test_mode: boolean;
  event_name: string;
  webhook_id: string;
}
