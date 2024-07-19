import React from 'react'
import bgbottom from "../Assets/bg-bottom.png"

function Home() {
  return (
    <div className='relative w-full h-[750px] bg-[#F00507] top-[-100px]'>
      {/* Home */}

      <img className='absolute bottom-0' src={bgbottom} alt="bgbottom"/>
    </div>
  )
}

export default Home