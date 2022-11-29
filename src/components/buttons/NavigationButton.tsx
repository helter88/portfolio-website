import React from "react";
import styles from "./NavigationButton.module.css";

interface NavigationProps {
  text: string;
  zooming?: true | false;
  clickHandler: () => void;
}

const NavigationButton: React.FC<NavigationProps> = ({
  text,
  zooming,
  clickHandler,
}) => {
  const addZoom = zooming ? `${styles.zooming}` : "";
  return (
    <div className={styles["btn-container"]}>
      <a className={`${styles["nav-btn"]} ${addZoom} `} onClick={clickHandler}>
        {text}
      </a>
    </div>
  );
};

NavigationButton.defaultProps = {
  zooming: false,
};

export default NavigationButton;
