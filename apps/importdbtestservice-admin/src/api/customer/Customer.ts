import { Order } from "../order/Order";
import { Address } from "../address/Address";
import { SomeThing } from "../someThing/SomeThing";

export type Customer = {
  orders?: Array<Order>;
  address?: Address | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  updatedAt: Date;
  customerType?: "INDIVIDUAL" | "COMPANY" | null;
  someThing?: SomeThing | null;
};
