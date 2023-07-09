import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { SomeThingWhereUniqueInput } from "../someThing/SomeThingWhereUniqueInput";

export type CustomerUpdateInput = {
  orders?: OrderUpdateManyWithoutCustomersInput;
  address?: AddressWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  customerType?: "INDIVIDUAL" | "COMPANY" | null;
  someThing?: SomeThingWhereUniqueInput | null;
};
