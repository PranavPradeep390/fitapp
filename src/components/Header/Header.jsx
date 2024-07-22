import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState('transparent');
  const [paddingClass, setPaddingClass] = useState('normal-padding');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setBgColor('white');
        setPaddingClass('padding-change');
        setTimeout(() => setPaddingClass('normal-padding'), 300); // Revert class after 300ms
      } else {
        setBgColor('transparent');
        setPaddingClass('normal-padding');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-20 transition-all duration-300 ${paddingClass}`}
      style={{ backgroundColor: bgColor }}
    >
      {/* MainHeader */}
      <div className='min-h-[80px] flex items-center justify-between px-4 sm:px-6 md:pt-0'>
        {/* titleSection */}
        <div className='flex items-center sm:w-auto w-full justify-between'>
          <div className='flex items-center'>
            <div className='ms-0 md:ms-3'>
              <p 
                className={`md:text-4xl text-[30px] font_jost font-bold ${bgColor === 'white' ? 'text-[#F00507]' : 'text-white'}`}
              >
                FitApp
              </p>
            </div>
          </div>
          <div className='sm:hidden'>
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl' />}
            </button>
          </div>
        </div>

        {/* navlinkssection */}
        <div className={`flex-col gap-0 space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 md:space-x-5 md:justify-center justify-start items-center sm:flex ${isOpen ? 'flex' : 'hidden'} sm:block`}>
          <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
            <h3 className="text-sm lg:text-lg font-semibold font_jost hover:text-[#73AB3A]" style={{ color: bgColor === 'white' ? '#585858' : 'white' }}>Home</h3>
          </Link>
          <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
            <h3 className="text-sm lg:text-lg font-semibold font_jost hover:text-[#73AB3A]" style={{ color: bgColor === 'white' ? '#585858' : 'white' }}>About</h3>
          </Link>
          <Link to="features" smooth={true} duration={500} onClick={closeMenu}>
            <h3 className="text-sm lg:text-lg font-semibold font_jost hover:text-[#73AB3A]" style={{ color: bgColor === 'white' ? '#585858' : 'white' }}>Feature</h3>
          </Link>
          <Link to="pricing" smooth={true} duration={500} onClick={closeMenu}>
            <h3 className="text-sm lg:text-lg font-medium font_jost hover:text-[#73AB3A]" style={{ color: bgColor === 'white' ? '#585858' : 'white' }}>Pricing</h3>
          </Link>
          <Link to="review" smooth={true} duration={500} onClick={closeMenu}>
            <h3 className="text-sm lg:text-lg font-semibold font_jost hover:text-[#73AB3A]" style={{ color: bgColor === 'white' ? '#585858' : 'white' }}>Review</h3>
          </Link>
          <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>
            <h3 className="text-sm lg:text-lg font-semibold font_jost hover:text-[#73AB3A]" style={{ color: bgColor === 'white' ? '#585858' : 'white' }}>Contact</h3>
          </Link>
        </div>

        <div className='hidden md:inline-block text-right'>
          <button className='bg-[#eb4548] text-white font_jost rounded-3xl py-2 w-[150px] font_jost font-medium shadow-inner'>Start Free Trial</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
