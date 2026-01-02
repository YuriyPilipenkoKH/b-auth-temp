"use server"

import { redirect } from "next/navigation";
import { auth } from "../../auth";


export async function signInUser(formData: FormData) {

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;  

  await auth.api.signInEmail({
    body: {
      email,
      password,

    },
  });
  redirect("/dashboard");
}