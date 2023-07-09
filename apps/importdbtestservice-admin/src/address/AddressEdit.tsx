import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";

export const AddressEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="customers"
          reference="Customer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CustomerTitle} />
        </ReferenceArrayInput>
        <TextInput label="Address1" source="address1" />
        <TextInput label="Address2" source="address2" />
        <TextInput label="City" source="city" />
        <TextInput label="State" source="state" />
        <NumberInput step={1} label="Zip" source="zip" />
        <TextInput label="Zip2" source="zip2" />
        <TextInput label="Zip3" source="zip3" />
        <TextInput label="Zip4" source="zip4" />
      </SimpleForm>
    </Edit>
  );
};
