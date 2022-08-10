import React from 'react'
import styles from './Resume.module.css'
const Resume = () => {
  return (
    <section className={styles.resume}>
      <div className={styles['text-box']}>
      <h2 className={styles['heading-secondary']}>RESUME</h2>
      <p className={styles.description}>In order to get more information about me:</p>
      </div>
    </section>
  )
}

export default Resume
