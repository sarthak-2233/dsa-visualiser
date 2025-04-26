import React from 'react'

const DashboardNav = () => {
  return (
    <>
          {/* Navbar */}
<nav className="h-[100px] bg-gradient-to-r from-indigo-400 to-purple-500 shadow-md">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
    {/* Logo */}
    <div className="flex-shrink-0">
      <img src="/Images/logo.png" alt="DSA Logo" className="h-18 w-auto" />
    </div>

    {/* Nav Links */}
    <div className="hidden md:flex gap-6 text-white font-medium text-lg">
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline hover:text-yellow-200 transition duration-200"
      >
        Searching
      </a>
      <a
        href="#"
        className="hover:underline hover:text-yellow-200 transition duration-200"
      >
        Sorting
      </a>
      <a
        href="#"
        className="hover:underline hover:text-yellow-200 transition duration-200"
      >
        About Us
      </a>
    </div>
  </div>
</nav>
   
        
    </>
  )
}

export default DashboardNav



{/* Navbar 
        <div className='h-[15%] bg-gradient-to-r from-indigo-400 to-purple-500 flex items-center justify-between p-1 shadow-md'>
          <img src="/Images/logo.png" alt="DSA Logo" className=' ' />
          <div className='flex gap-5 text-white font-medium text-lg'>
            <a href='https://www.google.com' target='_blank' rel="noopener noreferrer" className='hover:underline hover:text-yellow-200 transition'>Searching</a>
            <a href='#' className='hover:underline hover:text-yellow-200 transition'>Sorting</a>
            <a href='#' className='hover:underline hover:text-yellow-200 transition'>About Us</a>
          </div>
        </div>
    */}