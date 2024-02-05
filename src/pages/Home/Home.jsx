import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Home = () => {
  

  return (
    <div className='w-[80%] m-auto h-[60vh] my-10'>
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-xl"
      >
        <SwiperSlide><img src="src/assets/images/iphone15-pro-64.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/images/img2.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/images/img3.avif" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/images/img5.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/images/iphone15-pro-64.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/images/img3.avif" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/images/iphone15-pro-64.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/images/img5.webp" alt="" /></SwiperSlide>
        
       
      </Swiper>
    </div>
  );
};

export default Home;
