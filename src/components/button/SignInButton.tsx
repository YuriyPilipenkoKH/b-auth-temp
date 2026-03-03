'use client'

import { FcGoogle } from 'react-icons/fc'
import { GrGithub } from "react-icons/gr";
import { signIn } from '@/lib/auth/auth-client';


interface SignInButtonProps {
  provider: "google" | "github"
}

const SignInButton = ({provider}:SignInButtonProps) => {
 
   const handleClick = async () => {
    await signIn.social({
      provider,
      callbackURL: "/dashboard", // optional redirect after login
    });
  };
    return (

      <button 
      onClick={handleClick}
      className='flex w-full justify-center border rounded-lg p-2 space-x-2 items-center'>
          <p>
            {`LogIn With ${(provider === 'google') ? 'Google' : 'Github'}`}
            </p> 
            {(provider === 'google') 
            ? <FcGoogle className='h-5 w-5' />
            : <GrGithub className='h-5 w-5' />
            }
      </button>

    )

}

export default SignInButton