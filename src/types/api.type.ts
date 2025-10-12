export const APIStatuses = {
  Success: "Success",
  API_Error: "API_Error",
  Unknown_Error: "Unknown_Error",
} as const;

export type APIStatus = keyof typeof APIStatuses;
