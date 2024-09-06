import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DataWhereInput = {
  content?: JsonFilter;
  createdBy?: StringNullableFilter;
  id?: StringFilter;
  typeField?: StringNullableFilter;
};
