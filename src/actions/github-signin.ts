'use server'
import { signIn } from "@/lib/auth/auth-client";

  export const githubSignIn = async () => {

    return  await signIn.social({ provider: "github" })
    
  }
