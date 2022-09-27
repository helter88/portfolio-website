import React from 'react'
import NavigationButton from './buttons/NavigationButton';
import styles from './Hero.module.css';
import {ReactComponent as BottomArrows} from './../img/double-arrow-bottom-icon.svg';
import Scroll from 'react-scroll';



const Hero: React.FC = () => {

  let scroller = Scroll.scroller;
  const onScrollToContact = () =>{
    scroller.scrollTo('contact', {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -50,
    })
  };

  const onSrcollDown = () =>{
    scroller.scrollTo('portfolio', {
      duration: 1000,
      delay: 100,
      smooth: true,
    })
  };
  

  return (
    <section className={styles.hero} id='hero'>
        <div className={styles['hero-content-main']}>
            <h1 className={styles['heading-primary']}>
            <span className={styles['heading-primary-main']}>ARTUR HELTA</span>
            <span className={styles['heading-primary-sub']}>React & Typescript Developer</span>
        </h1>
        
        </div>
          <NavigationButton text="Get in touch" clickHandler={onScrollToContact} />
        <div className={styles['arrow-container']} onClick={onSrcollDown}>
          <div className={styles['arrow-dimentions']}>
          <BottomArrows arial-label='scroll down' fill='#D3F4FF' />
        
        </div>
        </div>
        
        
    </section>
  )
}

export default Hero;
