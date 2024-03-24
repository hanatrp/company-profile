import Image from 'next/image'
import React from 'react'

export default function Bromo() {
  return (
    <div>
        <div className="card w-full h-auto bg-base-100 shadow-xl image-full">
  <figure>
    <Image width={"600"} height={"600"} src='/destinasi/bro.jpg' alt='bromo' className=''/> 
  </figure>
  <div className="card-body">
    <h2 className="card-title">Bromo 4D3N – Private Trip</h2>
    <p></p>
    <div className="card-actions justify-end">
      <button className="btn bg-transparent border-slate-400">IDR 6,800,000.00</button>
    </div>
  </div>
</div>
    </div>
  )
}
