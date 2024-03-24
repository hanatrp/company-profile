import React from 'react'
import Hero from '../../components/hero'
import Testimoni from '../../components/testimoni'
import Promise from '../../components/promise'
import NextDes from '../../components/product/listProduct'
import { Team } from '@/components/team'

export default function HomePage() {
  return (

    <div className='bg-white'>
        <Hero/>
        <Promise/>
        <div className='flex flex-col flex-wrap sm:flex-row gap-3 px-7 justify-center'>
        <Team title='THE TEAM' desc='lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quam odit veniam eaque.' img='/team.jpg'/>
        <Team title='THE DESTINATION' desc='lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quam odit veniam eaque.' img='/culture.jpg'/>
        <Team title='THE STORY'  desc='lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quam odit veniam eaque.' img='/astory.jpg'/>
        </div>
        
        <NextDes/>
        <Testimoni/>
    </div>
  )
}
