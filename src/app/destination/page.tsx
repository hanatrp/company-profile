import React from 'react'
import Sumba from './borobudur'
import Bali from './bali'
import RajaAmpat from './rajaAmpat'
import KomodoIsland from './komodoIsland'
import Bromo from './bromo'
import PinkBaach from './pinkBeach'

export default function PageDestination() {
  return (
    <div className='py-20 gap-7 bg-white px-10 sm:px-0 flex flex-col sm:flex-row flex-wrap justify-center items-center
    '>

        <Sumba/>
        <Bali/>
        <RajaAmpat/>
        <PinkBaach/>
        <KomodoIsland/>
        <Bromo/>

    </div>
  )
}
