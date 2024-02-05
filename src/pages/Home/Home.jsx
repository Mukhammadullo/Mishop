import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Home = () => {
  return (
    <div>
      <div className="w-[80%] m-auto h-[60vh] my-10">
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
          <SwiperSlide>
            <img src="src/assets/images/macbook.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/img2.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/img3.avif" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/img5.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/iphone15-pro-64.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/img3.avif" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/iphone15-pro-64.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/img5.webp" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Popular category */}
      <div className="border-red-500 border-solid border-[2px] my-8 w-[80%] m-auto">
        <p className="text-[23px] font-bold">Популярные категории</p>
        {/* cards */}
        <div className=" w-[100%] py-8  ">
          {/* CardsRow1 */}
          <div className="flex text-center justify-between py-3">
            <div className="w-[15%]">
              <img src="src/assets/images/skidka.jpg" alt="" />
              <p>Скидки</p>
            </div>
            <div className="w-[15%]">
              <img src="src/assets/images/phone.jpg" alt="" />
              <p>Смартфоны и планшеты</p>

            </div>
            <div className="w-[15%]">
              <img src="src/assets/images/phone.jpg" alt="" />
              <p>Телевизоры</p>
            </div>
            <div className="w-[15%]">
              <img src="src/assets/images/sport.png" alt="" />
              <p>Бытовая техника</p>
            </div>
            <div className="w-[15%]">
            <img src="src/assets/images/phone.jpg" alt="" />
            <p>Кондиционеры</p>
            </div>
            <div className="w-[15%]">
              <img src="src/assets/images/phonehead.jpg" alt="" />
              <p>Наушники</p>
            </div>
          </div>
          {/* CarsRow2 */}
          <div className="flex text-center">
            <div className="w-[15%]">
              <img src="src/assets/images/skidka.jpg" alt="" />
              <p>Холодильники</p>
            </div>
            <div className="w-[15%]">
              <img src="src/assets/images/notebook.jpg" alt="" />
              <p>Ноутбуки</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
