'use client';

import { cn } from '@/lib/cn';
import { formClasses } from '@/models/formClasses';
import { useRouter } from 'next/navigation';

  interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
      children: React.ReactNode;
    }
  interface BxProps extends ButtonProps {
    href: string
    label: string
  }  

  export  const SubmitBtn: React.FC<ButtonProps> = ({ children, ...props }) => {
    return <button 
      type='submit' 
      className={cn(formClasses.submitButton,'SubmitBtn')}
      {...props}
        > 
      {children}
    </button>;
  };

  export  const BtnX: React.FC<BxProps> = ({ children, ...props }) => {
    const {href, label} = props
    const router = useRouter()
    return <button 
      className="btn btn-primary"
      type='button' 
      {...props}
      onClick={() => router.push(href)} 
      > 
      {label}
      {children}
    </button>;
  };

   export const FlatBtn: React.FC<ButtonProps> = ({ children, ...props }) => {
    return(
     <button 
     className='FlatBtn'
     type='button' 
     {...props}>
       {children}
       </button>
    )
};