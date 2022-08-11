import React from 'react'
import styles from './ContactForm.module.css';
import ContactFormRow from './ContactFormRow';

const ContactForm = () => {
  return (
    <form className={styles['contact-form-box']}>
        <ContactFormRow name='Full Name' id='fullName' />
        <ContactFormRow name='Subject' id='subject' />
        <ContactFormRow name='Email' id='email' />
        <div className={styles.message}>
            <textarea id='message' placeholder="Write Message" />
        </div>

      
    </form>
  )
}

export default ContactForm
