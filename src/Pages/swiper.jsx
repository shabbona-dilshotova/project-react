import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './swiper.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
    <div className='hallo'>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiscount-on-samsung-and-soundbar.cec5f6b5.png&w=828&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzoodpay.884f0db7.png&w=828&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiscount-on-scales.e38d9cbd.png&w=828&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsamsung_s24.8420e925.png&w=828&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsamsung_s24.8420e925.png&w=828&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhaier.498a37cb.png&w=828&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbig_slider_image15.f1af0710.png&w=1080&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbig-slider-image1.b61660f6.png&w=1080&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbig-slider-image-4.7be912ef.png&w=1080&q=75" alt="" /></SwiperSlide>
      </Swiper>
      
<div className='swp'>
<div className='swp'>
<img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstallments-for-4-months.5be571ba.jpg&w=384&q=75" alt="" />
</div>
<br /><br />
<div>
<img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSamsung-for-24-months.8f7fb19e.jpg&w=384&q=75" alt="" />
</div>
</div>
      </div>
    </>
  );
}
