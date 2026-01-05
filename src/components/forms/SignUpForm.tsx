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



const SignUpForm = () => {
//  const router = useRouter()
  const {
    register, 
    handleSubmit,
    formState,
    reset,
    setError, // Use this to manually set server-side errors
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

  console.log("Form errors:", errors);

  const onSubmit= async (data:RegInput) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);

    // const nextAuthSignIn = async (userName: string) => {
    //   // Use `signIn` client-side to complete authentication
    //   const signInResponse = await signIn("credentials", {
    //    redirect: false,
    //    email: data.email,
    //    password: data.password,
    //    callbackUrl: "/dashboard",
    //  });
    //  if (signInResponse?.error) {
    //    console.error("SignIn error:", signInResponse.error);
    //    return;
    //  }
    //  if (signInResponse?.ok){
    //    toast.success( 
    //      `${capitalize(userName)}, your registration was successful! `  
    //     );
    //  } 
    //  }
    try {

      const result = await signUpUser(formData);

      console.log("Registration result:", result);
      // if (result?.success && result?.user?.name) {
      //   toast.success("Registration successful");
      //   await nextAuthSignIn(result?.user?.name)
      //   reset()
      //   router.push('/dashboard')
      // } 
      // else if (result?.errors) {
      // // Map server errors to react-hook-form errors
      // for (const [field, messages] of Object.entries(result.errors)) {
      //   setError(field as keyof RegisterClientSchemaType, {
      //     type: "server",
      //     message: messages[0], // Use the first error message for simplicity
      //   });
      // }
        
      // }
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
          {...register("name")}
          placeholder="user name"
          className={cn(formClasses.input,'')}
        />
        {errors.name && <p className={formClasses.error}>{errors.name.message}</p>}
      </label>

      <label  className='w-full'>
        <input
          {...register("email")}
          placeholder="email"
          className={cn(formClasses.input,'')}
        />
        {errors.email && <p className={formClasses.error}>{errors.email.message}</p>}
      </label>

      <label className='w-full'>
        <input
          {...register("password")}
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