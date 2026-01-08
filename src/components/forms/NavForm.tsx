import { navSchema, navSchemaType } from "@/models/navSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";


interface NavFormProps{
  setAnable: React.Dispatch<boolean>
}

const NavForm:React.FC<NavFormProps> = ({setAnable}) => {
  const router = useRouter();
  const {
    register, 
    handleSubmit,
    formState,
    setError,
    clearErrors,
    reset,
  } = useForm<navSchemaType >({
        mode:'all',
        resolver: zodResolver(navSchema), })
    const {
      errors,
      isDirty,
      isValid,
      isSubmitting,
    } = formState
    const onSubmit = async (data: navSchemaType) => {
      
    switch(data.text){
      case process.env.NEXT_PUBLIC_ADMIN_KEY :
        router.push('/stats')
        setAnable(false)
        reset()
        break;
      case 'home' :
        router.push('/')
        setAnable(false)
        reset()
        break;
      case 'proj' :
        router.push('/projects')
        setAnable(false)
        reset()
        break;
      case 'cont' :
        router.push('/contact')
        setAnable(false)
        reset()
        break;
      case 'res' :
        router.push('/resume')
        setAnable(false)
        reset()
        break;
      default:
        setError('text', { type: 'manual', message: 'some other time'  }  )
    }
    }
    const handleInputChange =() => {
      if(errors.text) clearErrors()
    }

  return (
    <form className=' relative f10'
    autoComplete="off" 
    noValidate
     onSubmit={handleSubmit(onSubmit)}>
      
      <input
      {...register('text',{ onChange: handleInputChange })}
      className='f10 navform_input' 
      type='text'/>
      {errors.text && <div className='text-gray-900 absolute bottom-[-24x] overflow-hidden text-ellipsis text-nowrap'>{errors.text?.message}</div>}

      <button type='submit' 
      className='visually-hidden'
      disabled ={!isDirty || !isValid || isSubmitting}></button>
     
    </form>
  )
}

export default NavForm