import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState('transparent');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 3) {
        setBgColor('white');
      } else {
        setBgColor('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='sticky top-0 z-10' style={{ backgroundColor: bgColor, transition: 'background-color 0.3s' }}>
      {/* MainHeader */}
      <div className='min-h-[100px] grid sm:grid-cols-12 sm:w-auto w-full'>
        {/* titleSection */}
        <div className='flex sm:justify-start items-center sm:p-4 justify-between p-4 sm:col-span-4'>
          <div className='ms-0 md:ms-3'>
            <p className='md:text-xl text-base font_jost font-bold text-[#585858]'>FitApp</p>
          </div>
          <div className='sm:hidden'>
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl' />}
            </button>
          </div>
        </div>

        {/* navlinkssection */}
        <div className={`flex-col gap-0 space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 md:space-x-4 md:justify-center justify-start items-center sm:flex ${isOpen ? 'flex' : 'hidden'} sm:block sm:p-4 sm:col-span-4`}>
          <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
            <h3 className="text-sm lg:text-lg uppercase font-medium font_jost hover:text-[#73AB3A]" style={{ color: bgColor === 'white' ? '#585858' : 'white' }}>Home</h3>
          </Link>
          <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
            <h3 className="text-sm lg:text-lg uppercase font-medium font_jost hover:text-[#73AB3A]" style={{ color: bgColor === 'white' ? '#585858' : 'white' }}>About</h3>
          </Link>
          <Link to="features" smooth={true} duration={500} onClick={closeMenu}>
            <h3 className="text-sm lg:text-lg uppercase font-medium font_jost hover:text-[#73AB3A]" style={{ color: bgColor === 'white' ? '#585858' : 'white' }}>Feature</h3>
          </Link>
          <Link to="pricing" smooth={true} duration={500} onClick={closeMenu}>
            <h3 className="text-sm lg:text-lg uppercase font-medium font_jost hover:text-[#73AB3A]" style={{ color: bgColor === 'white' ? '#585858' : 'white' }}>Pricing</h3>
          </Link>
          <Link to="review" smooth={true} duration={500} onClick={closeMenu}>
            <h3 className="text-sm lg:text-lg uppercase font-medium font_jost hover:text-[#73AB3A]" style={{ color: bgColor === 'white' ? '#585858' : 'white' }}>Review</h3>
          </Link>
          <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>
            <h3 className="text-sm lg:text-lg uppercase font-medium font_jost hover:text-[#73AB3A]" style={{ color: bgColor === 'white' ? '#585858' : 'white' }}>Contact</h3>
          </Link>
        </div>

        <div className='hidden md:inline-block sm:block sm:p-4 sm:col-span-4 text-right'>
          <button className='bg-blue-500 rounded-3xl p-3 w-[150px] font_jost'>Start Free Trial</button>
        </div>
      </div>
    </div>
  );
}

export default Header
