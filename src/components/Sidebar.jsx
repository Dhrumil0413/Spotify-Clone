import React from 'react'
import {assets} from '../assets/assets'

export const Sidebar = () => {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-3 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] gap-3 rounded flex flex-col justify-around'>
            <div className="flex item-center gap-3 pl-8 cursor-pointer">
                <img src={assets.home_icon} alt="Home Icon" className='w-6' />
                <p className='font-bold'>Home</p>
            </div>
            <div className='flex item-center gap-3 pl-8 cursor-pointer'>
                <img src={assets.search_icon} alt="Search Icon" className="w-6" />
                <p className='font-bold'>Search</p>
            </div>
        </div>
        
        <div className='bg-[#121212] h-[85%] rounded'>
            <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3 cursor-pointer">
                    <img className='w-8' src={assets.stack_icon}  alt="stack icon" />
                    <p className='font-semibold'>Your Library</p>
                </div>
            </div>
        </div>

    </div>
  )
}