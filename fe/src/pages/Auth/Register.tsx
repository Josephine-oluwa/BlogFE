import { useState } from 'react'
import pix from "../../assets/pix.jpg"
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"
import { useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { registerAPI } from '../../Api/Reg'

const Register = () => {
    const navigate = useNavigate()
   const [image, setImage] = useState<string>("pix")
   const [Avatar, setAvatar] = useState<string>("")

  const HandleImage = (e: any)=> {
    const localImage = e.target.files[0]
    const saveImage = URL.createObjectURL(localImage)
    setImage(localImage)
    setAvatar(saveImage)
  }

  const model = yup.object({
    name: yup.string().required(),
    email : yup.string().required(),
    password : yup.string().required()
  })

  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(model)
})

const onSubmit = handleSubmit(async (data) => {
    const { name, email, password} = data

    const formData = new FormData()
    formData.append("name", name)
    formData.append("email", email)
    formData.append("password", password)
    formData.append("avatar", image)


    registerAPI(formData).then(() => {
        navigate("/create")
    })
})
  return (
    <div className='w-full h-[calc(100vh-80px)] bg-slate-100 flex justify-center flex-col items-center'>


<span className="text-[30px] m-10 font-bold text-[#404040]">
 Sign up to your account
    </span>
        
    <form onSubmit={onSubmit}
     className='w-[500px] h-[min(600px)] bg-white rounded flex justify-center items-center shadow-md'
    

     >



     <div className='w-[90%] h-[90%]  flex flex-col justify-center items-center'>
     <div className='flex-col flex items-start m-4'>
            <label className='text-[12px] block '>Your Name</label>
    <input type="text"
    className='w-[350px] border-[1px] p-2 text-[140x] rounded border-black '
    placeholder='Type your Name'
    {...register("name")}
    {
      ...errors.name?.message && <label className="text-[12px] font-semibold w-[300px] flex justify-end text-rose-700 " >Name Error</label>
    }
    />
     </div>
     <div className='flex-col flex items-start m-4'>
            <label className='text-[12px] block '>Your email Address</label>
    <input type="text"
    className='w-[350px] border-[1px] p-2 text-[140x] rounded border-black '
    placeholder='Type your email'
    {...register("email")}
    {
      ...errors.email?.message && <label className="text-[12px] font-semibold w-[300px] flex justify-end text-rose-700 " >Email Error</label>
    }
    />
     </div>
     <div className='flex-col flex items-start m-4'>
            <label className='text-[12px] block '>Your Password</label>
    <input type="text"
    className='w-[350px] border-[1px] p-2 text-[140x] rounded border-black '
    placeholder='Type your Password'
    {...register("password")}
    {
      ...errors.password?.message && <label className="text-[12px] font-semibold w-[300px] flex justify-end text-rose-700 " >Password Error</label>
    }
    />
     </div>
     <button className='py-3 w-[350px] my-4 bg-[#ff6719]  text-white rounded hover:scale-[1.02] hover:cursor-pointer duration-300 transition-all flex justify-center ' type ="submit">
    Agree and continue  
           </button >
     </div>
          
        </form>
      
           

        </div>


  )
}

export default Register