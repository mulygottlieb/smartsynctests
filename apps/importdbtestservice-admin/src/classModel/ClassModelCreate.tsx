import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const ClassModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="New Field" source="newField" />
        <TextInput label="Muly" source="muly" />
      </SimpleForm>
    </Create>
  );
};
