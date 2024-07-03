import React from 'react';
import bgImg from '../assets/forex.jpg'

const test = () => {
  return (
<div className='flex mx-10 justify-center gap-8 mt-10'>

{/* Card 1  */}
    <div className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group">
      <img src={bgImg} alt="" 
      className="transition-transform group-hover:scale-110 duration-200"/>
      
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
        <div className="p-4 text-white">
          <h3 className="text-xl font-bold mb-2 underline underline-offset-2">Beginner</h3>
          <p>Key Starting concepts of trading. </p>
          <div className='flex gap-1'>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
            Start 😊
          </button>
          </div>
        </div>
      </div>
    </div>

{/* Card 2  */}
<div className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group">
      <img src={bgImg} alt="" 
      className="transition-transform group-hover:scale-110 duration-200"/>
      
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
        <div className="p-4 text-white">
          <h3 className="text-xl font-bold mb-2 underline underline-offset-2">Intermediate</h3>
          <p>How to identify and harness opportunities. </p>
          <div className='flex gap-1'>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
            Start 😊
          </button>
          </div>
        </div>
      </div>
    </div>

{/* Card 3  */}
<div className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group">
      <img src={bgImg} alt="" 
      className="transition-transform group-hover:scale-110 duration-200"/>
      
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
        <div className="p-4 text-white">
          <h3 className="text-xl font-bold mb-2 underline underline-offset-2">Advanced</h3>
          <p>Take your trading to the next level. </p>
          <div className='flex gap-1'>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
            Start 😊
          </button>
          </div>
        </div>
      </div>
    </div>

  </div>
  )
}

export default test