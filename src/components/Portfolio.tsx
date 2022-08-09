import React from 'react'
import PortfolioCard from './cards/PorftolioCard'
import styles from './Portfolio.module.css';
import { PortfolioCardData } from '../PortfolioCardData';


const PortfolioList = PortfolioCardData.map(proj => <PortfolioCard key={proj.title} title= {proj.title} icon={proj.logo} description ={proj.description} tools={proj.tools} />)

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
        <div className={styles['text-box']}><h2 className={styles['heading-secondary']}>PORTFOLIO</h2></div>
        <div className={styles['card-container']}>
            {PortfolioList}
        </div>
        
    </section>
  )
}

export default Portfolio
