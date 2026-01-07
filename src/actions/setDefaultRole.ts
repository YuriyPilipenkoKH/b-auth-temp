"use server"
import { mongoClient } from "@/lib/mongo";


export async function setDefaultRole() {
 
  const db = mongoClient.db(process.env.MONGODB_DB_NAME);

  try {
    await db.collection("user").updateMany(
      { role: { $exists: false } },
      { $set: { role: "USER" } }
    );
        return { 
        success: true, 
        message: `Default role has been set`, 
      };
  } catch (error) {
    console.error('Error occurred while setting default role:', error);
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
    return { success: false, error: errorMessage };
  }
}