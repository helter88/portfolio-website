import NavigationButton from '../buttons/NavigationButton';
import styles from './Resume.module.css';
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const navigate = useNavigate()

  const displayCV = () => navigate('/cv');

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
