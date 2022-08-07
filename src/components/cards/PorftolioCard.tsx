import React from 'react'
import styles from './PortfolioCard.module.css';
import { ReactComponent as Globe } from './../../img/card-icons/internet-icon.svg';
import { ReactComponent as Github} from './../../img/card-icons/github-icon.svg';

const PortfolioCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles['logo-box']}>
        <div className={styles['logo-dimentions']}>
          <Globe fill="#D3F4FF" width='100%'/>
        </div>
        
      </div>
        <h3 className={styles['title']}>Portfolio website</h3>
        <h6 className={styles['description']}>This website was made to present frontend skills by using modern framework, animations and own design.</h6>
        <div className={styles['tech-list-box']}>
          <p>React</p>
          <p>Typescript</p>
          <p>CSS Modules Stylesheet</p>
        </div>
        <div className={styles['github-box']}>
          <div className={styles['github-dimentions']}>
          <Github  width='100%' />
        </div>
        </div>
        
        
      
    </div>
  )
}

export default PortfolioCard
