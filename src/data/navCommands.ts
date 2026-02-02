// src/config/navCommands.ts
export type NavCommand = {
  path: string;
  requiresAdmin?: boolean;
};

const raw = process.env.NEXT_PUBLIC_NAV_COMMANDS!;

if (!raw) {
  // throw new Error("NEXT_PUBLIC_NAV_COMMANDS is missing");
 console.error("NEXT_PUBLIC_NAV_COMMANDS is missing");
}

export const NAV_COMMANDS = Object.fromEntries(
  raw.split(",").map(entry => {
    const [key, customPath] = entry.split(":").map(s => s.trim());

    const path =
      customPath ??
      (key === "home" ? "/" : `/${key}`);

    return [key, { path }];
  })
) satisfies Record<string, NavCommand>;


