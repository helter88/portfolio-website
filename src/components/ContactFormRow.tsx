import React from 'react'
import styles from './ContactFormRow.module.css';

interface ContactFormRowType {
    name: string;
    id: string
}

const ContactFormRow: React.FC<ContactFormRowType> = ({name, id}) => {
  return (
    <div className={styles.container}>
        <label htmlFor={id} >{name}</label>
        <input type='text' name={id}  id={id}/>
    </div>
  )
}

export default ContactFormRow
