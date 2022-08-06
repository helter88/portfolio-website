import React from 'react'
import PortfolioCard from './cards/PorftolioCard'
import styles from './Portfolio.module.css'

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
        <div className={styles['text-box']}><h2 className={styles['heading-secondary']}>PORTFOLIO</h2></div>
        <div className={styles['card-container']}>
            <PortfolioCard />
        </div>
        
    </section>
  )
}

export default Portfolio
