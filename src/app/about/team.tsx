import Image from 'next/image'
import React from 'react'

export default function Team() {
  return (
    <div className='sm:flex p-4'>
        <div className=' sm:w-1/2 sm:order-2 sm:px-10 sm:m-10 p-4'>
            <h1 className=' sm:text-3xl py-5 text-2xl text-slate-600 font-bold text-center'>
            Pasion to Purpose
            </h1>
             <p className='py-4 text-sm sm:text-lg text-slate-600 text-start'>Travass Life journey was started back in 2015 by our CEO & founder, Adel. A marketing-communication major graduate who shared a big passion to traveling,ocean, local community, and tropical islands. When most of her college friends grew career in corporate companies or agencies after graduating, she decided to connect her love of Indonesia’s archipelago to tourism business and turned it into a purposeful travel company, that we all know now as Travass Life.
            </p>
        
            <p className='py-4 text-sm sm:text-lg text-slate-600 text-start'>
            Seven years and thousands of satisfied travelers later, Travass Life’s family has grown from only one ‘Chief-Everything-Officer’ to few young people who shared the same passion of traveling
            </p>

        </div>

        <div className='p-6 py-4'>
            <Image width={"600"} height={"600"} src='/adel.jpg' alt='adel' className='pt-6'/>
        </div> 
       

    </div>
  )
}
