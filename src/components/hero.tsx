/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import { TypeAnimation } from "react-type-animation"


export default function Hero() {
  return (
    <div>
        <div className="hero min-h-screen z-0" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 sm:text-6xl text-3xl font-bold">Let's have unforgettable</h1>
      <p className="mb-5">
        <span>Find your perfect escape to Indonesia's best paradises! {" "}</span>
        <br />
        <br />
    <TypeAnimation
      sequence={[

        'destinations',
        2000,
        'tours',
        2000,
        'advantures',
        2000,
        "journeys",
        2000,
      ]}
      wrapper="span"
      speed={10}
      repeat={Infinity}
      style={{ fontSize: '3em', display: 'inline-block' }}
    />
      </p>
    </div>
    </div>
  </div>
</div>
    
  )
}





