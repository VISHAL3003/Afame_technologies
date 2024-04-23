import React from "react";
import Background from "../Background/Background";
// @ts-ignore
import styles from "./About2.module.css";

const About2 = () => {
  return (
    <section className={styles.container}>
      <Background color={787777} display={"none"} zIndex={0} />
      <div className={styles.content}>
        <div className={styles.titleSection}>
          <span>Education</span>
        </div>
        <div className={styles.description}>
          <div className={styles.edu1}>
            <div className={styles.number}>
              <span>01</span>
              <div className={styles.line} />
            </div>
            <h3>Bachelor of Engineering</h3>
            <h4>
              Information Science And Engineering (CGPA:7.74) Jun
              2023 | New Horizon College of Engineering, Bangalore
            </h4>
          </div>
          <div className={styles.edu2}>
            <div className={styles.number}>
              <span>02</span>
              <div className={styles.line} />
            </div>
            <h3>SENIOR SECONDARY (XII)</h3>
            <h4>PCMC (CGPA:7)</h4>
            <h4>Jun 2019 | Air Force School, Bangalore</h4>
          </div>
          <div className={styles.edu3}>
            <div className={styles.number}>
              <span>03</span>
              <div className={styles.line} />
            </div>
            <h3>SECONDARY (X)</h3>
            <h4>CGPA:8.2</h4>
            <h4>Jun 2017 | Air Force School, Bangalore</h4>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About2;
