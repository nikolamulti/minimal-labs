export interface OrderCreatedResponse {
  orderId: Data["id"];
  email: Data["attributes"]["user_email"];
  customerId: Data["attributes"]["customer_id"];
  fullName: Data["attributes"]["user_name"];
  licenseKeysUrl: Data["relationships"]["license-keys"]["links"]["related"];
}

export interface OrderCreatedWebhook {
  data: Data;
  meta: Meta;
}

interface Data {
  id: number;
  type: string;
  links: DataLinks;
  attributes: Attributes;
  relationships: Relationships;
}

interface Attributes {
  tax: number;
  urls: Urls;
  total: number;
  status: string;
  tax_usd: number;
  currency: string;
  refunded: boolean;
  store_id: number;
  subtotal: number;
  tax_name: string;
  tax_rate: number;
  setup_fee: number;
  test_mode: boolean;
  total_usd: number;
  user_name: string;
  created_at: Date;
  identifier: string;
  updated_at: Date;
  user_email: string;
  customer_id: number;
  refunded_at: null;
  order_number: number;
  subtotal_usd: number;
  currency_rate: string;
  setup_fee_usd: number;
  tax_formatted: string;
  tax_inclusive: boolean;
  discount_total: number;
  refunded_amount: number;
  total_formatted: string;
  first_order_item: FirstOrderItem;
  status_formatted: string;
  discount_total_usd: number;
  subtotal_formatted: string;
  refunded_amount_usd: number;
  setup_fee_formatted: string;
  discount_total_formatted: string;
  refunded_amount_formatted: string;
}

interface FirstOrderItem {
  id: number;
  price: number;
  order_id: number;
  price_id: number;
  quantity: number;
  test_mode: boolean;
  created_at: Date;
  product_id: number;
  updated_at: Date;
  variant_id: number;
  product_name: string;
  variant_name: string;
}

interface Urls {
  receipt: string;
}

interface DataLinks {
  self: string;
}

interface Relationships {
  store: Customer;
  customer: Customer;
  "order-items": Customer;
  "license-keys": Customer;
  subscriptions: Customer;
  "discount-redemptions": Customer;
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
