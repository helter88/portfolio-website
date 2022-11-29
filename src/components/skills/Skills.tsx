import React from "react";
import styles from "./Skills.module.css";
import Slider from "../slider/Slider";

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles["text-box"]}>
        <h1> SKILLS</h1>
      </div>
      <div className={styles["slider-container"]}>
        <Slider />
      </div>
    </section>
  );
};

export default Skills;
