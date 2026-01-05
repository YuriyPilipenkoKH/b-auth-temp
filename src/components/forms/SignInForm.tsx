"use client"

import { ImSpinner9 } from "react-icons/im";
import { SubmitBtn } from "../button/Button";
import { formClasses } from "@/models/formClasses";
import { cn } from "@/lib/cn";
import toast from "react-hot-toast";
import { signInUser } from "@/actions/signin";
import { LogInput, LoginSchema, RegInput } from "@/models/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import capitalize from "@/lib/capitalize";


function SignInForm() {
  const [logError, setLogError] = useState<string | null>(null)
  const router = useRouter()
  const {
    register, 
    handleSubmit,
    formState,
    reset,
    setError, // Use this to manually set server-side errors
  } = useForm<LogInput>({
    defaultValues: {
      email: '',
      password: '',
    },
      mode:'onBlur',
      resolver: zodResolver(LoginSchema),
  })
  const {
    errors,
    isDirty,
    isValid ,
    isSubmitting,
  } = formState

  console.log("Form errors:", errors);
  const handleInputChange =   (field: keyof LogInput) => {
  if(logError) setLogError(null)
  }

  const onSubmit= async (data:LogInput) => {
    const formData = new FormData();

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

      const result = await signInUser(formData);

      console.log("result:", result);
      if (result?.success && result?.user?.name) {
                 toast.success( 
           `${capitalize(result?.user?.name)}, you're successfully logged in! `  
          );
        // await nextAuthSignIn(result?.user?.name)
        reset()
        router.push('/dashboard')
      } 
      else if (result?.success === false && result?.error) {
   
        setLogError(result.error);
      }
    } catch (error) {
      console.error("login failed:", error);
      toast.error("Login failed");
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
        {logError && <p className={formClasses.error}>{logError}</p>}
      </label>

      <SubmitBtn

        disabled={isSubmitting || !isValid || !isDirty} >
        {isSubmitting ? <ImSpinner9 className='animate-spin'/> : null}
        {isSubmitting ? "Proccess..." : "Login"}
      </SubmitBtn>
    </form>
  )
}


export default SignInForm