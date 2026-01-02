"use server"

import { redirect } from "next/navigation";
import { auth } from "../../auth";
import { headers } from "next/headers";


export async function signOutUser() {

  await auth.api.signOut({
    headers: await headers(),
  });
  redirect("/login");
}