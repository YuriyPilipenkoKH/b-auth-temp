import { redirect } from "next/navigation";
import { getServerSession } from "@/lib/getServerSession";
import { LogoutButton } from "@/components/button/LogoutButton";
import capitalize from "@/lib/capitalize";


async function DashboardPage() {
  const session = await getServerSession();
  if (!session) redirect("/login");
  return (
    <div className="p-4">  
      <div className="flex gap-2 items-center justify-end">

        <h1>Welcome {capitalize(session.user.name)}</h1>
        <LogoutButton username={session.user.name} />
      </div>
    </div>
  )
}

export default DashboardPage