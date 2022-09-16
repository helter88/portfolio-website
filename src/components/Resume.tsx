import React from 'react'
import NavigationButton from './buttons/NavigationButton'
import styles from './Resume.module.css'
import {Element} from 'react-scroll'

const Resume = () => {

  const displayCV = () => console.log('click from cv')

  return (
    <section className={styles.resume} id='resume'>
      <div className={styles['text-box']}>
      <h2 className={styles['heading-secondary']}>RESUME</h2>
      <p className={styles.description}>In order to get more information about me:</p>
      </div>
      <NavigationButton text='Display CV' zooming= {true} clickHandler={displayCV}/>
    </section>
  )
}

export default Resume
