"use server"

import { redirect } from "next/navigation";
import { auth } from "../../auth";
import { mongoClient } from "@/lib/mongo";


export async function signUpUser(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;  

    if (!name || !email || !password) {
    throw new Error("Missing required fields");
  }

 try {
    // Connect to Mongo and check if user already exists
    const db = mongoClient.db(process.env.MONGODB_DB_NAME);
    const existingUser = await db.collection("user").findOne({ email });

    if (existingUser) {
      return { success: false, error: "A user with this email already exists." };
    }

    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });
  } catch (error: unknown) {
    console.error('Error occurred while signing up:', error);
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
    return { success: false, error: errorMessage }

  }

  redirect("/dashboard");
}
