import { Log as TLog } from "../api/log/Log";

export const LOG_TITLE_FIELD = "message";

export const LogTitle = (record: TLog): string => {
  return record.message?.toString() || String(record.id);
};
