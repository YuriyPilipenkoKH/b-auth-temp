import { redirect } from "next/navigation";
import { getServerSession } from "@/lib/getServerSession";
import { LogoutButton } from "@/components/button/LogoutButton";
import capitalize from "@/lib/capitalize";
import Link from "next/link";
import { FlatBtn } from "@/components/button/Button";
import { GrHomeRounded } from "react-icons/gr";



async function DashboardPage() {
  const session = await getServerSession();
  if (!session) redirect("/login");
  return (
    <div
      className="min-h-screen flex gap-2 items-center justify-end bg-cover bg-center"
      style={{
       backgroundImage: `url(${process.env.NEXT_PUBLIC_DASHBOARD_BG})`,
      }}
    >
      <div className="flex gap-2 items-center justify-end">

        <FlatBtn>
          <Link href="/"><GrHomeRounded /></Link>
        </FlatBtn>
        <h1>Welcome {capitalize(session.user.name)}</h1>
        <LogoutButton username={session.user.name} />
      </div>
    </div>
  )
}

export default DashboardPage