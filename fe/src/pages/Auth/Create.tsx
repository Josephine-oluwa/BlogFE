import profile from "./Register"
import Header from '../../Components/common/Header'
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { registerAPI } from '../../Api/Reg'


const Create = () => {

const navigate = useNavigate()
   

    const model = yup.object({
       
       email: yup.string().required(),
        password: yup.string().required(),
      
    })

    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(model)
    })

    const onSubmit = handleSubmit(async (data) => {
        const { email, password  } = data

        const formData = new FormData()
       formData.append("email", email)
       formData.append("password ", password )
        


        registerAPI(formData).then(() => {
            navigate("/profile")
        })
    })


  return (
   <div>
    
    <div className='w-full h-[calc(100vh-80px)] bg-slate-100 flex flex-col    justify-center items-center'
 style={{boxShadow: "box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"}}
    > <span className="text-[30px] m-10 font-bold text-[#404040]">
 Sign into your account
    </span>
   
   

     
     <form onSubmit={onSubmit}
     
     className='w-[500px] h-[min(400px)] bg-white rounded flex justify-center items-center shadow-md'
    
  
     >
     <div className='w-[90%] h-[90%]  flex flex-col justify-center items-center'>
     <div className='flex-col flex items-start '>
            <label className='text-[12px] '>Your email Address</label>
    <input type="text"
    className='w-[350px] border-[1px] p-2 text-[140x] rounded border-black'
    placeholder='Type your name'
    {...register("email")}
    {
      ...errors.email?.message && <label className="text-[12px] font-semibold w-[300px] flex justify-end text-rose-700 " >Email Error</label>
    }
    />
     </div>
     <div className='flex-col flex items-start  m-4'>
            <label className='text-[12px] '>Your Password  </label>
    <input type="text"
    className='w-[350px] border-[1px] p-2 text-[140x] rounded border-black'
    placeholder='Type your email'
    {...register("password")}
    {
      ...errors.email?.message && <label className="text-[12px] font-semibold w-[300px] flex justify-end text-rose-700 " >Password Error</label>
    }
    />
     </div>
    <div className='items-center flex flex-col'>
    <span className='align-super text-[13px] m-7'>By signing up,
           you agree to our publisher agreement, information 
           collection notice, and privacy policy</span>
           <button className='py-3 w-[350px] my-2 bg-[#ff6719] text-white rounded hover:scale-[1.02] hover:cursor-pointer duration-300 transition-all flex justify-center ' type ="submit">
    Agree and continue  
           </button >
    </div>

       
     </div>
     </form>
       
     </div>
    </div>
 
  )
}

export default Create