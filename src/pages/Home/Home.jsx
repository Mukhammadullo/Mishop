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
      <div className="w-[80%] m-auto h-[60vh] mt-[140px] shadow-2xl">
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
            <img src="src/assets/images/te4.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/te3.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/img5.webp" alt="" />
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

      {/* Discounts */}
      <div className="w-[80%] m-auto border-red-500 border-solid border-[2px]">
        <p className="text-[23px] font-bold">Самые горячие скидки</p>
        <p>Ihone </p>
        <p>headphones</p>
        <p>notbokes</p>
        <p>book</p>
        <p>in ther swiper</p>
      </div>

      {/* Phones */}
      <div className="w-[80%] m-auto border-red-500 border-solid border-[2px]">
        <p className="text-[23px] font-bold">Без смартфона ни дня</p>
        <p>Iphonese with swiper</p>
      </div>
      {/* sport */}
      <div className="w-[80%] m-auto border-red-500 border-solid border-[2px]">
        <p className="text-[23px] font-bold">Без смартфона ни дня</p>
        <p>Iphonese with swiper</p>
      </div>
      {/* sportFitnes Cards */}
      <div className="w-[80%] m-auto border-red-500 border-solid border-[2px]">
        <p className="text-[23px] font-bold">Без смартфона ни дня</p>
        <p>Iphonese with swiper</p>
      </div>
      {/* Обогреватели */}
      <div className="w-[80%] m-auto border-red-500 border-solid border-[2px]">
        <p className="text-[23px] font-bold">Без смартфона ни дня</p>
        <p>Iphonese with swiper</p>
      </div>
      {/*Игровые приставки */}
      <div className="w-[80%] m-auto border-red-500 border-solid border-[2px]">
        <p className="text-[23px] font-bold">Без смартфона ни дня</p>
        <p>Iphonese with swiper</p>
      </div>
      {/*Электрочайники и термопоты */}
      <div className="w-[80%] m-auto border-red-500 border-solid border-[2px]">
        <p className="text-[23px] font-bold">Без смартфона ни дня</p>
        <p>Iphonese with swiper</p>
      </div>
      {/*Стиральные машины */}
      <div className="w-[80%] m-auto border-red-500 border-solid border-[2px]">
        <p className="text-[23px] font-bold">Без смартфона ни дня</p>
        <p>Iphonese with swiper</p>
      </div>
      {/*Погрузитесь в кино */}
      <div className="w-[80%] m-auto border-red-500 border-solid border-[2px]">
        <p className="text-[23px] font-bold">Без смартфона ни дня</p>
        <p>Погрузитесь в кино</p>
      </div>
      {/*Аудио погружение
       */}
      <div className="w-[80%] m-auto border-red-500 border-solid border-[2px]">
        <p className="text-[23px] font-bold">Без смартфона ни дня</p>
        <p>Аудио погружение</p>
      </div>
      {/*Умные гаджеты*/}
      <div className="w-[80%] m-auto border-red-500 border-solid border-[2px]">
        <p className="text-[23px] font-bold">Без смартфона ни дня</p>
        <p>Умные гаджеты</p>
      </div>
      {/*Планшеты*/}
      <div className="w-[80%] m-auto border-red-500 border-solid border-[2px]">
        <p className="text-[23px] font-bold">Без смартфона ни дня</p>
        <p>Планшеты</p>
      </div>

    </div>
  );
};

export default Home;
