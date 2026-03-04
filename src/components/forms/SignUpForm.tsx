"use client"

import {  RegInput,  RegisterSchema } from '@/models/schemas'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ImSpinner9 } from "react-icons/im";
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/cn';
import { formClasses } from '@/models/formClasses';
import { SubmitBtn } from '../button/Button';
import { signUpUser } from '@/actions/signup';
import { useState } from 'react';


const SignUpForm = () => {
  const [logError, setLogError] = useState<string | null>(null)
  const router = useRouter()
  const {
    register, 
    handleSubmit,
    formState,
    reset,

  } = useForm<RegInput>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
      mode:'onBlur',
      resolver: zodResolver(RegisterSchema),
  })
  const {
    errors,
    isDirty,
    isValid ,
    isSubmitting,
  } = formState
    const handleInputChange =   (field: keyof RegInput) => {
    if(logError) setLogError(null)
    }

  const onSubmit= async (data:RegInput) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);


    try {

      const result = await signUpUser(formData);

      console.log("Registration result:", result);
      if (result?.success ) {
        toast.success("Registration successful");
        // await nextAuthSignIn(result?.user?.name)
        reset()
        router.push('/dashboard')
      } 

    } catch (error) {
      console.error("Registration failed:", error);
      toast.error("Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit) } 
    autoComplete="off"
    noValidate
    className={cn(formClasses.container,'')}
    >
      <label  className='w-full'>
        <input
          {...register("name",{ onChange: handleInputChange })}
          placeholder="user name"
          className={cn(formClasses.input,'')}
        />
        {errors.name && <p className={formClasses.error}>{errors.name.message}</p>}
      </label>

      <label  className='w-full'>
        <input
          {...register("email",{ onChange: handleInputChange })}
          placeholder="email"
          className={cn(formClasses.input,'')}
        />
        {errors.email && <p className={formClasses.error}>{errors.email.message}</p>}
      </label>

      <label className='w-full'>
        <input
          {...register("password",{ onChange: handleInputChange })}
          // type="password"
          placeholder="password"
          className={cn(formClasses.input,'')}
        />
        {errors.password && <p className={formClasses.error}>{errors.password.message}</p>}
      </label>

      <SubmitBtn

        disabled={isSubmitting || !isValid || !isDirty} >
        {isSubmitting ? <ImSpinner9 className='animate-spin'/> : null}
        {isSubmitting ? "Sending..." : "Sign Up"}
      </SubmitBtn>
    </form>
  )
}

export default SignUpForm