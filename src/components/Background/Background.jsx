import React from "react";
// @ts-ignore
import styles from "./Background.module.css";

const Background = ({color,display,zIndex=0}) => {
  return (
    <>
      <div className={styles.background} style={{zIndex: zIndex}}>
        <div className={styles.backgroundLines} style={{borderColor: `#${color}`, zIndex:zIndex}}/>
        <div className={styles.backgroundLines} style={{borderColor: `#${color}`, zIndex:zIndex}}/>
        <div className={styles.backgroundLines} style={{borderColor: `#${color}`, zIndex:zIndex}}/>
        <div className={styles.backgroundLines} style={{borderColor: `#${color}`, zIndex:zIndex}}/>
        <div className={styles.backgroundLines} style={{borderColor: `#${color}`, zIndex:zIndex}}/>
        <div className={styles.backgroundLines} style={{borderColor: `#${color}`, zIndex:zIndex}}/>
        <div className={styles.backgroundLines} style={{borderColor: `#${color}`, zIndex:zIndex}}/>
      </div>
      <div className={styles.logo} style={{display: display}}>
        <h1>VS</h1>
      </div>
    </>
  );
};

export default Background;
