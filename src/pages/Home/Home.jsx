import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Button from "@mui/material/Button";
import Slider2 from "../../components/Slider2";

const Home = () => {
  // Slider2
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  // const prepend2 = () => {
  //   swiperRef.prependSlide([
  //     '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
  //     '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
  //   ]);
  // };

  // const prepend = () => {
  //   swiperRef.prependSlide(
  //     '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
  //   );
  // };

  // const append = () => {
  //   swiperRef.appendSlide(
  //     '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
  //   );
  // };

  // const append2 = () => {
  //   swiperRef.appendSlide([
  //     '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
  //     '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
  //   ]);
  // };

  return (
    <div>
      <div className="md:w-[80%] mob:w-[95%] mob:mt-[180px] m-auto h-[60vh] mt-[140px] shadow-2xl rounded-xl">
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
            <img src="src/assets/images/img3.avif" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="src/assets/images/te3.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/swiper2.webp" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="src/assets/images/swiper3.jpg" alt="" />
          </SwiperSlide>

        </Swiper>
      </div>

      {/* Popular category */}
      <div className="my-8 py-[2%] md:w-[80%] mob:w-[95%] m-auto rounded-xl shadow-xl">
        <p className="text-[23px] ml-8 font-bold">Популярные категории</p>
        {/* cards */}
        <div className=" w-[100%] py-8 ">
          {/* CardsRow1 */}
          <div className="md:flex text-center justify-evenly py-3">
            <div className="md:w-[15%] flex flex-col items-center hover:text-[#5d91da] font-bold">
              <img
                src="src/assets/images/skidka.jpg"
                className="rounded-full md:w-[160px] md:h-[160px]"
                alt=""
              />
              <p>Скидки</p>
            </div>
            <div className="md:w-[15%] flex flex-col items-center hover:text-[#5d91da] font-bold">
              <img
                src="src/assets/images/card1.jpg"
                className="w-[160px] h-[160px] rounded-full"
                alt=""
              />
              <p>Смартфоны и планшеты</p>
            </div>
            <div className="md:w-[15%] flex flex-col items-center hover:text-[#5d91da] font-bold">
              <img
                src="src/assets/images/card2.png"
                className="rounded-full w-[160px] h-[160px]"
                alt=""
              />
              <p>Спортивное питание</p>
            </div>
            <div className="md:w-[15%] flex flex-col items-center hover:text-[#5d91da] font-bold">
              <img
                src="src/assets/images/card3.jpg"
                className="rounded-full w-[160px] h-[160px]"
                alt=""
              />
              <p>Телевизоры</p>
            </div>
            <div className="md:w-[15%] flex flex-col items-center hover:text-[#5d91da] font-bold">
              <img
                src="src/assets/images/card4.jpg"
                className="rounded-full w-[160px] h-[160px]"
                alt=""
              />
              <p>Бытовая техника</p>
            </div>
          </div>
          {/* CarsRow2 */}
          <div className="md:flex justify-evenly text-center py-3">
            <div className="md:w-[15%] flex flex-col items-center hover:text-[#5d91da] font-bold">
              <img
                src="src/assets/images/card5.jpg"
                alt=""
                className="rounded-full w-[160px] h-[160px]"
              />
              <p>Ноутбуки</p>
            </div>
            <div className="md:w-[15%] flex flex-col items-center  hover:text-[#5d91da] font-bold">
              <img
                src="src/assets/images/card6.jpg"
                alt=""
                className="rounded-full w-[160px] h-[160px]"
              />
              <p>Наушники</p>
            </div>
            <div className="md:w-[15%] flex flex-col items-center hover:text-[#5d91da] font-bold">
              <img
                src="src/assets/images/card7.jpg"
                alt=""
                className="rounded-full w-[160px] h-[160px]"
              />
              <p>Книги</p>
            </div>
            <div className="md:w-[15%] flex flex-col items-center hover:text-[#5d91da] font-bold">
              <img
                src="src/assets/images/card8.jpg"
                alt=""
                className="rounded-full w-[160px] h-[160px]"
              />
              <p>Строительство и ремонт</p>
            </div>
            <div className="md:w-[15%] flex flex-col items-center hover:text-[#5d91da] font-bold">
              <img
                src="src/assets/images/card9.png"
                alt=""
                className="rounded-full w-[160px] h-[160px]"
              />
              <p>Абонементы в фитнес-клубы</p>
            </div>
          </div>
        </div>
      </div>

      {/*Discounts_Slider2______________________________________________________*/}
      <Slider2 title={"Самые горячие скидки"} suptitle={"-39%"} price={"1150 $."} name={"Телевизор Yasin-Smart32, 32дюйм."}></Slider2>

      {/* Phones__________________________________________________________________________ */}
      <Slider2 title={"Смартфоны и планшеты"} suptitle={"-39%"} price={"1150 $."} name={"Телевизор Yasin-Smart32, 32дюйм."}></Slider2>

      {/* Sport________________________________________________________________ */}
      <Slider2 title={"Спортивное питание"} suptitle={"-39%"} price={"1150 $."} name={"Телевизор Yasin-Smart32, 32дюйм."}></Slider2>

      {/* sportFitnes Cards_______________________________________________________ */}
      <Slider2 title={"Абонементы в фитнес клубы"} suptitle={"-39%"} price={"1150 $."} name={"Телевизор Yasin-Smart32, 32дюйм."}></Slider2>

      {/*Игровые приставки __________________________________________________________*/}
      <Slider2 title={"Игровые приставки"} suptitle={"-39%"} price={"1150 $."} name={"Телевизор Yasin-Smart32, 32дюйм."}></Slider2>

      {/*Стиральные машины___________________________________________________________________________*/}
      <Slider2 title={"Стиральные машины"} suptitle={"-39%"} price={"1150 $."} name={"Телевизор Yasin-Smart32, 32дюйм."}></Slider2>

      {/*Погрузитесь в кино___________________________________________________________*/}
      <Slider2 title={"Погрузитесь в кино"} suptitle={"-39%"} price={"1150 $."} name={"Телевизор Yasin-Smart32, 32дюйм."}></Slider2>

      {/*Умные гаджеты___________________________________________________________*/}
      <Slider2 title={"Умные гаджеты"} suptitle={"-39%"} price={"1150 $."} name={"Телевизор Yasin-Smart32, 32дюйм."}></Slider2>

      {/*Планшеты_______________________________________________________________*/}
      <Slider2 title={"Планшеты"} suptitle={"-39%"} price={"1150 $."} name={"Телевизор Yasin-Smart32, 32дюйм."}></Slider2>


    </div>
  );
};

export default Home;
