export interface LicenseKeyObject {
  jsonapi: Jsonapi;
  links: DataLinks;
  data: Data[];
}

interface Data {
  type: string;
  id: string;
  attributes: Attributes;
  relationships: Relationships;
  links: DataLinks;
}

interface Attributes {
  store_id: number;
  customer_id: number;
  order_id: number;
  order_item_id: number;
  product_id: number;
  user_name: string;
  user_email: string;
  key: string;
  key_short: string;
  activation_limit: number;
  instances_count: number;
  disabled: number;
  status: string;
  status_formatted: string;
  expires_at: null;
  created_at: Date;
  updated_at: Date;
}

interface DataLinks {
  self: string;
}

interface Relationships {
  store: Customer;
  customer: Customer;
  order: Customer;
  "order-item": Customer;
  product: Customer;
  "license-key-instances": Customer;
}

interface Customer {
  links: CustomerLinks;
}

interface CustomerLinks {
  related: string;
  self: string;
}

interface Jsonapi {
  version: string;
}
