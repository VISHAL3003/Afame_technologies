import React from "react";
import Background from "../Background/Background";
// @ts-ignore
import styles from "./About.module.css";
import { getImageUrl } from "../../Utils/utils";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <Background color={636363} display={"none"} zIndex={0} />
      <div className={styles.content}>
        <div className={styles.titleSection}>
          <span>About</span>
          <h1>Some More Info</h1>
        </div>
        <div className={styles.description}>
          <p>
            I am a programmer from India. I'm am driven by a passion for
            innovation, I thrive on transforming ideas into tangible,
            user-centric solutions.
          </p>
        </div>
        <img src={getImageUrl("About/background-blue.jpg")} alt="" />
      </div>
      <div className={styles.backgroundShapes}>
        <h1 className={styles.v}>V</h1>
        <div className={styles.slash}/>
        <h1 className={styles.s}>S</h1>
      </div>
    </section>
  );
};

export default About;
