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
        <li>Home</li>
        <li>Portfolio</li>
        <li>Resume</li>
        <li>Contact</li>
        </ul>
        
      </div>
    </div>
  )
}

export default Navigation
