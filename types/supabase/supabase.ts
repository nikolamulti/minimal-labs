export interface CustomerTable {
  customer_id: number;
  full_name: string;
  email: string;
  created_at: string;
}

export interface OrderTable {
  order_id: number;
  customer_id: number;
  license_key: string;
  created_at: string;
}

export interface InstanceTable {
  instance_id: number;
  order_id: number;
  created_at: string;
}

// export type Database = {
//   public: {
//     Tables: {
//       customers: {
//         Row: CustomerTable;
//         Insert: CustomerTable;
//         Update: Partial<CustomerTable>;
//       };
//       orders: {
//         Row: OrderTable;
//         Insert: OrderTable;
//         Update: Partial<OrderTable>;
//       };
//       instances: {
//         Row: InstanceTable;
//         Insert: InstanceTable;
//         Update: Partial<InstanceTable>;
//       };
//     };
//   };
// };
