import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "orderfields";

export const OrderTitle = (record: TOrder): string => {
  return record.orderfields || String(record.id);
};
