

import Link from 'next/link'
import React from 'react'

export default function Navbar () {
  return (
      <div className='bg-transparent bg-opacity-85 absolute z-40'>
       <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-auto navbar bg-transparent font-bold text-slate-700 fixed box-border">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <Link href={"/"}>
      <div className="flex-1 px-2 mx-1 font-extrabold text-slate-700 font-serif">Travass Life</div> </Link>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal font-bold text-slate-700">
          {/* Navbar menu content here */}
          <li><Link href="/" > HOME</Link></li>
          <li><Link href={"/about"}> ABOUT US </Link></li>
          <li><Link href={"/destination"}> DESSTINATION </Link></li>
          <li><Link href={"/team"}> TEAM </Link></li>
        </ul>
      </div>
    </div>
  </div> 
  <div className="drawer-side text-slate-700">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-40 min-h-full bg-white">
      {/* Sidebar content here */}
      <li><Link href={"/"}>HOME</Link></li>
      <li><Link href={"/about"}>ABOUT US</Link></li>
      <li><Link href={"/destination"}>DESTINATION</Link></li>
      <li><Link href={"/team"}>TEAM</Link></li>
    </ul>
  </div>
</div>
    </div>
  )
}
