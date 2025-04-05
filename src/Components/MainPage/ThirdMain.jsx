import React from 'react'
import YoutubeDetail from './YoutubeDetail'

const ThirdMain = () => {
  return (
    <>
    
    <div className='w-screen h-screen bg-green-500 p-4'>
      
      <div className=' w-[80%] h-[80%] container mx-auto bg-pink-300 z-20'>
        <YoutubeDetail/>
      </div>

    </div>

    <footer className="w-full h-[100px] bg-black flex items-center justify-center text-white text-sm">
  Created  by 
  <a 
    href="https://www.youtube.com/@coderarmy" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-blue-400 ml-1"
  >
    @SarthakSharma
  </a>
</footer>
</>
  )
}

export default ThirdMain
