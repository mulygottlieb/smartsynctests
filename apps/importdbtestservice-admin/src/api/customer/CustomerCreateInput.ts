import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { SomeThingWhereUniqueInput } from "../someThing/SomeThingWhereUniqueInput";

export type CustomerCreateInput = {
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  address?: AddressWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  customerType?: "INDIVIDUAL" | "COMPANY" | null;
  someThing?: SomeThingWhereUniqueInput | null;
};
