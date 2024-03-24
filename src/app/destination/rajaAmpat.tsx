import Image from 'next/image'
import React from 'react'

export default function RajaAmpat() {
  return (
    <div>
        <div className="card w-full sm:w-full h-auto shadow-xl image-full">
  <figure>
    <Image width={"600"} height={"600"} src='/destinasi/rajaampat.jpg' alt='raja ampat' className=''/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">Raja Ampat 4D3N – Private Trip</h2>
    <p></p>
    <div className="card-actions justify-end">
      <button className="btn bg-transparent border-slate-400">IDR 53,000,000.00</button>
    </div>
  </div>
</div>
    </div>
  )
}
