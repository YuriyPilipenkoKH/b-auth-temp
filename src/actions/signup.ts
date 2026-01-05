"use server"

import { redirect } from "next/navigation";
import { auth } from "../../auth";


export async function signUpUser(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;  

    if (!name || !email || !password) {
    throw new Error("Missing required fields");
  }

 try {
    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Signup error:", error.message);
      throw new Error(error.message);
    }

    console.error("Unknown signup error:", error);
    throw new Error("Failed to sign up");
  }

  redirect("/dashboard");
}
