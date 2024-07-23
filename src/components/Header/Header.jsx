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
        if (window.innerWidth >= 768) { // Medium and above screens
          setBgColor('white');
          setPaddingClass('padding-change');
          setTimeout(() => setPaddingClass('normal-padding'), 300); // Revert class after 300ms
        } else { // Below medium screens
          setBgColor('white');
        }
      } else {
        if (window.innerWidth >= 768) { // Medium and above screens
          setBgColor('transparent');
          setPaddingClass('normal-padding');
        } else { // Below medium screens
          setBgColor('white');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Adjust background color on resize

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
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
                className={`md:text-4xl text-[30px] font_jost font-bold ${bgColor === 'white' || isOpen ? 'text-[#F00507]' : 'text-white'}`}
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
        <div className={`hidden sm:flex flex-col gap-0 space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 md:space-x-5 md:justify-center justify-start items-center ${isOpen ? 'flex' : 'hidden'} sm:block`}>
          <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
            <h3 className={`text-sm lg:text-lg font-semibold font_jost hover:text-[#73AB3A] ${isOpen ? 'text-[#F00507]' : ''}`} style={{ color: bgColor === 'white' ? '#585858' : 'white' }}>Home</h3>
          </Link>
          <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
            <h3 className={`text-sm lg:text-lg font-semibold font_jost hover:text-[#73AB3A] ${isOpen ? 'text-[#F00507]' : ''}`} style={{ color: bgColor === 'white' ? '#585858' : 'white' }}>About</h3>
          </Link>
          <Link to="features" smooth={true} duration={500} onClick={closeMenu}>
            <h3 className={`text-sm lg:text-lg font-semibold font_jost hover:text-[#73AB3A] ${isOpen ? 'text-[#F00507]' : ''}`} style={{ color: bgColor === 'white' ? '#585858' : 'white' }}>Feature</h3>
          </Link>
          <Link to="pricing" smooth={true} duration={500} onClick={closeMenu}>
            <h3 className={`text-sm lg:text-lg font-medium font_jost hover:text-[#73AB3A] ${isOpen ? 'text-[#F00507]' : ''}`} style={{ color: bgColor === 'white' ? '#585858' : 'white' }}>Pricing</h3>
          </Link>
          <Link to="review" smooth={true} duration={500} onClick={closeMenu}>
            <h3 className={`text-sm lg:text-lg font-semibold font_jost hover:text-[#73AB3A] ${isOpen ? 'text-[#F00507]' : ''}`} style={{ color: bgColor === 'white' ? '#585858' : 'white' }}>Review</h3>
          </Link>
          <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>
            <h3 className={`text-sm lg:text-lg font-semibold font_jost hover:text-[#73AB3A] ${isOpen ? 'text-[#F00507]' : ''}`} style={{ color: bgColor === 'white' ? '#585858' : 'white' }}>Contact</h3>
          </Link>
        </div>

        <div className='hidden md:inline-block text-right'>
          <button className='bg-[#eb4548] text-white font_jost rounded-3xl py-2 w-[150px] font_jost font-medium shadow-inner'>Start Free Trial</button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className='sm:hidden flex flex-col items-center bg-white pb-5'>
          <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
            <h3 className="text-lg mb-1 lg:text-lg font-semibold font_jost hover:text-[#73AB3A] text-red-600">Home</h3>
          </Link>
          <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
            <h3 className="text-lg mb-1 lg:text-lg font-semibold font_jost hover:text-[#73AB3A] text-red-600">About</h3>
          </Link>
          <Link to="features" smooth={true} duration={500} onClick={closeMenu}>
            <h3 className="text-lg mb-1 lg:text-lg font-semibold font_jost hover:text-[#73AB3A] text-red-600">Feature</h3>
          </Link>
          <Link to="pricing" smooth={true} duration={500} onClick={closeMenu}>
            <h3 className="text-lg mb-1 lg:text-lg font-medium font_jost hover:text-[#73AB3A] text-red-600">Pricing</h3>
          </Link>
          <Link to="review" smooth={true} duration={500} onClick={closeMenu}>
            <h3 className="text-lg mb-1 lg:text-lg font-semibold font_jost hover:text-[#73AB3A] text-red-600">Review</h3>
          </Link>
          <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>
            <h3 className="text-lg mb-1 lg:text-lg font-semibold font_jost hover:text-[#73AB3A] text-red-600">Contact</h3>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
