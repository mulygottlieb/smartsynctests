import { CustomerCreateNestedManyWithoutAddressesInput } from "./CustomerCreateNestedManyWithoutAddressesInput";

export type AddressCreateInput = {
  customers?: CustomerCreateNestedManyWithoutAddressesInput;
  address1?: string | null;
  address2?: string | null;
  city?: string | null;
  state?: string | null;
  zip?: number | null;
  zip2?: string | null;
  zip3?: string | null;
  zip4?: string | null;
};
