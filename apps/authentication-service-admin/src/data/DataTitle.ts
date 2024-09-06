import { Data as TData } from "../api/data/Data";

export const DATA_TITLE_FIELD = "createdBy";

export const DataTitle = (record: TData): string => {
  return record.createdBy?.toString() || String(record.id);
};
