'use client'
import { signOutUser } from "@/actions/signout";
import capitalize from "@/lib/capitalize";
import { cn } from "@/lib/cn";
import { wait } from "@/lib/wait";
import { redirect } from "next/navigation";

import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

interface LogoutButtonProps { 
  username: string;
}                                                   

export const LogoutButton:React.FC<LogoutButtonProps> = ({username} :LogoutButtonProps) => {
 const {pending,} = useFormStatus()

  const handleLogout = async () => {
    try {
      await signOutUser(); 
      toast.success(`Logout successful, ${capitalize(username)}!`);
      await wait(2000);
      redirect('/login');
    } catch (error) {
      console.error("Error during logout:", error);
      toast.error("Failed to log out. Please try again.");
    }
}
  return (
   
      <form action={handleLogout} >
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