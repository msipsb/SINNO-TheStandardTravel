import React from 'react'
import Image from 'next/image'

export default function Details() {
    return (
        <div className='bg-black text-white text-left'>
            <div className='bg-[#EFF1F3] text-[#223843] text-3xl w-full h-20 flex items-center justify-center'>
                <div className='pl-8 font-bold'>Details</div>
            </div>
            <div className='bg-white text-black w-full h-screen grid grid-cols-3 p-8'>
                <div className='text-xl font-semibold'>Day 1</div>
            </div>
        </div>
    )
}
