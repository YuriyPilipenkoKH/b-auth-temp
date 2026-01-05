import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import { headers } from "next/headers";
import { log } from "console";


async function DashboardPage() {
  const h = await headers(); // ✅ await it
  const headersObj: Record<string, string> = {};
  h.forEach((value, key) => {
    headersObj[key] = value;
  });
  const session = await auth.api.getSession({ headers: headersObj });


  if (!session) redirect("/login");
  return (
    <div>
      <h1>Welcome {session.user.name}</h1>
    </div>
  )
}

export default DashboardPage