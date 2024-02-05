import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Button from "@mui/material/Button";

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
      <div className="w-[80%] m-auto h-[60vh] mt-[140px] shadow-2xl rounded-xl">
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
            <img src="src/assets/images/img5.webp" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Popular category */}
      <div className="my-8 py-[2%] w-[80%] m-auto rounded-xl shadow-2xl">
        <p className="text-[23px] ml-8 font-bold">Популярные категории</p>
        {/* cards */}
        <div className=" w-[100%] py-8  ">
          {/* CardsRow1 */}
          <div className="flex text-center justify-evenly py-3">
            <div className="w-[15%] flex flex-col items-center hover:text-[#5d91da] font-bold">
              <img
                src="src/assets/images/skidka.jpg"
                className="rounded-full w-[160px] h-[160px]"
                alt=""
              />
              <p>Скидки</p>
            </div>
            <div className="w-[15%] flex flex-col items-center hover:text-[#5d91da] font-bold">
              <img
                src="src/assets/images/card1.jpg"
                className="w-[160px] h-[160px] rounded-full"
                alt=""
              />
              <p>Смартфоны и планшеты</p>
            </div>
            <div className="w-[15%] flex flex-col items-center hover:text-[#5d91da] font-bold">
              <img
                src="src/assets/images/card2.png"
                className="rounded-full w-[160px] h-[160px]"
                alt=""
              />
              <p>Спортивное питание</p>
            </div>
            <div className="w-[15%] flex flex-col items-center hover:text-[#5d91da] font-bold">
              <img
                src="src/assets/images/card3.jpg"
                className="rounded-full w-[160px] h-[160px]"
                alt=""
              />
              <p>Телевизоры</p>
            </div>
            <div className="w-[15%] flex flex-col items-center hover:text-[#5d91da] font-bold">
              <img
                src="src/assets/images/card4.jpg"
                className="rounded-full w-[160px] h-[160px]"
                alt=""
              />
              <p>Бытовая техника</p>
            </div>
          </div>
          {/* CarsRow2 */}
          <div className="flex justify-evenly text-center  py-3">
            <div className="w-[15%] ml-3">
              <img
                src="src/assets/images/card5.jpg"
                alt=""
                className="rounded-full w-[160px] h-[160px]"
              />
              <p>Ноутбуки</p>
            </div>
            <div className="w-[15%] ml-3">
              <img
                src="src/assets/images/card6.jpg"
                alt=""
                className="rounded-full w-[160px] h-[160px]"
              />
              <p>Наушники</p>
            </div>
            <div className="w-[15%] ml-3">
              <img
                src="src/assets/images/card7.jpg"
                alt=""
                className="rounded-full w-[160px] h-[160px]"
              />
              <p>Книги</p>
            </div>
            <div className="w-[15%] ml-3">
              <img
                src="src/assets/images/card8.jpg"
                alt=""
                className="rounded-full w-[160px] h-[160px]"
              />
              <p>Строительство и ремонт</p>
            </div>
            <div className="w-[15%] ml-3">
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

      {/* Discounts_____________________________________________________________ */}
      <div className="w-[80%] py-[2%] m-auto border-red-500 border-solid border-[2px] mb-8 rounded-xl">
        <p className="text-[23px] ml-8 font-bold">Самые горячие скидки</p>

        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="src/assets/images/test.jpg" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Телевизор Yasin-Smart32, 32дюйм.Телевизор Yasin-Smart32, 32дюйм.
            </p>
            <Button variant="contained">Contained</Button>
          </SwiperSlide>

          <SwiperSlide>
            <img src="src/assets/images/test.jpg" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Телевизор Yasin-Smart32, 32дюйм.Телевизор Yasin-Smart32, 32дюйм.
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test.jpg" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Телевизор Yasin-Smart32, 32дюйм.Телевизор Yasin-Smart32, 32дюйм.
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test.jpg" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Телевизор Yasin-Smart32, 32дюйм.Телевизор Yasin-Smart32, 32дюйм.
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test.jpg" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Телевизор Yasin-Smart32, 32дюйм.Телевизор Yasin-Smart32, 32дюйм.
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test.jpg" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Телевизор Yasin-Smart32, 32дюйм.Телевизор Yasin-Smart32, 32дюйм.
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Phones__________________________________________________________________________ */}
      <div className="w-[80%] m-auto border-red-500 border-solid border-[2px] mb-8 rounded-xl">
        <p className="text-[23px] font-bold">Без смартфона ни дня</p>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="src/assets/images/test1.jpg" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>
            <Button variant="contained">Contained</Button>
          </SwiperSlide>

          <SwiperSlide>
            <img src="src/assets/images/test1.jpg" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test1.jpg" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test1.jpg" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test1.jpg" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>iPhone 15 Pro Max 256 GB (nano-SIM+nano-SIM), черный</p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test1.jpg" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Телевизор Yasin-Smart32, 32дюйм.Телевизор Yasin-Smart32, 32дюйм.
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Sport________________________________________________________________ */}
      <div className="w-[80%] m-auto border-red-500 border-solid border-[2px]">
        <p className="text-[23px] font-bold">Спортивное питание</p>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="src/assets/images/test2.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>Протеин GeneticLab Nutrition Whey Pro 2100 г, клубника</p>
            <Button variant="contained">Contained</Button>
          </SwiperSlide>

          <SwiperSlide>
            <img src="src/assets/images/test2.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>Протеин GeneticLab Nutrition Whey Pro 2100 г, клубника</p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test2.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>Протеин GeneticLab Nutrition Whey Pro 2100 г, клубника</p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test2.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>Протеин GeneticLab Nutrition Whey Pro 2100 г, клубника</p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test2.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>Протеин GeneticLab Nutrition Whey Pro 2100 г, клубника</p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test2.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Телевизор Yasin-Smart32, 32дюйм.Телевизор Yasin-Smart32, 32дюйм.
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* sportFitnes Cards_______________________________________________________ */}
      <div className="w-[80%] m-auto border-red-500 border-solid border-[2px]">
        <p className="text-[23px] font-bold">Абонементы в фитнес клубы</p>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="src/assets/images/test3.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>
            <Button variant="contained">Contained</Button>
          </SwiperSlide>

          <SwiperSlide>
            <img src="src/assets/images/test3.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test3.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test3.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test3.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test3.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Телевизор Yasin-Smart32, 32дюйм.Телевизор Yasin-Smart32, 32дюйм.
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
        </Swiper>
      </div>

      {/*Игровые приставки __________________________________________________________*/}
      <div className="w-[80%] m-auto border-red-500 border-solid border-[2px]">
        <p className="text-[23px] font-bold">Игровые приставки</p>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="src/assets/images/test4.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>
            <Button variant="contained">Contained</Button>
          </SwiperSlide>

          <SwiperSlide>
            <img src="src/assets/images/test4.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test4.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test4.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test4.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test4.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Телевизор Yasin-Smart32, 32дюйм.Телевизор Yasin-Smart32, 32дюйм.
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
        </Swiper>
      </div>

      {/*Стиральные машины___________________________________________________________________________*/}
      <div className="w-[80%] m-auto border-red-500 border-solid border-[2px]">
        <p className="text-[23px] font-bold">Стиральные машины</p>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="src/assets/images/test5.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>
            <Button variant="contained">Contained</Button>
          </SwiperSlide>

          <SwiperSlide>
            <img src="src/assets/images/test5.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test5.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test5.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test5.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test5.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Телевизор Yasin-Smart32, 32дюйм.Телевизор Yasin-Smart32, 32дюйм.
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
        </Swiper>
      </div>

      {/*Погрузитесь в кино___________________________________________________________*/}
      <div className="w-[80%] m-auto border-red-500 border-solid border-[2px]">
        <p className="text-[23px] font-bold">Погрузитесь в кино</p>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="src/assets/images/test6.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>
            <Button variant="contained">Contained</Button>
          </SwiperSlide>

          <SwiperSlide>
            <img src="src/assets/images/test6.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test6.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test6.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test6.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test6.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Телевизор Yasin-Smart32, 32дюйм.Телевизор Yasin-Smart32, 32дюйм.
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
        </Swiper>
      </div>
      {/*Умные гаджеты___________________________________________________________*/}
      <div className="w-[80%] m-auto border-red-500 border-solid border-[2px]">
        <p className="text-[23px] font-bold">Умные гаджеты</p>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="src/assets/images/test7.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>
            <Button variant="contained">Contained</Button>
          </SwiperSlide>

          <SwiperSlide>
            <img src="src/assets/images/test7.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test7.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test7.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test7.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test7.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Телевизор Yasin-Smart32, 32дюйм.Телевизор Yasin-Smart32, 32дюйм.
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
        </Swiper>
      </div>
      {/*Планшеты_______________________________________________________________*/}
      <div className="w-[80%] m-auto border-red-500 border-solid border-[2px]">
        <p className="text-[23px] font-bold">Планшеты</p>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="src/assets/images/test8.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>
            <Button variant="contained">Contained</Button>
          </SwiperSlide>

          <SwiperSlide>
            <img src="src/assets/images/test8.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test8.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test8.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test8.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2
              месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test8.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              Телевизор Yasin-Smart32, 32дюйм.Телевизор Yasin-Smart32, 32дюйм.
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
