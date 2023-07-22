import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AddressList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Addresses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Address1" source="address1" />
        <TextField label="Address2" source="address2" />
        <TextField label="City" source="city" />
        <TextField label="State" source="state" />
        <TextField label="Zip" source="zip" />
        <TextField label="Zip2" source="zip2" />
        <TextField label="Zip3" source="zip3" />
        <TextField label="Zip4" source="zip4" />
        <TextField label="Zip5" source="zip5" />
      </Datagrid>
    </List>
  );
};
