import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type LogWhereInput = {
  id?: StringFilter;
  level?: "Option1";
  message?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
