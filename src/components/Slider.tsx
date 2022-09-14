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

const logoGroup = skillLogos.map(({title, url}) => {
  console.log(url);
  return(
     <SwiperSlide className={styles.slide}>
    <div className={'icon-container'}>
        <div className={styles['icon-box']}><img src={url} className={styles.icon} alt={title}/></div>
          <p className={styles['icon-description']}>{title}</p>  
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
         {logoGroup}
            
      </Swiper>
  )
}

export default Slider
