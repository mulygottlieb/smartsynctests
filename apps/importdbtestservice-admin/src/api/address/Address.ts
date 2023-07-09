import { Customer } from "../customer/Customer";

export type Address = {
  customers?: Array<Customer>;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  address1: string | null;
  address2: string | null;
  city: string | null;
  state: string | null;
  zip: number | null;
  zip2: string | null;
  zip3: string | null;
  zip4: string | null;
  zip5: string | null;
  zip6: string | null;
};
