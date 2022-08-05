import React from 'react'
import logo from './../img/Logo-AH.png';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={styles.navigation}>
        <div className={styles['image-container']}>
          <img src={logo} alt='logo' className={styles.logo} />  
        </div>
      
      <div className={styles['selection-nav-container']}>
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

export default Navigation
