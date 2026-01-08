// src/lib/isAdminKey.ts
export const isAdminKey = (value: string) =>
  value === process.env.NEXT_PUBLIC_ADMIN_KEY;
