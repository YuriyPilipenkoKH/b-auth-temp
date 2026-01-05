"use server"

import { redirect } from "next/navigation";
import { auth } from "../../auth";
import { mongoClient } from "@/lib/mongo";


export async function signInUser(formData: FormData) {

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;  

    if (!email || !password) {
    throw new Error("Missing required fields");
  }

   try {
      // Connect to Mongo and check if user already exists
      const db = mongoClient.db(process.env.MONGODB_DB_NAME);
      const existingUser = await db.collection("user").findOne({ email });
  
      if (!existingUser) {
        throw new Error("A user with this email does not exist.");
      }
  
      await auth.api.signInEmail({
        body: {
          email,
          password,
        },
  });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Signin error:", error.message);
        throw new Error(error.message);
      }
  
      console.error("Unknown sigin error:", error);
      throw new Error("Failed to sign in");
    }
  
  redirect("/dashboard");

}