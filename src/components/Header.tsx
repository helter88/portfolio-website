import React from 'react'
import logo from './../img/Logo-AH.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles['image-container']}>
          <img src={logo} alt='logo' className={styles.logo} />  
        </div>
      
      <div className={styles['nav-container']}>
        <ul>
        <li><a className={styles['top-nav-bar']}>Home</a></li>
        <li><a className={styles['top-nav-bar']}>Portfolio</a></li>
        <li><a className={styles['top-nav-bar']}>Resume</a></li>
        <li><a className={styles['top-nav-bar']}>Contact</a></li>
        </ul>
        
      </div>
    </div>
  )
}

export default Header
