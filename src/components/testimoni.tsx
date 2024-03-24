import React from 'react'
import Image from 'next/image'

export default function Testimoni() {
  return (
      <div className=" py-6">
          <div className='hero-content sm:m-10 m-2'>
                <div className="carousel rounded-box">
                <div className="carousel-item p-1">
                <div className="card sm:w-96 sm:h-auto w-56 h-fit bg-slate-500 shadow-xl">
                <div className="card-body text-center">
                <h2 className="text-center text-slate-200 font-semibold sm:text-xl text-xl">Max</h2>
                <p className='text-slate-200'><q>It was simply amazing. They take you to the best places in the right timing so you git the spots by yourself.</q></p>
                </div>
                <figure>
                  <Image width={600} height={600} src='/bromo.jpg' alt='bromo'/>
                </figure>
                </div>
                </div> 
                <div className="carousel-item p-1">
                <div className="card sm:w-96 sm:h-auto w-56 h-fit bg-slate-500 shadow-xl">
                <div className="card-body text-center">
                <h2 className="text-center text-slate-200 font-semibold text-xl">Noe Dumont</h2>
                <p className='text-slate-200'><q>They take you to the best places in the right timing so you git the spots by yourself so amazing!</q></p>
                </div>
                <figure>
                  <Image width={600} height={600} src='/testi/bromo2.jpg' alt='orang'/>
                </figure>
                </div>
                </div> 
                <div className="carousel-item p-1">
                <div className="card sm:w-96 sm:h-auto w-56 h-fit bg-slate-500 shadow-xl">
                <div className="card-body text-center">
                <h2 className=" text-slate-200 font-semibold text-xl">Julie</h2>
                <p className='text-slate-200'><q>It was simply amazing. They take you to the best places in the right timing so you git the spots by yourself!</q></p>
                </div>
                <figure>
                  <Image width={600} height={600} src='/testi/selancar.jpg' alt='selancar jaya'/>
                    </figure>
                </div>
                </div> 
                <div className="carousel-item p-1">
                <div className="card sm:w-96 sm:h-auto w-56 h-fit bg-slate-500 shadow-xl">
                <div className="card-body text-center">
                <h2 className=" text-slate-200 font-semibold text-xl">Marque</h2>
                <p className='text-slate-200'><q>The wildlife we saw was amazing Lorem ipsum dolor sit amet. The crew was super friendly, helpful and funny!</q></p>
                </div>
                <figure>
                  <Image width={600} height={600} src='/testi/orng.jpg' alt='orang'/>
                  </figure>
                </div>
                </div> 
                </div>  
        </div>  
    </div>
  )
}
