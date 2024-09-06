import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="createdBy" source="createdBy" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
