// "use client' 
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoCallOutline } from "react-icons/io5";

const Head = () => {
  return (
    <div className='flex flex-row justify-between w-full h-18 bg-[#FFFDF2] ph-2 items-center fixed top-0 z-50 shadow-md'>
      <div className='m-2 cursor-pointer'>
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={100}
          height={100}
        />
      </div>
      <div className='flex justify-between flex-row items-center'>
        <Link href="/" className="relative m-2 cursor-pointer text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FF7518] after:transition-all after:duration-300 hover:after:w-full">Home</Link>
        {/* <Link href="/" className="relative m-2 cursor-pointer text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FF7518] after:transition-all after:duration-300 hover:after:w-full">About Us</Link> */}
        {/* <span className="relative m-2 cursor-pointer text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FF7518] after:transition-all after:duration-300 hover:after:w-full">Contact</span> */}
        <Link href="/recipes" className="relative m-2 cursor-pointer text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FF7518] after:transition-all after:duration-300 hover:after:w-full">Receipes</Link>
      </div>
      <div className='flex justify-between flex-row items-center'>
        <button className="flex items-center gap-2 px-4 h-10 bg-[#FF7518] text-white rounded-[1.5vw] cursor-pointer">
          <IoCallOutline className="text-[20px] " />9988776655</button>
      </div>
    </div>
  )
}

export default Head