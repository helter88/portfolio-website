import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Slider.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";
import skillLogos from "./SliderLogos";

import useWindowWidth from "../../hooks/useWindowWidth";
import {
  numberSlides,
  spaceBetweenValue,
  implementNavigation,
  implementPagination,
} from "../../utils/swiper-responsive-options";

const logoGroup = skillLogos.map(({ title, url }) => {
  return (
    <SwiperSlide key={title} className={styles.slide}>
      <div className={"icon-container"}>
        <div className={styles["icon-box"]}>
          <img src={url} className={styles.icon} alt={title} />
        </div>
        <p className={styles["icon-description"]}>{title}</p>
      </div>
    </SwiperSlide>
  );
});

const Slider: React.FC = () => {
  const width = useWindowWidth();

  return (
    <Swiper
      navigation={implementNavigation(width)}
      autoplay={{ delay: 800 }}
      slidesPerView={numberSlides(width)}
      spaceBetween={spaceBetweenValue(width)}
      pagination={implementPagination(width)}
      modules={[Navigation, Pagination, Autoplay]}
      className={styles.swiper}
    >
      {logoGroup}
    </Swiper>
  );
};

export default Slider;
