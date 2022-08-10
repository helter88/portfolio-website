import React from 'react'
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles['text-box']}><h2 className={styles['heading-secondary']}>CONTACT</h2></div>
      <div className={styles['contact-container']}>
        <div className={styles['first-column']}>Fist column</div>
        <div className={styles['second-column']}>Second column</div>
      </div>
    </section>

  )
}

export default Contact
