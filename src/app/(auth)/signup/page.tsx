import SignUpForm from '@/components/SignUpForm'
import React from 'react'

function SignupPage() {
  return (
         <div className='flex flex-col gap-5 items-center justify-center   p-6'  >
        <div className='flex flex-col gap-5 w-[400px]'>
          <h1 className='text-3xl font-bold text-center'>Create a New Account</h1>

         
          
        </div>

      <SignUpForm/>
    </div>
  )
}

export default SignupPage  