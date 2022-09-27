import React from 'react'
import PortfolioCard from './cards/PorftolioCard'
import styles from './Portfolio.module.css';
import { PortfolioCardData } from '../PortfolioCardData';
import {Element} from 'react-scroll'


const PortfolioList = PortfolioCardData.map(({title, logo, description, tools}) =>
   (<PortfolioCard {...{title, logo, description, tools, key: title}}/>))

const Portfolio = () => {
  return (
    <section className={styles.portfolio} id='portfolio'>
      <Element name='portfolio'>
        <div className={styles['text-box']}><h2 className={styles['heading-secondary']}>PORTFOLIO</h2></div>
        <div className={styles['card-container']}>
            {PortfolioList}
        </div>
      </Element>
        
        
    </section>
  )
}

export default Portfolio
