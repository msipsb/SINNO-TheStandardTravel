import Image from 'next/image'
import React from 'react'

function bghead() {
  return (
    <div className='w-full h-[680]'>
        <div>
            <Image 
            src={"/pic/helpcenterBG.png"}
            alt='icon'
            width={1749}
            height={689}
            />
        </div>
    </div>
  )
}

export default bghead