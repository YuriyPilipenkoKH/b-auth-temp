import { betterAuth } from "better-auth";

export const auth = betterAuth({
  appName: "My Next.js App",

  database: {
    provider: "sqlite", // or "postgresql" | "mysql" | "mongodb"
    url: process.env.DATABASE_URL!,
  },

  emailAndPassword: {
    enabled: true,
  },

  secret: process.env.AUTH_SECRET!, // required
});
