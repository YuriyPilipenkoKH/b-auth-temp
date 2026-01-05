"use server"


import { auth } from "../../auth";
import { mongoClient } from "@/lib/mongo";
import { revalidatePath } from "next/cache";


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
        return { success: false, error: "Email is not registered." };
      }
  
      await auth.api.signInEmail({
        body: { email, password },
      });
     revalidatePath('/dashboard');

      return { 
        success: true, 
        message: `${existingUser.name} logged in successfully.`, 
        user: {
          id: existingUser.id,
          name: existingUser.name,
          email: existingUser.email,
          image: existingUser.image ?? null,
        }, // ✅ plain object
      };

    } catch (error: unknown) {
    console.error('Error occurred while signing in:', error);
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
    return { success: false, error: errorMessage }
    }

  

}