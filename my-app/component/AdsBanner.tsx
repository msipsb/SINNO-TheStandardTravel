import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Ads_Banner() {
  return (
    <div className='flex h-[128px] bg-[#223843] items-center m-10 rounded-4xl p-10'>
        <div className='relative w-[100px] h-[90px]'>
          <Image 
          src={'/discount_Icon.png'} 
          alt={'icon'} 
          fill
          />
        </div>
        <div className='m-4 font-alegreya-sans font-extrabold h-[35px] w-full flex justify-center text-[35px] items-center'>
          Members save 10% or more on over 100,000 hotels worldwide when signed in
        </div>

    </div>
  )
}