import React from "react";
// @ts-ignore
import styles from "./Experience.module.css";
import { getImageUrl } from "../../Utils/utils";
import Background from "../Background/Background";

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <Background color={757474} display={"none"} zIndex={0} />
      <div className={styles.titleSection}>
        <span>Experience</span>
      </div>
      <div className={styles.content}>
        <div className={styles.description}>
          <div className={styles.numberLine}>
            <span>01</span>
            <div className={styles.line}/>
          </div>
          <h3>Web development Intern</h3>
          <h4>Mar, 2024 - Present</h4>
          <p>Working on a porfolio website using react technology</p>
        </div>
        <img src={getImageUrl("Experience/afame.jpg")} alt="" />
      </div>
    </section>
  );
};

export default Experience;
