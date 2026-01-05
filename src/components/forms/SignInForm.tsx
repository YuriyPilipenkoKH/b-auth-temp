import { ImSpinner9 } from "react-icons/im";
import { SubmitBtn } from "../button/Button";
import { formClasses } from "@/models/formClasses";
import { cn } from "@/lib/cn";
import toast from "react-hot-toast";
import { signInUser } from "@/actions/signin";
import { LogInput, LoginSchema } from "@/models/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


function SignInForm() {
//  const router = useRouter()
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


export default SignInForm