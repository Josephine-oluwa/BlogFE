import React from 'react'
import hero_image from "../../assets/hero_image.png"
import {Link} from "react-router-dom"
import Typewriter from 'typewriter-effect'; 

const HomeScreen = () => {
  return (
    <div className='w-full h-[calc(100vh-80px)]  bg-[#006f5c] flex justify-between '>
      <div className='w-[50%] h-[100%] flex justify-center items-center'>
      <div className='w-[50%] h-[60%] m-10 line-height: 1.625'>
      {/* <div className='text-[50px] text-white '> 
      Do your best work, supported by your subscribers
      </div> */}
        <Typewriter
          options={{ loop: true }}
          onInit={(typewriter: any) => {
            typewriter

              .typeString("Manage All Your Work....")
              .pauseFor(1500)
              .deleteAll()

              .typeString("Write Them Down ...")
              .pauseFor(1500)
              .deleteAll()

              .typeString("Do Hard Things...")
              .pauseFor(1500)
              .deleteAll()
              .start();
          }}
        />
      <div className='text-[18px] text-white my-5'>
      Substack lets independent writers and podcasters publish directly to their audience and get paid through subscriptions.
      </div>
     <div className='flex justify-between'>
     <Link to ="/AdminUser"  className='py-2 px-7 my-2 bg-[#ff6719] text-white rounded hover:scale-[1.02] hover:cursor-pointer duration-300 transition-all flex justify-center '>
    Create your subStack
           </Link >
      {/* <Link to = "/create"  className='py-2 px-7 my-2  text-white rounded-[5px] hover:scale-[1.02] hover:cursor-pointer duration-300 transition-all flex justify-center border-[0.5px] border-black'>
   create your SubStack
      </Link> */}
      <Link to = "/AdminUser"  className='py-2 px-7 my-2  text-white rounded-[5px] hover:scale-[1.02] hover:cursor-pointer duration-300 transition-all flex justify-center border-[0.5px] border-black'>
   Find SubStack to read
      </Link>
     </div>
      </div> 
      </div>
    <div className='w-[50%] h-[100%] flex justify-center items-center'  >
       <img  src={hero_image} className='w-[60%] h-[60%] object-cover mx-10'>
       </img>
    </div>
    </div>
  )
}

export default HomeScreen