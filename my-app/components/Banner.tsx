import React from 'react'
import Image from 'next/image'
import { IoMdStar } from "react-icons/io";

export default function Banner() {
    return (
        
        <div className='h-[680px] w-full relative'>
            <Image src={'/Eifel.jpg'} alt={''} fill></Image>
            <div className='z-10 flex items-center justify-left p-30'>
                <h1 className='text-white font-bold drop-shadow-lg text-[150px]'>
                    Paris
                    <h4 className='text-gray-100 text-5xl pt-20 flex'>10 days | 4.9 &nbsp;<IoMdStar color= '#FFC800'/><IoMdStar color= '#FFC800'/><IoMdStar color= '#FFC800'/><IoMdStar color= '#FFC800'/><IoMdStar color= '#FFC800'/></h4>
                </h1>
            </div>
        </div>
        
    )
}
