import Header from "@/components/header/Header";
import { getServerSession } from "@/lib/getServerSession";
import { redirect } from "next/navigation";


 async function AuthLayout(
  { children }: { children: React.ReactNode } 
 ) {
     const session = await getServerSession();
      if (session)   redirect('/dashboard')

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
       backgroundImage: `url(${process.env.NEXT_PUBLIC_AUTH_BG})`,
      }}
    >
    <Header/>
        <div className="flex flex-col items-center justify-center p-4">
          {children
          }</div>
    </div>
  )
}

export default AuthLayout