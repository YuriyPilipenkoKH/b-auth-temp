import SignUpForm from '@/components/SignUpForm'
import Link from 'next/link'


function SignupPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dwdkw1a4j/image/upload/v1767283634/b-auth-temp/img/nrurpajrd1ivzf9i7unj.jpg')",
      }}
    >
      {/* optional dark overlay */}
      {/* <div className="absolute inset-0 bg-black/50" /> */}

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
    </div>
  )
}

export default SignupPage