import { InputJsonValue } from "../../types";

export type DataUpdateInput = {
  content?: InputJsonValue;
  createdBy?: string | null;
  typeField?: string | null;
};
