import React from 'react'
import aboutpic from '../Assets/about.png'


function Download() {
  return (
<div className='flex'>
        <div>
            <img src={aboutpic} alt="" srcset="" />
        </div>
        <div>
             <p className='text-[#eb4548] font_jost font-semibold text-[20px]'>Download</p>
          <p className='font-bold font_jost text-[28px] md:text-[38px] mb-4 text-[#262B47]'>Download The Latest Version Of Our App</p>
          <p className='text-[#919294] font_jost text-[16px] font-normal text-justify mb-5 leading-[26px]' >Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod magna dolore erat amet</p>
        </div>
</div>
  )
}

export default Download