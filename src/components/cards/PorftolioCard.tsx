import React from 'react'
import styles from './PortfolioCard.module.css';
import { ReactComponent as Github} from './../../img/card-icons/github-icon.svg';

import icons, {IconsType} from './PortfolioCardIcons'

export interface PortfolioCardProps {
  title: string;
  logo: keyof IconsType;
  description: string;
  tools: string[];

}

const PortfolioCard: React.FC<PortfolioCardProps> = ({title, description, tools, logo}) => {

  const Logo = icons[logo];

  return (
    <div className={styles.card}>
      <div className={styles['logo-box']}>
        <div className={styles['logo-dimentions']}>
          <Logo className={styles.logo}/>
        </div>
        
      </div>
        <h3 className={styles['title']}>{title}</h3>
        <h6 className={styles['description']}>{description}</h6>
        <div className={styles['tech-list-box']}>
          {tools.map(tool => <p key={Math.random()}>{tool}</p>)}
        </div>
        <div className={styles['github-box']}>
          <div className={styles['github-dimentions']}>
          <Github aria-label='Link to GitHub' width='100%' />
        </div>
        </div>
        
        
      
    </div>
  )
}

export default PortfolioCard
