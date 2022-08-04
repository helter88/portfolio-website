import React from 'react'
import styles from './NavigationButton.module.css';

interface NavigationProps {
    text: string;
}

const NavigationButton: React.FC<NavigationProps> = ({text}) => {
  return (
        <div className={styles['btn-container']}>
          <a className={styles['nav-btn']}>
      {text}
    </a>    
        </div>
      
    
  )
}

export default NavigationButton
