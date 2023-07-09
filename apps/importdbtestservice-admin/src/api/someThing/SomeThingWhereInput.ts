import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SomeThingWhereInput = {
  customer?: CustomerWhereUniqueInput;
  newfield?: StringNullableFilter;
};
