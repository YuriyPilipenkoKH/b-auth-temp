// src/auth.ts


import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import { mongoDb } from "./src/lib/mongo";



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
database: mongodbAdapter(mongoDb), // ✅ THIS is the fix

});

// middleware: {
//   publicRoutes: ["/", "/login", "/signup"],
// },