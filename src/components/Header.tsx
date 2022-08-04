import React from 'react'
import styles from './Header.module.css';


const Header: React.FC = () => {
  return (
    <header className={styles.header}>
        <div className={styles['text-box']}>
            <h1 className={styles['heading-primary']}>
            <span className={styles['heading-primary-main']}>ARTUR HELTA</span>
            <span className={styles['heading-primary-sub']}>React & Typescript Developer</span>
        </h1>
        </div>
        
    </header>
  )
}

export default Header
