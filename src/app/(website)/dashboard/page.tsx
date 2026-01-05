import { redirect } from "next/navigation";
import { getServerSession } from "@/lib/getServerSession";
import { LogoutButton } from "@/components/button/LogoutButton";


async function DashboardPage() {
  const session = await getServerSession();
  if (!session) redirect("/login");
  return (
    <div>
      <h1>Welcome {session.user.name}</h1>
      <LogoutButton username={session.user.name} />
    </div>
  )
}

export default DashboardPage