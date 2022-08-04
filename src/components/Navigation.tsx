import React from 'react'
import logo from './../img/Logo-AH.png';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <img src={logo} alt='logo' className={styles.logo} />
    </div>
  )
}

export default Navigation
