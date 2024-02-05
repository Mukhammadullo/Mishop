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

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

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

      {/* Discounts_____________________________________________________________ */}
      <div className="w-[80%] m-auto border-red-500 border-solid border-[2px] mb-8 rounded-xl">
        <p className="text-[23px] font-bold">Самые горячие скидки</p>

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
            Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2 месяца заморозки в подарок
            </p>
            <Button variant="contained">Contained</Button>
          </SwiperSlide>

          <SwiperSlide>
            <img src="src/assets/images/test1.jpg" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
            Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2 месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test1.jpg" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
            Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2 месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test1.jpg" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
            Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2 месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test1.jpg" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
              iPhone 15 Pro Max 256 GB (nano-SIM+nano-SIM), черный
            </p>

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
            <p>
            Протеин GeneticLab Nutrition Whey Pro 2100 г, клубника
            </p>
            <Button variant="contained">Contained</Button>
          </SwiperSlide>

          <SwiperSlide>
            <img src="src/assets/images/test2.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
            Протеин GeneticLab Nutrition Whey Pro 2100 г, клубника
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test2.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
            Протеин GeneticLab Nutrition Whey Pro 2100 г, клубника
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test2.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
            Протеин GeneticLab Nutrition Whey Pro 2100 г, клубника
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test2.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
            Протеин GeneticLab Nutrition Whey Pro 2100 г, клубника
            </p>

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
            Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2 месяца заморозки в подарок
            </p>
            <Button variant="contained">Contained</Button>
          </SwiperSlide>

          <SwiperSlide>
            <img src="src/assets/images/test3.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
            Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2 месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test3.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
            Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2 месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test3.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
            Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2 месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test3.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
            Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2 месяца заморозки в подарок
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
            Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2 месяца заморозки в подарок
            </p>
            <Button variant="contained">Contained</Button>
          </SwiperSlide>

          <SwiperSlide>
            <img src="src/assets/images/test4.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
            Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2 месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test4.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
            Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2 месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test4.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
            Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2 месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test4.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
            Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2 месяца заморозки в подарок
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
            Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2 месяца заморозки в подарок
            </p>
            <Button variant="contained">Contained</Button>
          </SwiperSlide>

          <SwiperSlide>
            <img src="src/assets/images/test5.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
            Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2 месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test5.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
            Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2 месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test5.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
            Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2 месяца заморозки в подарок
            </p>

            <Button variant="contained">Contained</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/test5.webp" alt="" />
            <p className="bg-[red]">-39%</p>
            <p>-39% 1 154 c. 1 900 с</p>
            <p>
            Абонемент в фитнес клуб X-FIT на 1 год безлимитный для мужчин + 2 месяца заморозки в подарок
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
      {/*Погрузитесь в кино */}
      <div className="w-[80%] m-auto border-red-500 border-solid border-[2px]">
        <p className="text-[23px] font-bold">Без смартфона ни дня</p>
        <p>Погрузитесь в кино</p>
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
