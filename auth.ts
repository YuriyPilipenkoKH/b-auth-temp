// src/auth.ts
import { db } from "@/lib/mongo";
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";


import { nextCookies } from "better-auth/next-js";


export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET!,
  plugins: [nextCookies()] ,
  emailAndPassword: { 
    enabled: true ,
  },
  socialProviders: { 
    github: { 
      clientId: process.env.GITHUB_CLIENT_ID as string, 
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
    }, 
  }, 
  database: mongodbAdapter({
    client: db,
  }),

  // middleware: {
  //   publicRoutes: ["/", "/login", "/signup"],
  // },
});
