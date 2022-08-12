import React from 'react'
import logo from './../img/Logo-AH.png';
import styles from './Header.module.css';

const Header = () => {

  const toogleHome= () =>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  return (
    <div className={styles.header}>
        <div className={styles['image-container']}>
          <img src={logo} alt='logo' className={styles.logo} onClick={toogleHome} />  
        </div>
      
      <div className={styles['nav-container']}>
        <ul>
        <li><a className={styles['top-nav-bar']}>Home</a></li>
        <li><a className={styles['top-nav-bar']}>Portfolio</a></li>
        <li><a className={styles['top-nav-bar']}>Skills</a></li>
        <li><a className={styles['top-nav-bar']}>Resume</a></li>
        <li><a className={styles['top-nav-bar']}>Contact</a></li>
        </ul>
        
      </div>
    </div>
  )
}

export default Header
