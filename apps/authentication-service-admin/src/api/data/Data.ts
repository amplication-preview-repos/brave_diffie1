import { JsonValue } from "type-fest";

export type Data = {
  content: JsonValue;
  createdAt: Date;
  createdBy: string | null;
  id: string;
  typeField: string | null;
  updatedAt: Date;
};
