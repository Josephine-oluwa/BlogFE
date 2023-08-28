import React from 'react'
import {Link} from  "react-router-dom"
import Create from "./Create"
import Register from "../Auth/Register"

const AdminUser = () => {
  return (
    <div className='w-full h-[calc(100vh-80px)] bg-slate-100 flex  justify-center items-center'>
     <div className='w-[550px] h-[150px] justify-between flex-col items-center flex'>
     <span className='text-[30px] font-bold font-[main]'>
            Welcome to the Blogging World
        </span>
       
        <span className='mx-5 text-[20px]'>
            Sign up as an <Link to = "/register">
            <span className='text-[#ff6719]'> Admin</span>
            </Link>
        </span>

        <span className='mx-5 text-[20px]'>
            Sign up as a <Link to = "/register">
            <span className='text-[#ff6719]'> User</span>
            </Link>
        </span>
      
     </div>
    </div>
  )
}

export default AdminUser