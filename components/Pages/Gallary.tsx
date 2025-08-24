import Image from 'next/image'
import React from 'react';

const imagedata = [
    {
        id:1,
        url:'/images/2.jpg'
    },
     {
        id:2,
        url:'/images/5.jpg'
    },
     {
        id:3,
        url:'/images/3.jpg'
    },
     {
        id:4,
        url:'/images/4.jpg'
    },
     {
        id:5,
        url:'/images/6.jpg'
    },
     {
        id:6,
        url:'/images/homeicon.jpg'
    }
]

const Gallary = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full '>
        <span className="relative m-8 font-bold font text-[34px] cursor-pointer text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FF7518] after:transition-all after:duration-300 hover:after:w-full">
            Gallary</span>

        <div className='flex flex-wrap justify-center items-center'>
            {
                imagedata.map((item:any) => {  
                    return (
                        <div className='w-110 h-50 relative overflow-hidden group shadow-md'  key={item.id}>
                            { item?.url && 
                            <Image
                                src={item?.url} 
                                alt="HomeIcon"
                                fill
                                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                                priority
                                />
                            }

                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Gallary