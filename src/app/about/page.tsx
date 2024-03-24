import React from 'react'
import Story from './story'
import OurStory from './OurStory'
import Culture from './culture'
import Team from './team'

export default function AboutUs() {
  return (
    <div className='bg-white'>
        <Story/>
        <OurStory/>
        <Culture/>
        <Team/>
    </div>
  )
}
