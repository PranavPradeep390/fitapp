import React from 'react'

function Contact() {
  return (
    <div className='w-full h-[800px]'>
       <div className='flex justify-center items-center flex-col p-4 mt-[60px] gap-2 mb-[50px] '>
           <p className='text-[#eb4548] font_jost font-semibold text-[20px] text-center'>Contact Us</p>
           <h1 className='font-bold font_jost text-[30px] md:text-[38px] text-[#262B47] text-center'>Get In Touch!</h1>
      </div>
        
      <div className='flex justify-center items-center flex-col gap-[20px]'  >
          <div className='flex lg:flex-row flex-col gap-[30px]'>
            <input type='text' placeholder='Your Name' className='border border-[#ced4da] w-[400px] h-[60px] rounded-lg px-[20px]' />
            <input type='email' placeholder='Your Email' className='border border-[#ced4da] w-[400px] h-[60px] rounded-lg px-[20px]' />
          </div>
          <div>
            <input type='text' placeholder='Subject' className='border border-[#ced4da] w-[830px] h-[60px] rounded-lg px-[20px]' />
          </div>
          <div>
            <input type='text' placeholder='Message' className='border border-[#ced4da] w-[830px] h-[150px] rounded-lg px-[20px] ' />
          </div>
      </div>

      <div className='flex justify-center items-center mt-[40px]'>
        <button className='bg-[#eb4548] text-white font_jost rounded-full py-2 w-[200px] h-[50px] font-medium shadow-inner'>Send Message</button>
      </div>
    </div>
  )
}

export default Contact