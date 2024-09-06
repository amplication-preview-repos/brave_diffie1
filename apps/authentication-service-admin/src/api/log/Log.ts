export type Log = {
  createdAt: Date;
  id: string;
  level?: "Option1" | null;
  message: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
