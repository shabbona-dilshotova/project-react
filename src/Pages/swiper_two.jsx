import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './swiper_two.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
            <img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-brand-18.cc44aa25.png&w=256&q=75" alt="" />
            <img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-brand-17.52dccdb8.png&w=256&q=75" alt="" />
            <img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-brand-19.7e620cc8.png&w=256&q=75" alt="" />
            <img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-brand-20.916b7f40.png&w=256&q=75" alt="" />
            <img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-brand-21.e3315437.png&w=256&q=75  " alt="" />
            <img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-brand-21.e3315437.png&w=256&q=75" alt="" />
            <img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-brand-21.e3315437.png&w=256&q=75" alt="" />
            <img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-brand-23.ffff3ff7.png&w=256&q=75" alt="" />
            <img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-brand-24.ce49c210.png&w=256&q=75" alt="" />
            </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
