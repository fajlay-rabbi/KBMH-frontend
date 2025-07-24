"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ComSlider = ({ components, width, reverse=false }) => {
  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={10}
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false ,reverseDirection: reverse}}
      loop={true}
      className="mySwiper"
    >
      {components.map((Component, idx) => (
        <SwiperSlide key={idx} style={{
            width: width,
            flexShrink: 0,
          }}>
          {Component}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ComSlider;
