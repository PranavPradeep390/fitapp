import React from 'react'
import aboutpic from '../Assets/about.png'
import { IoChatbubblesSharp } from "react-icons/io5";
import { MdOutlineSettingsSuggest } from "react-icons/md";

function About() {
  return (
    <div className='w-full h-[800px] md:h-[600px] bg-white flex flex-wrap items-center justify-center gap-[68px] p-4 md:p-0'>
      <div className='w-full md:w-[36%]'>
        <p className='text-[#eb4548] font_jost font-semibold text-[20px]'>About App</p>
        <p className='font-bold font_jost text-[30px] md:text-[38px] mb-4 text-[#262B47]'>#1 App For Your Fitness</p>
        <p className='text-[#919294] font_jost text-[16px] font-normal text-justify mb-5 leading-[26px]' >Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod magna dolore erat amet</p>
        <div className='flex items-center gap-[30px] md:gap-[120px] mb-10'>
          <div className='flex'>
          <MdOutlineSettingsSuggest className='text-[42px] text-[#F00507] mt-2'/>
         <div className='ms-4'>
            <p className='font-bold font_jost text-[26px] md:text-[30px] text-[#262B47]'>1234</p>
            <p className='text-[#eb4548] font-medium text-[15px] mt-'>Active Install</p>
         </div>
          </div>
          <div className='flex '>
          <IoChatbubblesSharp className='text-[32px] text-[#F00507] mt-3'/>
          <div className='ms-4'>
            <p className='font-bold font_jost text-[26px] md:text-[30px] text-[#262B47]'>1234</p>
            <p className='text-[#eb4548] font-medium text-[15px] mt-'>Client Reviews</p>
          </div>
          </div>
        </div>
        <button className='rounded-full px-6 md:px-11 py-2 md:py-[14px] text-white font_jost  bg-[#F00507] text-[17px] font-semibold'>Read More</button>

      </div>
      <div className='w-full md:w-[38%]'>
        <img src={aboutpic} alt="" srcset="" />
      </div>
     
    </div>
  )
}

export default About