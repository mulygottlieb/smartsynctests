import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OrderWhereInput = {
  customer?: CustomerWhereUniqueInput;
  product?: ProductWhereUniqueInput;
  orderfields?: StringNullableFilter;
};
