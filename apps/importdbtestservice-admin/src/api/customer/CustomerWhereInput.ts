import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { SomeThingWhereUniqueInput } from "../someThing/SomeThingWhereUniqueInput";

export type CustomerWhereInput = {
  orders?: OrderListRelationFilter;
  address?: AddressWhereUniqueInput;
  someThing?: SomeThingWhereUniqueInput;
};
