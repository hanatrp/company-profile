import React from 'react'
import Image from 'next/image'

interface IBody {
  title: string
  desc : string
  img : string
}

export const Team:React.FC<IBody> = ({title , desc, img}:IBody ) => {
  return (  
    
<div className="max-w-sm px-10 bg-white text-center border border-gray-950 rounded-lg shadow flex flex-col justify-center items-center ">
    <Image width={200} height={200} className="rounded-t-lg py-3 " src={`${img}`} alt={title}/>
    <div className="p-2">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  text-center">{title}</h5>
        <p className="mb-3 font-normal text-balance text-center text-gray-700 ">{desc}</p>
    </div>
</div>

  )
}
