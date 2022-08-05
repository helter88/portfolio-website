import React from 'react'
import NavigationButton from './buttons/NavigationButton';
import styles from './Header.module.css';
import {ReactComponent as BottomArrows} from './../img/double-arrow-bottom-icon.svg';


const Header: React.FC = () => {
  return (
    <header className={styles.header}>
        <div className={styles['text-box']}>
            <h1 className={styles['heading-primary']}>
            <span className={styles['heading-primary-main']}>ARTUR HELTA</span>
            <span className={styles['heading-primary-sub']}>React & Typescript Developer</span>
        </h1>
        <NavigationButton text="Get in touch" />
        <div className={styles['arrow-container']}>
          <BottomArrows fill='#D3F4FF'/>
        </div>
        
        </div>
        
    </header>
  )
}

export default Header
