import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {A11y, Autoplay } from 'swiper/modules';
import phoneframe from '../Assets/screenshot-frame.png';
import ss1 from '../Assets/screenshot-1.png';
import ss2 from '../Assets/screenshot-2.png';
import ss3 from '../Assets/screenshot-3.png';
import ss4 from '../Assets/screenshot-4.png';
import ss5 from '../Assets/screenshot-5.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function PhoneHover() {
  return (
    <div className='flex items-center justify-center'>
    <div className='relative z-10'>        
        <img src={phoneframe} alt="phoneframe" srcset="" /></div>
    <div className='absolute '>
        <Swiper
            className='w-[220px] h-[470px] rounded-3xl'
            modules={[A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide><img src={ss1} alt="" srcset="" /></SwiperSlide>
            <SwiperSlide><img src={ss2} alt="" srcset="" /></SwiperSlide>
            <SwiperSlide><img src={ss3} alt="" srcset="" /></SwiperSlide>
            <SwiperSlide><img src={ss4} alt="" srcset="" /></SwiperSlide>
            <SwiperSlide><img src={ss5} alt="" srcset="" /></SwiperSlide>
    
        </Swiper>
    </div>
    </div>
  );
}

export default PhoneHover;
