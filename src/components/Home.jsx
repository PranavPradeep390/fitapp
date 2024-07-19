import React from 'react'
import bgbottom from "../Assets/bg-bottom.png"
import bgcircle from "../Assets/bg-circle.png"
import bgtriangle from "../Assets/bg-triangle.png"


function Home() {
  return (
    <div className='relative w-full h-[750px] bg-red-600 top-[-80px]'>
      <img src={bgcircle} alt="na"/>
      <img className='absolute right-0 top-[280px]' src={bgtriangle} alt="na"  />
      {/* Home */}

      <img className='absolute bottom-0' src={bgbottom} alt="bgbottom"/>
    </div>
  )
}

export default Home