import React from 'react';
import styles from './ContactCard.module.css';
import {ReactComponent as Phone} from './../img/contact-icons/mail-icon.svg'

interface CardType{
    title: string;
    description: string
}

const ContactCard: React.FC<CardType> = ({title, description}) => {
  return (
    
    <div className={styles['contact-box']}>
        <div className={styles['contact-icon-box']}>
            <Phone fill= '#007F81'/>
        </div>
        <div className={styles['contact-text-box']}>
            <h6>{title}</h6>
            <p>{description}</p>
        </div>
        
    </div>
            
  )
}

export default ContactCard
