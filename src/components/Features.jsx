import React from 'react'
import { FaEye,FaLayerGroup,FaEdit,FaShieldAlt,FaCloud,FaMobileAlt } from 'react-icons/fa';

const dummyData = [
  {
    icon: <FaEye />,
    heading: "High Resolution",
    description: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem."
  },
  {
    icon: <FaLayerGroup />,
    heading: "Retina Ready",
    description: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem."
  },
  {
    icon: <FaEdit />,
    heading: "Editable Data",
    description: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.."
  },
  {
    icon: <FaShieldAlt />,
    heading: "Fully Secured",
    description: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem."
  },
  {
    icon: <FaCloud />,
    heading: "Cloud Storage",
    description: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem."
  },
  {
    icon: <FaMobileAlt />,
    heading: "Fully Responsive",
    description: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.."
  }
];


function Features() {
  return (
    <div className='w-full min-h-[800px]'>

      <div className='flex justify-center items-center flex-col p-4 mt-[60px] gap-2 '>
           <p className='text-[#eb4548] font_jost font-semibold text-[20px] text-center'>App Features</p>
           <h1 className='font-bold font_jost text-[30px] md:text-[38px] text-[#262B47] text-center'>Awesome Features</h1>
      </div>

      
      <div className=" flex flex-wrap justify-center items-center py-4 gap-[30px] mt-[20px]  ">
      {dummyData.map((data, index) => (
         <div key={index} className="max-w-[330px] min-h-[250px] rounded overflow-hidden  transform transition-transform duration-300 ease-in-out hover:shadow-lg hover:-translate-y-4  p-4 bg-[#F0F6FF]">
        
           <div className="text-[30px] text-white rounded-full  flex justify-center items-center bg-[#eb4548] mr-4 w-[60px] h-[60px] mb-[30px] ">
             {data.icon}
           </div>
           <h2 className="text-xl font-medium font_jost text-[#262B47] ">{data.heading}</h2>
         
         <p className="mt-4 text-[#919294] font_jost">
           {data.description}
         </p>
       </div>
      ))}
    </div>
     
      </div>
      
   
  )
}

export default Features