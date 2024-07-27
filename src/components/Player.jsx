import React from 'react'
import { songsData } from '../assets/assets';
import { assets } from '../assets/assets';


export const Player = () => {
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      {/* The container to show Song Image, Song Name, and Singer Name. */}
      <div className='hidden lg:flex items-center gap-4 '>
        <img className='w-12' src={songsData[0].image} alt="" />
        <div>
          <p>{songsData[0].name}</p>
          <p>{songsData[0].desc.slice(0,12)}</p>
        </div>
      </div>
      
      {/* The container to show show play bar and control area. */}
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className="flex gap-4">
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
          <img className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
          <img className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
          <img className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
        </div>
        <div className="flex items-center gap-5">
          <p>1:06 {/*This time is subject to change (Current time)*/}</p>
          <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr className='h-1 border-none w-[100%] bg-green-800 rounded-full'/>
          </div>
          <p>3:02</p> {/* This timing is subject to change (Current time) */}
        </div>
      </div>

      {/* The container to show Sound control and device control panel. */}
      <div className='hidden lg:flex items-center gap-2 opacity-75'> 
        <img className='w-4' src={assets.plays_icon} alt="" />
        <img className='w-4' src={assets.mic_icon} alt="" />
        <img className='w-4' src={assets.queue_icon} alt="" />
        <img className='w-4' src={assets.speaker_icon} alt="" />
        <img className='w-4' src={assets.volume_icon} alt="" />
        <div className="w-20 bg-gray-300 h-1 rounded-full">
          <hr className='h-1 border-none w-[10%] bg-green-800 rounded-full'/>
        </div>
        <img className='w-4' src={assets.mini_player_icon} alt="" />
        <img className='w-4' src={assets.zoom_icon} alt="" />


      </div>
    </div>
  )
}

export default Player;