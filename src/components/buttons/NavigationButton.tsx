import React from 'react'
import styles from './NavigationButton.module.css';

interface NavigationProps {
    text: string;
    zooming?: (true | false)
}


const NavigationButton: React.FC<NavigationProps> = ({text, zooming}) => {
  const addZoom = zooming ? `${styles.zooming}` :'';
  return (
        <div className={styles['btn-container']}>
          <a className={`${styles['nav-btn']} ${addZoom} `}>
      {text}
    </a>    
        </div>
      
    
  )
}

NavigationButton.defaultProps={
  zooming: false
}

export default NavigationButton
