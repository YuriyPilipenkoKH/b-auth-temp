// src/auth.ts
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma/prisma";


export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET!,
  emailAndPassword: { enabled: true },
  socialProviders: { 
    github: { 
      clientId: process.env.GITHUB_CLIENT_ID as string, 
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
    }, 
  }, 
  database: prismaAdapter(prisma, {
    provider: "mongodb", // or "mysql", "postgresql", ...etc
  }),

  middleware: {
    publicRoutes: ["/", "/login", "/signup"],
  },
});
