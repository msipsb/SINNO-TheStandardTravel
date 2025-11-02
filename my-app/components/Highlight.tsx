import React from 'react'
import Image from 'next/image'

type HlimageItem = {
    image: string;
    title: string;
}

const HlimageItem: HlimageItem[] = [
    {image: "/first.jpg", title: "First"},
    {image: "/second.jpg", title: "Second"},
    {image: "/third.jpg", title: "Third"}
]

export default function Highlight() {
    return (
        <div className='bg-black text-white text-left'>
            <div className='bg-[#223843]/80 text-white text-3xl w-full h-20 flex items-center'>
                <div className='pl-8'>Highlight</div>
            </div>
            <div className='bg-white text-black w-full h-100 grid grid-cols-3 p-8'>
                
                {HlimageItem.map((item, index) => (
                    <div className='flex flex-col gap-2 items-center justify-start' key={index}>
                        
                        <div className='relative w-[500px] h-[300px]'>
                            <Image 
                                src={item.image} alt=''
                                fill
                                className="object-cover rounded-lg shadow-lg"
                            />
                        </div>

                        <p className='text-lg font-semibold mt-2'>
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
