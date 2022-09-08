import React from 'react'
import PortfolioCard from './cards/PorftolioCard'
import styles from './Portfolio.module.css';
import { PortfolioCardData } from '../PortfolioCardData';


const PortfolioList = PortfolioCardData.map(({title, logo, description, tools}) =>
   (<PortfolioCard {...{title, logo, description, tools, key: title}}/>))

const Portfolio = () => {
  return (
    <section className={styles.portfolio} id='portfolio'>
        <div className={styles['text-box']}><h2 className={styles['heading-secondary']}>PORTFOLIO</h2></div>
        <div className={styles['card-container']}>
            {PortfolioList}
        </div>
        
    </section>
  )
}

export default Portfolio
