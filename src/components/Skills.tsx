import React from 'react'
import styles from './Skills.module.css';
import Slider from './Slider';

const Skills = () => {
  return (
    <section className={styles.skills}>
        <div className={styles['text-box']} >
          <h1> SKILLS</h1>  
        </div>
        <div className={styles['slider-container']}>
          <Slider />
        </div>
      
    </section>
  )
}

export default Skills
