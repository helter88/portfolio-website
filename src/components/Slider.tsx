import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from './Slider.module.css';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";

const Slider = () => {
  return (
    <Swiper
        navigation={true}
        slidesPerView={2}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation,Pagination]}
        className={styles.swiper}
      >
         <SwiperSlide className={styles['swipe-slide']}>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
  )
}

export default Slider
