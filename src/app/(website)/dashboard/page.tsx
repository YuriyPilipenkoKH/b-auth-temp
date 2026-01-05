import { redirect } from "next/navigation";
import { auth } from "../../../../auth";


async function DashboardPage() {
   const session = await auth.api.getSession();

  if (!session) redirect("/login");
  return (
    <div>
      <h1>Welcome {session.user.name}</h1>
    </div>
  )
}

export default DashboardPage