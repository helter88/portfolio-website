import React from 'react'
import NavigationButton from './buttons/NavigationButton';
import styles from './Hero.module.css';
import {ReactComponent as BottomArrows} from './../img/double-arrow-bottom-icon.svg';
import Scroll from 'react-scroll';



const Header: React.FC = () => {

  const scrollToContact = () =>{
    let scroller = Scroll.scroller;
    scroller.scrollTo('contact', {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -50,
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
          <NavigationButton text="Get in touch" clickHandler={scrollToContact} />
        <div className={styles['arrow-container']}>
          <div className={styles['arrow-dimentions']}>
          <BottomArrows fill='#D3F4FF'/>
        
        </div>
        </div>
        
        
    </section>
  )
}

export default Header
