import { redirect } from "next/navigation";
import { getServerSession } from "@/lib/getServerSession";


async function DashboardPage() {
const session = await getServerSession();

  if (!session) redirect("/login");
  return (
    <div>
      <h1>Welcome {session.user.name}</h1>
    </div>
  )
}

export default DashboardPage