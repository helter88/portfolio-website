import React from 'react';
import styles from './ContactCard.module.css';
import {ReactComponent as Email} from './../img/contact-icons/mail-icon.svg'
import {ReactComponent as LinkedIn} from './../img/contact-icons/linkedin-icon.svg'
import {ReactComponent as Phone} from './../img/contact-icons/phone-icon.svg'
import {ReactComponent as Github} from './../img/contact-icons/github-icon.svg'

interface IconsType {
  Email: typeof Email,
  LinkedIn: typeof LinkedIn,
  Phone: typeof Phone,
  Github: typeof Github
}
interface CardType{
  title: string;
  description: string;
  icon: keyof IconsType;
  clickHandler?: () => void;
}

const iconContainer: IconsType = {
  Email,
  LinkedIn,
  Phone,
  Github

}


const ContactCard: React.FC<CardType> = ({title, description, icon, clickHandler}) => {
  const Icon = iconContainer[icon];
  return (
    
    <div className={styles['contact-box']}>
        <div className={styles['contact-icon-box']} onClick={clickHandler}>
            <Icon fill='#007F81' width="100%" height="100%"/>
        </div>
        <div className={styles['contact-text-box']}>
            <h6>{title}</h6>
            <a onClick={clickHandler}>{description}</a>
        </div>
        
    </div>
            
  )
}

export default ContactCard
