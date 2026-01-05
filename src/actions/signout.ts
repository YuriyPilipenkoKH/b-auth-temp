"use server"

import { auth } from "../../auth";
import { headers } from "next/headers";


export async function signOutUser() {

  await auth.api.signOut({
    headers: await headers(),
  });
  return { success: true };
}