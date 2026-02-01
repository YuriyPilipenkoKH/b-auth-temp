// src/config/navCommands.ts
export type NavCommand = {
  path: string;
  requiresAdmin?: boolean;
};

// const commandsArray = process.env.NEXT_PUBLIC_NAV_COMMANDS?.split(',') || []
export const NAV_COMMANDS = Object.fromEntries(
  process.env.NEXT_PUBLIC_NAV_COMMANDS!
    .split(",")
    .map(entry => {
      const [key, path] = entry.split(":");
      return [key.trim(), { path: path.trim() }];
    })
);
