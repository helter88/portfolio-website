import React from 'react'
import styles from './ContactFormRow.module.css';

interface ContactFormRowType {
    name: string;
    id: string
}

const emailPattern = "[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$";

const ContactFormRow: React.FC<ContactFormRowType> = ({name, id}) => {
  const isEmail = name === "Email"
  const patternProp = isEmail ? { pattern: emailPattern } : {}
  return (
    <div className={styles.container}>
        <label htmlFor={id} >{name}</label>
        <input type='text' name={id}  id={id} required {...patternProp} />
    </div>
  )
}

export default ContactFormRow
