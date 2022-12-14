import React from "react";
import styles from "./SendButton.module.css";
import { ReactComponent as Send } from "./../../img/contact-icons/send-icon.svg";

interface SendButtonType {
  text: string;
}

const SendButton: React.FC<SendButtonType> = ({ text }) => {
  return (
    <>
      <button className={styles.button} type="submit">
        <div className={styles["text-button"]}>{text}</div>
        <div className={styles["icon-container"]}>
          <Send fill="#D3F4FF" width="100%" />
        </div>
      </button>
    </>
  );
};

export default SendButton;
