import React from 'react'
import DetailProduct from './product'
import ListProductCoret from './listProductCoret'
import { ProductBody } from './productBody'


export default function NextDes() {
  return (
        <div className='pt-20'>
        <div className="hero h-1/2 pt-12 pb-12 bg-white">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-2xl sm:text-5xl font-bold text-slate-600">FEATURED DESTINATIONS</h1>
          <p className=" py-6 text-slate-600">Explore our curated dream destinations in Indonesia’s archipelago</p>
        </div>
      </div>
    </div> 
    <div className='px-10 pb-20 pt-5 flex flex-wrap flex-col sm:flex-row gap-3 justify-center items-center'>
      <ProductBody tipe='Standar Trip' durasi={3} harga={300} malem={2}>
        <DetailProduct text='lorem hani cantik'/>
        <DetailProduct text='lorem hani cantik'/>
        <ListProductCoret text='hana jelek' />
        <ListProductCoret text='lorem hana jelek' />
      </ProductBody>
      <ProductBody tipe='Standar Premium' durasi={4} harga={400} malem={3}>
        <DetailProduct text='lorem hani cantik'/>
        <DetailProduct text='lorem hani cantik'/>
        <DetailProduct text='lorem hani cantik'/>
        <ListProductCoret text='hana jelek' />
      </ProductBody>
      <ProductBody tipe='Private Trip' durasi={5} harga={500} malem={4}>
        <DetailProduct text='lorem hani cantik'/>
        <DetailProduct text='lorem hani cantik'/>
        <DetailProduct text='lorem hani cantik'/>
        {/* <DetailProduct text='lorem hani cantik'/> */}
        <ListProductCoret text='hana jelek' />
      </ProductBody>
      <ProductBody tipe='Private Premium ' durasi={5} harga={800} malem={4}>
        <DetailProduct text='lorem hani cantik'/>
        <DetailProduct text='lorem hani cantik'/>
        <DetailProduct text='lorem hani cantik'/>
        <DetailProduct text='lorem hani cantik'/>
        {/* <ListProductCoret text='hana jelek' /> */}
      </ProductBody>

      
    </div>
    </div>
  )
}
