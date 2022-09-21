import React from 'react'
import styles from './Contact.module.css';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';
import {Element} from 'react-scroll'


const Contact = () => {

  const emailClick= () => {
    window.location.href = "mailto:xyz@yourapplicationdomain.com";
  };
  const LinkedInClick= () => {
    window.location.href = 'https://pl.linkedin.com/in/arturhelta';
  };
  const GithHubClick= () => {
    window.location.href = 'https://github.com/helter88';
  };

  return (
    <section className={styles.contact} id='contact'>
      <Element name='contact'>
        <div className={styles['text-box']}><h2 className={styles['heading-secondary']}>CONTACT</h2></div>
        <div className={styles['contact-container']}>
          <div className={styles['first-column']}>
            <ContactCard title='Phone' description='+48 729 614 129' icon='Phone' />
            <ContactCard title='Email' description='arturhelta@onet.pl' icon='Email' clickHandler={emailClick}/>
            <ContactCard title='LinkedIn' description='Artur Helta' icon='LinkedIn' clickHandler={LinkedInClick}/>
            <ContactCard title='GitHub' description='helter88' icon='Github' clickHandler={GithHubClick}/>

          </div>
          <div className={styles['second-column']}>
            <ContactForm />
          </div>
        </div>
      </Element>
      
    </section>

  )
}

export default Contact
