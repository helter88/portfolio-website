import React from 'react'
import styles from './PortfolioCard.module.css';

const PortfolioCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles['logo-box']}>
        Logo
      </div>
      <div className={styles['title-card']}>
        title
      </div>
      
    </div>
  )
}

export default PortfolioCard
