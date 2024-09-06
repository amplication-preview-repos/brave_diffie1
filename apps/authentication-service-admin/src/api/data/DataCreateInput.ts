import { InputJsonValue } from "../../types";

export type DataCreateInput = {
  content?: InputJsonValue;
  createdBy?: string | null;
  typeField?: string | null;
};
