import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function FlightDiscover() {
  return (
    <div className='m-10'>
        <h1 className='font-alegreya-sans font-extrabold w-full text-[40px] text-black'>
            Discover flights to popular destinations
        </h1>
        <p className='mt-2 text-black opacity-80 text-[17px]font-alegreya-sans'>Showing return flights for: 24 Nov - 26 Nov</p>
        <div className='mt-1 flex gap-16'>
        <p className='mt-2 text-black text-[17px] font-alegreya-sans font-semibold'>Singapore</p>
        <p className='mt-2 text-black text-[17px] font-alegreya-sans font-semibold'>Vietnam</p>
        <p className='mt-2 text-black text-[17px] font-alegreya-sans font-semibold'>HongKong</p>
        </div>
        <div className='mt-2 bg-black h-0.5 opacity-35'></div>
    </div>
  )
}


