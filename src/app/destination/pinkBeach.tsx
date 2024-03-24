import Image from 'next/image'
import React from 'react'

export default function PinkBaach() {
  return (
    <div>
        <div className="card w-full h-auto bg-base-100 shadow-xl image-full">
  <figure>
    <Image width={"600"} height={"600"} src='/destinasi/pink.jpg' alt='pinkbeach' className=''/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">Pink Beach 4D3N – Private Trip</h2>
    <p></p>
    <div className="card-actions justify-end">
      <button className="btn bg-transparent border-slate-400">IDR 12,000,000.00</button>
    </div>
  </div>
</div>
    </div>
  )
}
