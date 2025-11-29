"use client";

import { authClient } from "./auth-client";
import { useRouter } from "next/navigation";

export function useSignOut() {
  const router = useRouter();

  async function signOutUser() {
    try {
      await authClient.signOut(
        {},
        {
          onSuccess: () => {
            router.push("/login");
          },
          onError: (ctx) => {
            console.error(ctx.error);
          },
        }
      );
    } catch (err) {
      console.error("Error signing out:", err);
    }
  }

  return { signOutUser };
}
