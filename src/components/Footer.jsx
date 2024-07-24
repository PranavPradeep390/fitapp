import React from 'react'
import bg from '../Assets/bg-top.png'
import { FaMapMarkerAlt,FaPhoneAlt,FaEnvelope,FaTwitter,FaInstagram,FaFacebook,FaLinkedinIn,FaPaperPlane,FaArrowRight} from 'react-icons/fa';
import bgcircle from '../Assets/bg-circle.png'
import bgtriangle from '../Assets/bg-triangle.png'


function Footer() {
  return (
    <div className='min-h-[650px] bg-[#db2326] bg-no-repeat' style={{ backgroundImage: `url(${bgcircle}),url(${bgtriangle})`, backgroundPosition: 'left bottom, right center',}}>
      <img src={bg} alt='bottom-bg'/>
      <div className=' flex justify-center items-center   mt-[-40px] '>
          <div className='grid lg:grid-cols-4 gap-[50px]  px-[40px] '>


            {/* 1st div */}
             <div className='flex flex-col'>
                  <div className='mb-[30px]'>
                    <h1 className='text-[#F0F6FF] font-semibold text-2xl font_jost'>Address</h1>
                  </div>

                  <div className='flex flex-col space-y-[20px]'>
                      <div className='flex gap-3'>
                        <div className=' flex justify-center items-center'> <FaMapMarkerAlt className='text-white'/></div>
                       
                        <p className='text-[#F0F6FF] font-normal '>123 Street, New York, USA</p>
                      </div>
                      <div className='flex gap-3'>
                      <div className=' flex justify-center items-center'> 
                        <FaPhoneAlt  className='text-white'/>
                        </div>
                        <p className='text-[#F0F6FF]'>+012 345 67890</p>
                      </div>
                      <div className='flex gap-3'>
                      <div className=' flex justify-center items-center'> 
                        <FaEnvelope  className='text-white'/>
                        </div>
                        <p className='text-[#F0F6FF]'>info@example.com</p>
                      </div>
                  </div>

                  <div className='flex gap-4 mt-[30px]'>
                     <div className=' rounded-full w-[40px] h-[40px] flex justify-center items-center border  hover:bg-white  text-white hover:text-[#db2326]'><a><FaTwitter/></a></div>
                     <div className=' rounded-full w-[40px] h-[40px] flex justify-center items-center border hover:bg-white text-white hover:text-[#db2326]'><a><FaInstagram className=''/></a></div>
                     <div className=' rounded-full w-[40px] h-[40px] flex justify-center items-center border hover:bg-white text-white hover:text-[#db2326]'><a><FaFacebook className=''/></a></div>
                     <div className=' rounded-full w-[40px] h-[40px] flex justify-center items-center border hover:bg-white text-white hover:text-[#db2326]'><a><FaLinkedinIn className=''/></a></div>
                  </div>
                  
             </div>


            {/* 2nd div */}
             <div className='flex flex-col'>

             <div className='mb-[30px]'>
                    <h1 className='text-[#F0F6FF] font-semibold text-2xl font_jost'>Quick Link</h1>
                  </div>

                  <div className='flex flex-col space-y-[20px]'>
                  <div className='flex gap-3'>
                        <div className=' flex justify-center items-center'> <FaArrowRight className='text-white'/></div>
                       
                        <p className='text-[#F0F6FF] font-normal cursor-pointer transition-transform duration-200 hover:scale-110  '>About Us</p>
                      </div>
                      <div className='flex gap-3'>
                        <div className=' flex justify-center items-center'> <FaArrowRight className='text-white'/></div>
                       
                        <p className='text-[#F0F6FF] font-normal cursor-pointer transition-transform duration-200 hover:scale-110  '>Contact Us</p>
                      </div>
                      <div className='flex gap-3'>
                        <div className=' flex justify-center items-center'> <FaArrowRight className='text-white'/></div>
                       
                        <p className='text-[#F0F6FF] font-normal  cursor-pointer transition-transform duration-200 hover:scale-110 '>Privacy Policy</p>
                      </div>
                      <div className='flex gap-3'>
                        <div className=' flex justify-center items-center'> <FaArrowRight className='text-white'/></div>
                       
                        <p className='text-[#F0F6FF] font-normal cursor-pointer transition-transform duration-200 hover:scale-110  '>Terms & Conditions</p>
                      </div>
                      <div className='flex gap-3'>
                        <div className=' flex justify-center items-center'> <FaArrowRight className='text-white'/></div>
                       
                        <p className='text-[#F0F6FF] font-normal cursor-pointer transition-transform duration-200 hover:scale-110  '>Careers</p>
                      </div>
                  </div>
             </div>




               {/* 3rd div */}


             <div className='flex flex-col'>

              <div className='mb-[30px]'>
                    <h1 className='text-[#F0F6FF] font-semibold text-2xl font_jost'>Popular Link</h1>
                  </div>

                  <div className='flex flex-col space-y-[20px]'>
                  <div className='flex gap-3'>
                        <div className=' flex justify-center items-center'> <FaArrowRight className='text-white'/></div>
                        
                        <p className='text-[#F0F6FF] font-normal cursor-pointer transition-transform duration-200 hover:scale-110 '>About Us</p>
                      </div>
                      <div className='flex gap-3'>
                        <div className=' flex justify-center items-center'> <FaArrowRight className='text-white'/></div>
                        
                        <p className='text-[#F0F6FF] font-normal cursor-pointer transition-transform duration-200 hover:scale-110  '>Contact Us</p>
                      </div>
                      <div className='flex gap-3'>
                        <div className=' flex justify-center items-center'> <FaArrowRight className='text-white'/></div>
                        
                        <p className='text-[#F0F6FF] font-normal cursor-pointer transition-transform duration-200 hover:scale-110  '>Privacy Policy</p>
                      </div>
                      <div className='flex gap-3'>
                        <div className=' flex justify-center items-center'> <FaArrowRight className='text-white'/></div>
                        
                        <p className='text-[#F0F6FF] font-normal cursor-pointer transition-transform duration-200 hover:scale-110  '>Terms & Conditions</p>
                      </div>
                      <div className='flex gap-3'>
                        <div className=' flex justify-center items-center'> <FaArrowRight className='text-white'/></div>
                        
                        <p className='text-[#F0F6FF] font-normal cursor-pointer transition-transform duration-200 hover:scale-110  '>Careers</p>
                      </div>
                  </div>
                          </div>





         <div className='flex flex-col'>

                    <div className='mb-[30px]'>
                          <h1 className='text-[#F0F6FF] font-semibold text-2xl font_jost'>Newsletter</h1>
                        </div>
                      <div className='mb-[20px]'>
                        <p className=' w-[200px] text-[#F0F6FF] font-normal'>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</p>
                      </div>

                      <div className='bg-white w-[210px] h-[50px] rounded-full flex justify-center items-center px-[10px] lg:mb-0 mb-[20px]'>
                          <input  type='email' placeholder='Your Email' className='w-[150px] outline-none focus:outline-none'/>  
                          <FaPaperPlane className='text-[#db2326] text-[20px]'/>

                      </div>
                        
                    </div>
          </div>


      </div>

      <div className='mt-[60px] px-[80px]'>
      <hr className='mx-auto mt-10 opacity-40 w-full '/>
      </div>


      <div className='px-[100px]'>

      <div className='flex lg:flex-row  flex-col mt-[20px] gap-[400px] '>
        
          <p className='text-[#F0F6FF] font-normal'>© Your Site Name, All Right Reserved. Designed By HTML Codex
          </p>
       
        <div className='flex gap-[15px]'>
         <p className='text-[#F0F6FF] font-normal cursor-pointer'>Home</p>
         <div className="w-[1px] h-[30px] opacity-40 bg-gray-300"></div>
         <p className='text-[#F0F6FF] font-normal cursor-pointer'>Cookies</p>
         <div className="w-[1px] h-[30px] opacity-40 bg-gray-300"></div>
         <p className='text-[#F0F6FF] font-normal cursor-pointer'>Help</p>
         <div className="w-[1px] h-[30px] opacity-40 bg-gray-300"></div>
         <p className='text-[#F0F6FF] font-normal cursor-pointer'>FQAs</p>
        </div>
      </div>


      </div>


    </div>
  )
}

export default Footer