import React from 'react'
import { FaCog,FaAddressCard,FaCheck } from 'react-icons/fa';

const dummyData = [
    {
      icon: <FaCog />,
      heading: "Install the App",
      description: "Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet"
    },
    {
      icon: <FaAddressCard />,
      heading: "Setup Your Profile",
      description: "Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet"
    },
    {
      icon: <FaCheck />,
      heading: "Enjoy The Features",
      description: "Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet"
    },
   
  ];
function Works() {
  return (
    <div className='w-full min-h-[800px]'>
           <div className='flex justify-center items-center flex-col p-4 mt-[60px] gap-2 '>
           <p className='text-[#eb4548] font_jost font-semibold text-[20px] text-center'>How It Works</p>
           <h1 className='font-bold font_jost text-[30px] md:text-[38px] text-[#262B47] text-center'>3 Easy Steps</h1>
      </div>

      <div className=" flex flex-wrap justify-center items-center py-4 gap-[30px] mt-[60px]  ">
      {dummyData.map((data, index) => (
       <div key={index}>
        <div className='flex justify-center items-center relative'>
        <div className="text-[40px] text-white rounded-full  flex justify-center items-center bg-[#eb4548] mr-4 w-[100px] h-[100px] absolute  bottom-[-50px] ">
             {data.icon}
           </div>
        </div>
        
         <div  className="max-w-[330px] min-h-[220px] rounded overflow-hidden  p-4 bg-[#F0F6FF] flex justify-center items-center flex-col ">
        
           
           <h2 className="text-xl font-medium font_jost text-[#262B47]  mt-[20px]">{data.heading}</h2>
         
         <p className="mt-4 text-[#919294] font_jost">
           {data.description}
         </p>
       </div>
       </div>
      ))}
    </div>
     
    </div>
  )
}

export default Works