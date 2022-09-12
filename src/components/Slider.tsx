import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from './Slider.module.css';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/autoplay';

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";
import { ReactComponent as Html} from './../img/skills-icons/html-icon.svg';
import skillLogos from "./SliderLogos";

const logoGroup = Object.keys(skillLogos).map(key => {
  let Logo = skillLogos[key];
  return(
     <SwiperSlide className={styles.slide}>
    <div className={'icon-container'}>
        <div className={styles['icon-box']}><Logo width='100%'/></div>
          <p className={styles['icon-description']}>HTML</p>  
    </div>
            
  </SwiperSlide>
  )
 
})


const Slider: React.FC = () => {
  
  return (
    <Swiper
        navigation={true}
        autoplay={{delay: 800}}
        slidesPerView={4}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation,Pagination, Autoplay]}
        className={styles.swiper}
      >
         <SwiperSlide className={styles.slide}>
            <div className={'icon-container'}>
              <div className={styles['icon-box']}><Html width='100%'/></div>
              <p className={styles['icon-description']}>HTML</p>  
            </div>
            
         </SwiperSlide>
        <SwiperSlide className={styles.slide}>Slide 2</SwiperSlide>
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
