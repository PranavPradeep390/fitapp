import React from 'react'
import bgbottom from "../Assets/bg-bottom.png"
import bgcircle from "../Assets/bg-circle.png"
import bgtriangle from "../Assets/bg-triangle.png"
import PhoneHover from './PhoneHover'


function Home() {
  return (
    <div className='relative w-full md:h-[750px]   bg-[#F00507] top-[-110px] md:top-[-80px] '>
      <img src={bgcircle} alt="na"/>
      <img className='absolute right-0 top-[280px]' src={bgtriangle} alt="na"  />
     <div className='flex flex-wrap mt-0 px-2 md:px-24 md:py-[60px] justify-center gap-0'>
        <div className='w-full md:w-[60%]'>
          <h1 className='font_jost text-white text-[30px] text-center md:text-left md:text-[41px] font-bold leading-[45px]'>The Revolutionary App That Helps To Control Your Own Fitness</h1>
          <p className='font_jost text-white text-[16px] font-semibold py-3 text-center'>Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit justo amet ipsum vero ipsum clita lorem</p>
          <div className='flex gap-5 py-5 justify-center md:justify-start mb-7 md:mb-0'>
            <button className='font_jost text-white bg-[#eb4548] font-medium text-[17px] shadow-2xl md:py-[14px] md:px-11 py-1 px-7 rounded-3xl'>Read More</button>
            <button className='font_jost text-white bg-[#eb4548] font-medium text-[17px] shadow-2xl md:py-[14px] md:px-11 py-1 px-7 rounded-3xl'>Contact Us</button>
          </div>
        </div>
  
        {/* Home */}
        <div className='w-full md:w-[27%] md:ms-16'><PhoneHover/></div>
     </div>
      {/* absolute bottom-0 right-[170px] */}
      <img className='absolute bottom-0' src={bgbottom} alt="bgbottom"/>
      
    </div>
  )
}

export default Home