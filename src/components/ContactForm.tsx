import React from 'react'
import SendButton from './buttons/SendButton';
import styles from './ContactForm.module.css';
import ContactFormRow from './ContactFormRow';

const ContactForm = () => {
  return (
    <form className={styles['contact-form-box']}>
        <div className={styles['contact-form-row-container']}>
            <ContactFormRow name='Full Name' id='fullName' />

        </div>
        <div className={styles['contact-form-row-container']}>
            <ContactFormRow name='Subject' id='subject' />

        </div>
        <div className={styles['contact-form-row-container']}>
            <ContactFormRow name='Email' id='email' />

        </div>
        <div className={styles.message}>
            <textarea id='message' placeholder="Write Message" />
        </div>
        <div className={styles['button-container']}>
            <SendButton text='Send' />
        </div>

      
    </form>
  )
}

export default ContactForm
