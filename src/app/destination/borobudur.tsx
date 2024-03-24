import Image from 'next/image'
import React from 'react'

export default function Sumba() {
  return (
    <div>
        <div className="card bg-base-100 shadow-xl image-full w-full h-auto">
  <figure>
    <Image width={"600"} height={"600"} src='/destinasi/borobudur.jpg' alt='borobudur' className=''/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">Yogyakarta 4D3N – Private Trip</h2>
   <p></p>
    <div className="card-actions justify-end">
      <button className="btn bg-transparent border-slate-400">IDR 7,850,000.00</button>
    </div>
  </div>
</div>
    </div>
  )
}
