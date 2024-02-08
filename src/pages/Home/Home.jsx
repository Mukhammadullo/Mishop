import React, { useEffect, useRef, useState } from "react";
import { getCategory, getProducts } from "../../api/Home/home";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Button from "@mui/material/Button";
import Slider2 from "../../components/Slider2";
import { useDispatch, useSelector } from "react-redux";
import { dark } from "@mui/material/styles/createPalette";


const Home = () => {
  // Slider2
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;


  
  const dispatch = useDispatch();
  const category = useSelector((store) => store.Home.categories);
  const products = useSelector((store) => store.Home.products);
 

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getProducts())  
  }, [dispatch]);

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

<div>

</div>

      {/* Popular category */}
      <div className="my-8 py-[2%] md:w-[80%] mob:w-[95%] m-auto rounded-xl shadow-xl">
        <p className="text-[23px] ml-8 font-bold">Популярные категории</p>
        {/* cards */}
        <div className=" w-[100%] py-8 ">
          <div className="flex flex-wrap mx-[40px] text-center justify-evenly py-3">
            {/* categoryGet */}
               {category.map((e) => {
                if (e.categoryImage != null && e.categoryImage != "") {
                  return (
                    <>
                      <di
                        v
                        key={e.id}
                        className="flex flex-col items-center w-[150px] gap-[10px] hover:text-[#5392c9] font-bold "
                      >
                        <div className="bg-[#d0e4dc55] w-[150px] overflow-hidden flex items-center justify-center h-[150px] rounded-[50%]">
                          <img
                            src={`${import.meta.env.VITE_APP_FILES_URL}${
                              e.categoryImage
                            }`}
                          />
                        </div>
                        <h1 className="text-center">{e.categoryName}</h1>
                      </di>
                    </>
                  );
                }
              })}
            
          </div>
        </div>
      </div>

      {/*Discounts_Slider2______________________________________________________*/}
      {/* <Slider2
        title={"Самые горячие скидки"}
        suptitle={"-39%"}
        price={"1150 $."}
        name={"Телевизор Yasin-Smart32, 32дюйм."}
      ></Slider2> */}


<div className="w-[80%] py-8 my-8 shadow-lg m-auto rounded-[8px]">
  <div className="flex justify-between">
  {products.products?.map((e)=>{
    return (
      <div>{e.productName}</div>
    )
  })}
  </div>

</div>

    </div>
  );
};

export default Home;
