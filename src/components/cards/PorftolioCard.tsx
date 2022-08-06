import React from 'react'
import styles from './PortfolioCard.module.css';
import { ReactComponent as Globe } from './../../img/card-icons/internet-icon.svg';

const PortfolioCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles['logo-box']}>
        <div className={styles['logo-dimentions']}>
          <Globe fill="#D3F4FF" width='100%'/>
        </div>
        
      </div>
        <h3 className={styles['title']}>Portfolio website</h3>
        <h6>It is current webside made to show programming skills in specific technologiest.</h6>
        <div className={styles['tech-list-box']}>
          <p>React</p>
          <p>Typescript</p>
          <p>CSS Modules Stylesheet</p>
        </div>
        
      
    </div>
  )
}

export default PortfolioCard
