import React, { useState } from 'react'
import logo from './../img/Logo-AH.png';
import styles from './Header.module.css';
import {Link} from 'react-scroll';
import { ReactComponent as Hamburger } from './../img/hamburger-icon.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const toogleHome= () =>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  return (
    <div className={styles.header}>
        <div className={styles['image-container']}>
          <img src={logo} alt='logo' className={styles.logo} onClick={toogleHome} />  
        </div>
      
      <div className={`${styles['nav-container']} ${isOpen && styles.active}`}>
        <ul>
        <li><Link activeClass={styles.active} to="hero" spy={true} 
        smooth={true} className={styles['top-nav-bar']} onClick={toggleOpen}>Home</Link></li>
        <li><Link activeClass={styles.active} to="portfolio" spy={true}
         smooth={true} className={styles['top-nav-bar']} onClick={toggleOpen}>Portfolio</Link></li>
        <li><Link activeClass={styles.active} to="skills" spy={true}
         smooth={true} className={styles['top-nav-bar']} onClick={toggleOpen}>Skills</Link></li>
        <li><Link activeClass={styles.active} to="resume" spy={true}
         smooth={true} className={styles['top-nav-bar']} onClick={toggleOpen}>Resume</Link></li>
        <li><Link activeClass={styles.active} to="contact" spy={true}
         smooth={true} className={styles['top-nav-bar']} onClick={toggleOpen}>Contact</Link></li>
        </ul>
        
      </div>
      <div className={styles['hamburger-container']} onClick={toggleOpen} ><Hamburger /></div>
    </div>
  )
}

export default Header
