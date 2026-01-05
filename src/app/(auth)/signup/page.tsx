import SignUpForm from '@/components/forms/SignUpForm'
import { cn } from '@/lib/cn'
import { formClasses } from '@/models/formClasses'
import Link from 'next/link'


function SignupPage() {
  return (

      <div     className={cn(formClasses.wrapper,'backdrop-blur-sm ')}>
        <div className="flex flex-col gap-2 ">
          <h1 className="text-3xl font-bold  text-white">
            SignUp
          </h1>
          <p>Create a new Account</p>
        </div>
        <SignUpForm />
          <p className="text-center text-white">
            Already have an account?
            <Link href="/login" className="hover:text-amber-400">
              {" "}Login
            </Link>
          </p>
      </div>
  )
}

export default SignupPage