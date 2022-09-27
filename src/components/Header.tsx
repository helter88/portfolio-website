import React from 'react'
import logo from './../img/Logo-AH.png';
import styles from './Header.module.css';
import {Link} from 'react-scroll';

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
        <li><Link activeClass={styles.active} to="hero" spy={true} smooth={true} className={styles['top-nav-bar']}>Home</Link></li>
        <li><Link activeClass={styles.active} to="portfolio" spy={true} smooth={true} className={styles['top-nav-bar']}>Portfolio</Link></li>
        <li><Link activeClass={styles.active} to="skills" spy={true} smooth={true} className={styles['top-nav-bar']}>Skills</Link></li>
        <li><Link activeClass={styles.active} to="resume" spy={true} smooth={true} className={styles['top-nav-bar']}>Resume</Link></li>
        <li><Link activeClass={styles.active} to="contact" spy={true} smooth={true} className={styles['top-nav-bar']}>Contact</Link></li>
        </ul>
        
      </div>
    </div>
  )
}

export default Header
