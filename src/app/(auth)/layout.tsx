import { getServerSession } from "@/lib/getServerSession";
import { redirect } from "next/navigation";


 async function AuthLayout(
  { children }: { children: React.ReactNode } 
 ) {
     const session = await getServerSession();
      if (session)   redirect('/dashboard')

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
       backgroundImage: `url(${process.env.NEXT_PUBLIC_AUTH_BG})`,
      }}
    >

        {children}
    </div>
  )
}

export default AuthLayout