import React, { useRef } from 'react'
import SendButton from './buttons/SendButton';
import styles from './ContactForm.module.css';
import ContactFormRow from './ContactFormRow';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e:any) => {
        e.preventDefault();
        if (!form.current){
            return;
        }
        // console.log(process.env.REACT_APP_SERVICE_ID);
        // console.log(process.env.REACT_APP_TEMPLATE_ID);
        // console.log(process.env.REACT_APP_PUBLIC_KEY);


    
        emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_PUBLIC_KEY}`)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <form ref={form} onSubmit={sendEmail} className={styles['contact-form-box']}>
        <div className={styles['contact-form-row-container']}>
            <ContactFormRow name='Full_Name' id='fullName' />

        </div>
        <div className={styles['contact-form-row-container']}>
            <ContactFormRow name='Subject' id='subject' />

        </div>
        <div className={styles['contact-form-row-container']}>
            <ContactFormRow name='Email' id='email' />


        </div>
        <div className={styles.message}>
            <textarea id='message' placeholder="Write Message" name='message' />
        </div>
        <div className={styles['button-container']}>
            <SendButton text='Send' />
        </div>

      
    </form>
  )
}

export default ContactForm
