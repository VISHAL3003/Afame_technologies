import React from "react";
// @ts-ignore
import styles from "./Home.module.css";
import { scrollFunction } from "../../Utils/utils";


const Home = () => {
  return (
    <section className={styles.container} id="home">
      <div className={styles.topContainer}>
        <div className={styles.animation}>
          <p className={styles.title}>Welcome</p>
          <p className={styles.title}>I'm Vishal</p>
        </div>
        <div className={styles.subTitle}>
          <p>
            Software - <span style={{ fontStyle: "italic" }}>Engineer</span>
          </p>
        </div>
      </div>
      <div className={styles.bottomContainer} onClick={() => {scrollFunction("works")}}>
          <span>WORKS</span>
          <div className={styles.arrow} />
      </div>
    </section>
  );
};

export default Home;
