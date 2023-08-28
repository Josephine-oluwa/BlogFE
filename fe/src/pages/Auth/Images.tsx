import React, { useState } from 'react'

const Images = () => {
    const [image, setImage] = useState<string>("")
    const [Avatar, setAvatar] = useState<string>("")


    const onHandleImage = (e: any) => {
      const file = e.target.file
      console.log("reading data outside", file)

      let data: string[] = []

      for (let i of file) {
        setAvatar(i)
        const save: any = URL.createObjectURL(i)
        data.push(save)
      }
      setAvatar(file)
     
  
    }


  return (
    <div className='w-full h-[calc(100vh-80px)] bg-slate-400 flex justify-center items-center'>
        <div className='w-[500px] h-[60%]  bg-white flex justify-center items-center rounded-[5px]'>

        </div>

    </div>
  )
}

export default Images