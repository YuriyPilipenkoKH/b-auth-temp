import { signIn } from "@/lib/auth/auth-client";

  export const googleSignIn = async () => {

    return  await signIn.social({ provider: "google" })
    
  }
