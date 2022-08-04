import React from 'react'
import NavigationButton from './buttons/NavigationButton';
import styles from './Header.module.css';


const Header: React.FC = () => {
  return (
    <header className={styles.header}>
        <div className={styles['text-box']}>
            <h1 className={styles['heading-primary']}>
            <span className={styles['heading-primary-main']}>ARTUR HELTA</span>
            <span className={styles['heading-primary-sub']}>React & Typescript Developer</span>
        </h1>
        <NavigationButton text="Get in touch" />
        </div>
        
    </header>
  )
}

export default Header
