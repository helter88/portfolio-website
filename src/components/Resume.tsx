import React from 'react'
import NavigationButton from './buttons/NavigationButton'
import styles from './Resume.module.css'
const Resume = () => {
  return (
    <section className={styles.resume} id='resume'>
      <div className={styles['text-box']}>
      <h2 className={styles['heading-secondary']}>RESUME</h2>
      <p className={styles.description}>In order to get more information about me:</p>
      </div>
      <NavigationButton text='Display CV' zooming= {true}/>

    </section>
  )
}

export default Resume
