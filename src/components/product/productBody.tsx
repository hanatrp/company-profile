import React, { ReactNode } from 'react'
import DetailProduct from './product'
import ListProductCoret from './listProductCoret'
import Link from 'next/link'

interface ProductBody {
    tipe: string
    harga: number
    durasi : number
    children: ReactNode
    malem : number
}

export const  ProductBody: React.FC <ProductBody> = ({tipe, harga, durasi, children, malem}: ProductBody)=> {
  return (
    <div>
        <div className="w-full max-w-sm p-4 bg-white border border-gray-900 rounded-lg shadow sm:p-8 ">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{tipe}</h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">{harga}</span>
          <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/{durasi}D{malem}N</span>
        </div>
        <ul role="list" className="space-y-5 my-7">
            {children}
        </ul>
        <Link href={"/destination"}>
            <button type="button" className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
            </Link>
        
      </div>
    </div>
  )
}
