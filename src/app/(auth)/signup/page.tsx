import SignUpForm from '@/components/SignUpForm'
import Link from 'next/link'


function SignupPage() {
  return (


      <div className="relative z-10 flex flex-col gap-5 items-center justify-center p-6">
        <div className="flex flex-col gap-5 w-[400px]">
          <h1 className="text-3xl font-bold text-center text-white">
            Create a New Account
          </h1>
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