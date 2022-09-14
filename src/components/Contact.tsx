import React from 'react'
import styles from './Contact.module.css';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';


const Contact = () => {
  return (
    <section className={styles.contact} id='contact'>
      <div className={styles['text-box']}><h2 className={styles['heading-secondary']}>CONTACT</h2></div>
      <div className={styles['contact-container']}>
        <div className={styles['first-column']}>
          <ContactCard title='Phone' description='+48 729 614 129' icon='Phone'/>
          <ContactCard title='Email' description='arturhelta@onet.pl' icon='Email'/>
          <ContactCard title='LinkedIn' description='Artur Helta' icon='LinkedIn'/>
          <ContactCard title='Github' description='helter88' icon='Github'/>

        </div>
        <div className={styles['second-column']}>
          <ContactForm />
        </div>
      </div>
    </section>

  )
}

export default Contact
