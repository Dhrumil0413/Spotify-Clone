import React from 'react'
import {assets} from '../assets/assets'

export const Sidebar = () => {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-3 text-white hidden lg:flex'>

        {/* Combination of Home and Search Button Container  */}
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
            <div className="flex item-center gap-3 pl-8 cursor-pointer">
                <img src={assets.home_icon} alt="Home Icon" className='w-6' />
                <p className='font-bold'>Home</p>
            </div>
            <div className='flex item-center gap-3 pl-8 cursor-pointer'>
                <img src={assets.search_icon} alt="Search Icon" className="w-6" />
                <p className='font-bold'>Search</p>
            </div>
        </div>
        
        {/* The other icons like Search Library and Create your playlist buttons are added here. */}
        <div className='bg-[#121212] h-[85%] rounded'>
            {/* The stack-icon, Arrow-icon and + icon of spotify are shown in  this container */}
            <div className="p-4 flex flex-row items-center justify-between">
                <div className="flex items-center gap-3 cursor-pointer">
                    <img className='w-8' src={assets.stack_icon}  alt="stack icon" />
                    <p className='font-semibold'>Your Library</p>
                </div>

                <div className="flex item-center gap-3">
                    <img className="w-4" src={assets.arrow_icon} alt="Arrow Icon" />
                    <img className="w-4" src={assets.plus_icon} alt="Plus Icon" />
                </div>
            </div>

            {/* Container to Show two different flex containers which allows you to create new play list or Browse Podcasts */}
            <div className='p-4 bg-[#242424] m-2 rounded  item-start justify-content font-semibold'>
                <h1>Create your First Playlist</h1>
                <p className='font-light mt-2 text-sm'>Its Okay, We will help you</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
            </div>

            <div className='p-4 bg-[#242424] m-2 rounded  item-start justify-content font-semibold'>
                <h1>Let's findsome podcasts to follow</h1>
                <p className='font-light mt-2 text-sm'>We'll keep you updated on next episode</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse Podcasts</button>
            </div>
        </div>

    </div>
  )
}