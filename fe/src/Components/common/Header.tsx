import React from 'react'
import substack2 from "../../assets/substack_2.png"
import {HiOutlineChevronDown} from "react-icons/hi"
import {FiSearch} from "react-icons/fi"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className='w-full bg-[#006f5c] h-[80px] flex justify-between  items-center'>
        <div className='w-[22%] h-[100%] text-white flex items-center justify-between m-6 font-semibold  font'>
            <img src={substack2} className='h-[50px] w-[50px] object-cover '
            ></img>
  
            
   <div className='flex items-center h-7 w-[95px] justify-between'> Resources <HiOutlineChevronDown/> </div>
   <div className='flex items-center h-7 w-[75px] justify-between'> Writers <HiOutlineChevronDown/> </div>
   <div className='flex items-center h-7 w-[80px] justify-between'>Readers <HiOutlineChevronDown/> </div>
  

  
        </div>
        <div className=' w-[35%] h-[100%] flex justify-between m-5 items-center' > 
            <input  placeholder='search SubStack' className='w-[250px] border-white  bg-none p-2 rounded bg-[#006f5c] border-[1px]'/> 
           <Link to ="/create" className='py-2 px-7 my-2 bg-[#ff6719] text-white rounded hover:scale-[1.02] hover:cursor-pointer duration-300 transition-all flex justify-center '>
    Start Writing
           </ Link>
          
           <Link to = "/create" className='py-2 px-5 my-2 text-white border-white border-[1px] rounded hover:scale-[1.02] hover:cursor-pointer duration-300 transition-all flex justify-center'>
            Sign In
           </Link>

            </div>

</div>
       
   
  )
}

export default Header