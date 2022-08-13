import React from 'react'
import styles from './PortfolioCard.module.css';
import { ReactComponent as Github} from './../../img/card-icons/github-icon.svg';

import {Globe, Invoice, BloodPressure, RegisterForm, ToDoList, GetData} from './PortfolioCardIcons'

interface PortfolioCardProps {
  title: string;
  icon: string;
  description: string;
  tools: string[];

}

const PortfolioCard: React.FC<PortfolioCardProps> = ({title, description, tools, icon}) => {

  // poniższe chciałem wstawić ale nie działa
  const Logo = icon;

  return (
    <div className={styles.card}>
      <div className={styles['logo-box']}>
        <div className={styles['logo-dimentions']}>
          <Globe fill="#D3F4FF" width='100%'/>
        </div>
        
      </div>
        <h3 className={styles['title']}>{title}</h3>
        <h6 className={styles['description']}>{description}</h6>
        <div className={styles['tech-list-box']}>
          {tools.map(tool => <p key={Math.random()}>{tool}</p>)}
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
