import { getServerSession } from "@/lib/getServerSession";
import Link from "next/link"
import { redirect } from "next/navigation";


async function LoginPage() {
     const session = await getServerSession();
      if (session)   redirect('/dashboard')
  return (
      <div className='flex flex-col gap-5 items-center justify-center   p-6'  >
        <div className='flex flex-col gap-5 w-[400px]'>
          <h1 className='text-3xl font-bold text-center'>Login to Your Account</h1>
          {/* <SignInButton provider='google' />
          <SignInButton provider='github' /> */}
           <p className='text-center'>Don`t have an account? 
            <Link href="/signup" className="hover:text-amber-400">{" "}SignUp</Link>
          </p>
        </div>

      {/* <SignInForm/> */}
    </div>
  )
}

export default LoginPage