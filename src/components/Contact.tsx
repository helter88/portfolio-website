import React from 'react'
import styles from './Contact.module.css';
import ContactCard from './ContactCard';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles['text-box']}><h2 className={styles['heading-secondary']}>CONTACT</h2></div>
      <div className={styles['contact-container']}>
        <div className={styles['first-column']}>
          <ContactCard title='Phone' description='+48 729 614 129'/>
          <ContactCard title='Email' description='arturhelta@onet.pl'/>
          <ContactCard title='LinkedIn' description='Artur Helta'/>
          <ContactCard title='Github' description='helter88'/>
        

        </div>
        <div className={styles['second-column']}>Second column</div>
      </div>
    </section>

  )
}

export default Contact
