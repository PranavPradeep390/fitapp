import React from 'react'
import PhoneHover from './PhoneHover'
import DoneIcon from '@mui/icons-material/Done';
function Screenshots() {
  return (
    <div className='w-full h-auto md:h-[600px] flex flex-wrap items-center justify-center p-4 md:p-20 gap-[190px] mt-[50px] md:mt-0'>
      <div className='w-full md:w-[50%]'>
      <p className='text-[#eb4548] font_jost font-semibold text-[20px]'>Screenshot</p>
      <p className='font-bold font_jost text-[28px] md:text-[38px] mb-4 text-[#262B47]'>User Friendly interface And Very Easy To Use Fitness App</p>
      <p className='text-[#919294] font_jost text-[16px] font-normal text-justify mb-5 leading-[26px]' >Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod magna dolore erat amet</p>
       <ul>
        <li className='text-[#919294] font_jost text-[16px] font-normal text-justify mb-3'><DoneIcon className='text-[#eb4548] me-4 mb-1'/>Diam dolor diam ipsum et tempor sit</li>
        <li className='text-[#919294] font_jost text-[16px] font-normal text-justify mb-3'><DoneIcon className='text-[#eb4548] me-4 mb-1'/>Diam dolor diam ipsum et tempor sit</li>
        <li className='text-[#919294] font_jost text-[16px] font-normal text-justify mb-3'><DoneIcon className='text-[#eb4548] me-4 mb-1'/>Diam dolor diam ipsum et tempor sit</li>
       </ul>
       <button className='rounded-full px-6 md:px-11 py-[6px] md:py-[14px] text-white font_jost  bg-[#F00507] text-[17px] font-semibold mt-7'>Read More</button>
      </div>
      <div className='w-full md:w-[25%] mt-[-148px] md:mt-0'>
        <PhoneHover/>
      </div>
    </div>
  )
}

export default Screenshots