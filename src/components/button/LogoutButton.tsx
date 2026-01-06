'use client'
import { signOutUser } from "@/actions/signout";
import capitalize from "@/lib/capitalize";
import { cn } from "@/lib/cn";

import { useRouter } from "next/navigation";

import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

interface LogoutButtonProps { 
  username: string;
}                                                   

export const LogoutButton:React.FC<LogoutButtonProps> = ({username} :LogoutButtonProps) => {
 const {pending,} = useFormStatus()
 const router = useRouter();

  const handleLogout = async () => {
    const res = await signOutUser();

    if (res.success) {
      toast.success(`Good bye, ${capitalize(username)}!`);
      router.push("/login");
    }
  };
  return (
   
      <form onClick={handleLogout} >
        <button
          className={cn("btn btn-info logout-btn ", )}
          // onClick={handleLogout}  
          >
            {username}{' '}
            {pending ? 'process' : 'LogOut'}
        </button>
      </form>

  );
};