export const ROLES = ["USER", "EDITOR", "ADMIN"] as const;
export type Role = typeof ROLES[number];