// src/auth.ts
import { betterAuth } from "better-auth";


import { nextCookies } from "better-auth/next-js";


export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET!,
  emailAndPassword: { 
    enabled: true ,
    requireEmailVerification: true // 👈 IMPORTANT
  },
   plugins: [nextCookies()] ,
  socialProviders: { 
    github: { 
      clientId: process.env.GITHUB_CLIENT_ID as string, 
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
    }, 
  }, 
  // database: prismaAdapter(prisma, {
  //   provider: "mongodb", // or "mysql", "postgresql", ...etc
  // }),

  middleware: {
    publicRoutes: ["/", "/login", "/signup"],
  },
});
