import React from "react";
import styles from "./AfterSendForm.module.css";

const AfterSendForm = () => {
  return (
    <div className={styles.box}>
      <h2>Thank You!</h2>
      <p>Your email was sent successfuly. Artur will get back to you soon.</p>
    </div>
  );
};

export default AfterSendForm;
