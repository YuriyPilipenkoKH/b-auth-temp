import { Role } from "@/models/roles";
import { auth } from "../../auth";
import { headers } from "next/headers";
import { mongoClient } from "@/lib/mongo";
import { revalidatePath } from "next/cache";


export async function updateUserRole(
  userId: string,
  role: Role
) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("Unauthorized");
  }

  const db = mongoClient.db(process.env.MONGODB_DB_NAME);
    // ✅ Fetch role from DB (source of truth)
  const currentUser = await db.collection("users").findOne({
    id: session.user.id,
  });

  await db.collection("users").updateOne(
    { id: userId },
    { $set: { role } }
  );

  revalidatePath("/admin/users");
}