import React from 'react'
import NavigationButton from './buttons/NavigationButton';
import styles from './Hero.module.css';
import {ReactComponent as BottomArrows} from './../img/double-arrow-bottom-icon.svg';


const Header: React.FC = () => {
  return (
    <section className={styles.hero} id='hero'>
        <div className={styles['hero-content-main']}>
            <h1 className={styles['heading-primary']}>
            <span className={styles['heading-primary-main']}>ARTUR HELTA</span>
            <span className={styles['heading-primary-sub']}>React & Typescript Developer</span>
        </h1>
        
        </div>
          <NavigationButton text="Get in touch" />
        <div className={styles['arrow-container']}>
          <div className={styles['arrow-dimentions']}>
          <BottomArrows fill='#D3F4FF'/>
        
        </div>
        </div>
        
        
    </section>
  )
}

export default Header
