import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProductWhereInput = {
  orders?: OrderListRelationFilter;
  productfield?: StringNullableFilter;
};
