import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { IoIosArrowDropdownCircle } from "react-icons/io";
const Navbar = () => {
  return (
    <>
      <div className='h-screen w-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100'>

        {/* Navbar */}
        <div className='h-[15%] bg-gradient-to-r from-indigo-400 to-purple-500 flex items-center justify-between p-5 shadow-md'>
          <img src="/Images/logo.png" alt="DSA Logo" className='h-full object-contain' />
          <div className='flex gap-4 text-white font-medium text-lg'>
            <a href='https://www.google.com' target='_blank' rel="noopener noreferrer" className='hover:underline hover:text-yellow-200 transition'>Searching</a>
            <a href='#' className='hover:underline hover:text-yellow-200 transition'>Sorting</a>
            <a href='#' className='hover:underline hover:text-yellow-200 transition'>About Us</a>
          </div>
        </div>

        {/* Main Section */}
        <main className='w-[80%] h-[50%] bg-gradient-to-r from-white via-blue-100 to-purple-100 container mx-auto mt-4 flex rounded-lg shadow-lg'>

          {/* Image */}
          <div className='w-[50%] h-[90%] bg-gradient-to-br from-pink-200 to-purple-200 '>
            <img src="/Images/logo.png" alt="" className='w-full h-full object-cover rounded-l-lg' />
          </div>

          {/* Typing Effect Section */}
          <div className='w-[50%] h-full bg-gradient-to-br from-purple-200 to-blue-100 p-6 flex flex-col justify-center text-gray-800'>
            <h1 className='text-3xl font-bold mb-4'>Visualize How</h1>
            <div className='text-2xl font-semibold text-purple-700 h-10'>
              <Typewriter
                words={['Merge Sort....', 'Bubble Sort....', 'Insertion Sort....', 'Selection Sort....']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={80}
                deleteSpeed={60}
                delaySpeed={1500}
              />
            </div>
            <h3 className='mt-6 text-xl text-gray-600'>are Working....</h3>
          </div>
            
        </main>
        {/**Drop Down */}
        <div className='relative w-fit mx-auto mt-6'>
  <button className='group peer border border-gray-300 bg-white text-gray-700 font-semibold text-lg px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition flex items-center gap-2'>
    See Algorithm In Action
    <IoIosArrowDropdownCircle />
  </button>

  <div className='absolute left-0 mt-2 w-60 bg-white border border-gray-300 rounded-lg shadow-lg opacity-0 peer-focus:opacity-100 peer-hover:opacity-100 group-hover:opacity-100 transition duration-200 z-10'>
    <ul className='flex flex-col text-gray-700 items-center'>
      <li className='font-bold hover:bg-gray-100 px-4 py-2 cursor-pointer'>Merge Sort</li>
      <li className='font-bold hover:bg-gray-100 px-4 py-2 cursor-pointer'>Quick Sort</li>
      <li className='font-bold hover:bg-gray-100 px-4 py-2 cursor-pointer'>Insertion Sort</li>
      <li className='font-bold hover:bg-gray-100 px-4 py-2 cursor-pointer'>Selection Sort</li>
    </ul>
  </div>
</div>
      </div>
    </>
  )
}

export default Navbar
