import SignInForm from "@/components/forms/SignInForm"
import { cn } from "@/lib/cn"
import { formClasses } from "@/models/formClasses"
import Link from "next/link"


 function LoginPage() {

  return (
      <div     className={cn(formClasses.wrapper,'backdrop-blur-sm ')}>
         <div className="flex flex-col gap-2 ">
          <h1 className="text-3xl font-bold  text-white">Login </h1>
          <p>Enter Your Account</p>
          {/* <SignInButton provider='google' />
          <SignInButton provider='github' /> */}
      <SignInForm/>
           <p className='text-center'>Don`t have an account? 
            <Link href="/signup" className="hover:text-amber-400">
            {" "}SignUp
            </Link>
          </p>
        </div>

    </div>
  )
}

export default LoginPage