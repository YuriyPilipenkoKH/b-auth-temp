// src/config/navCommands.ts
export type NavCommand = {
  path: string;
  requiresAdmin?: boolean;
};

export const NAV_COMMANDS: Record<string, NavCommand> = {
  home: { path: "/" },
  log: { path: "/login" },
  reg: { path: "/signup" },
  dash: { path: "/dashboard" },

  // admin command
  admin: {
    path: "/admin",
    requiresAdmin: true,
  },
};
