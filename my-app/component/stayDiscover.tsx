import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const stayPic = [
    {image: '/pic1.png'},
    {image: '/pic2.png'},
    {image: '/pic3.png'}
]

export default function StayDiscover() {
  return (
    <div className='m-10 mt-30'>
        <h1 className='font-alegreya-sans font-extrabold w-full text-[40px] text-black'>
            Discover your new favourite stay
        </h1>
        <div className='grid grid-cols-3 m-10 gap-3 w-full gap-y-20'>
            {stayPic.map((sPic,index)=>(
                <div className='relative w-[315px] h-[442px] rounded-6xl' key={index}>
                    <Image 
                              src={sPic.image}
                              alt={'icon'} 
                              fill
                    />
                </div>

            ))}
        </div>
    </div>
  )
}