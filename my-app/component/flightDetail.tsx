import React from 'react'

const flightInfo =[
  {airline: 'Thai Air Asia - Direct', time: '7:30-10:30', price: '7,332'},
  {airline: 'Thai Airways - Direct', time: '13:30-15:10', price: '6,332'},
  {airline: 'Viejet Air - Direct', time: '18:00-19:35', price: '4,332'},
  {airline: 'Thai Air Asia1 - Direct', time: '7:30-10:30', price: '7,332'},
  {airline: 'Thai Air Asia2 - Direct', time: '8:30-10:30', price: '10,332'},
  {airline: 'Thai Air Asia3 - Direct', time: '9:30-10:30', price: '14,332'}
]

function FlightDetails() {
  return (
    <div className='grid grid-cols-3 m-10 gap-3 w-full gap-y-20'>
      {flightInfo.map((finfo,index)=>(
        <div className='w-[371px] h-[206px] bg-[#DBD3D8] rounded-3xl ' key={index}>
          <p className='text-black font-alegreya-sans text-[20px] pl-20 pt-6'>{finfo.airline}</p>
          <div className='ml-2 mt-2 w-[346.12px] h-[67px] bg-[#D8B4A0] rounded-2xl text-black font-alegreya-sans text-[20px] font-extrabold pl-3 pt-1'>Bangkok (BKK) → Singapore (SIN)
            <p className='text-black font-alegreya-sans text-[20px] font-medium'>{finfo.time}</p>
          </div>
          <div className='ml-6 mr-8 mt-2 bg-black h-0.5 opacity-35'></div>
          <div className='ml-2 mt-4 w-[346.12px] h-[36px] bg-[#EFF1F3] rounded-2xl text-black font-alegreya-sans text-[20px] font-extrabold pl-3 pt-1'>{finfo.price} baht</div>
        </div>
        


      ))}
    </div>
  )
}

export default FlightDetails