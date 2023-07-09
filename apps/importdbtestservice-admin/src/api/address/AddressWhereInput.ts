import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AddressWhereInput = {
  customers?: CustomerListRelationFilter;
  zip2?: StringNullableFilter;
  zip3?: StringNullableFilter;
  zip4?: StringNullableFilter;
  zip5?: StringNullableFilter;
  zip6?: StringNullableFilter;
};
