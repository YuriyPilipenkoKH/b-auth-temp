"use server"

import { redirect } from "next/navigation";
import { auth } from "../../auth";


export async function signUpUser(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;  

  await auth.api.signUpEmail({
    body: {
      name,
      email,
      password,
      callbackURL: "/dashboard",
    },
  });
  redirect("/dashboard");
}