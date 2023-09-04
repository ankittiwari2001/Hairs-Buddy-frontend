import React from 'react'
import { images } from "../constants";
import { BsCheckLg } from "react-icons/bs";


const ArticleCard = ( { className } ) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ${className} ` }>
      <img 
      src={images.RosemarryOil} 
      alt="Rosemary Essential Oil" 
      className='w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60' 
      />
      <div className='p-5'>
        <h2 className='font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]'>Rosemary Essential Oil:Nature's Aroma Magic</h2>
        <p className='text-dark-ligth mt-3 text-sm md:text-lg'>Explore the enchanting world of Rosemary essential oil - a fragrant elixir with a wealth of natural goodness.</p>
        <div className='flex justify-between flex-nowrap items-center mt-6'>
            <div className='flex items-center gap-x-2 md:gap-x-2.5'>
              <img 
              src={images.ProfilePic} 
              alt="Post profile"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full"  />
              <div className='flex flex-col' >
                  <h4 className='font-bold italic text-dark-soft text-sm md:text-base'>
                    Ankit Tiwari
                  </h4>
                  <div className='flex items-center gap-x-2'>
                    <span className='bg-[#36B37E] w-fit bg-opacity-20 p-1.5 rounded-full'>
                      <BsCheckLg className='w-1.5 h-1.5 text-[#36B37E]'/>
                      </span>
                    <span className='italic text-dark-light text-xs md:text-sm'>Verified Writer</span>
                  </div>
              </div>
            </div>
            <span className='font-bold text-dark-light italic tet-xs md:text-base'>04 Sep</span>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
