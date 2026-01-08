// src/config/navCommands.ts
export type NavCommand = {
  path: string;
  requiresAdmin?: boolean;
};

export const NAV_COMMANDS: Record<string, NavCommand> = {
  home: { path: "/" },
  proj: { path: "/projects" },
  cont: { path: "/contact" },
  res: { path: "/resume" },

  // admin command
  stats: {
    path: "/stats",
    requiresAdmin: true,
  },
};
