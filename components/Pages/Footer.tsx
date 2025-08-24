import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col w-full py-3'>
        <div className='bg-[#eb7734] w-full flex flex-col justify-center items-center'>
        <span className="text-[14px] text-white mt-2 italic ">"Welcome to a place where cooking isn't just a task—it's a joyful ritual of creativity, culture, and comfort, made simple for every kitchen."</span>
        <span className='font-bold font text-[28px] text-white mt-6'>Contact Us</span>
        <div className='flex flex-col pb-12'>
          <span className="text-[14px] text-[#F9F6EE] mt-2  ">467 Adina Estate, Lake Hipolitoside</span>
          <span className="text-[14px] text-[#F9F6EE] mt-2  ">IA 90418, United States</span>
          <span className="text-[14px] text-[#F9F6EE] mt-2  ">Phone: +1 555-123-4567</span>
        </div>
        </div>
        <div className='h-10 bg-[#FF7518] flex justify-center items-center'>
            <span className='text-[14px] text-white mt-2 '>Designed By Ajith A P</span>
        </div>
    </div>
  )
}

export default Footer