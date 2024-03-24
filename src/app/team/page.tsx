'use client'
import React, { useEffect, useState } from 'react'
import { CardCompany } from './card';

export default function PageTeam() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=6")
        .then((res)=> res.json())
        .then((data)=> setData(data.results));

    },[]);
  return (
    <div className='py-7 bg-white'>
        <div className='text-2xl font-bold text-center py-14 px-10 text-slate-600'>OUR TEAM</div>
        <div className='flex flex-col sm:flex-row flex-wrap py-4 gap-4 px-14 justify-center items-center'>
            {data.map((user: any, idx)=> (
                <CardCompany
                key={idx}
                image={user.picture.thumbnail}
                location={user.location.city}
                name={user.name.first}
                />
            ))}
        </div>
    </div>
  )
}
