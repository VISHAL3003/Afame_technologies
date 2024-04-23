import React, { useState } from "react";
// @ts-ignore
import styles from "./Footer.module.css";
import NorthIcon from "@mui/icons-material/North";
import { scrollFunction } from "../../Utils/utils";

const Footer = () => {
  
  return (
    <footer className={styles.footer}>
      <div className={styles.leftSection}>
        <h1>Feel free to reach out!</h1>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.contact}>
          <h2>Contact</h2>
          <h3>+91 8310755387</h3>
          <a href="mailto: vishalvarun27@gmail.com">
            <h4>vishalvarun27@gmail.com</h4>
          </a>
        </div>
        <div className={styles.social}>
          <h2>Social</h2>
          <ul>
            <a href="https://www.linkedin.com/in/vishal-varun-729698249/">
              <li>LinkedIn</li>
            </a>
            <a href="https://github.com/VISHAL3003">
              <li>GitHub</li>
            </a>
            <a href="https://www.instagram.com/vishals_121/">
              <li>Instagram</li>
            </a>
          </ul>
        </div>
        <div className={styles.arrow} onClick={() => {scrollFunction("top")}}>
            <NorthIcon fontSize="medium" sx={{ cursor: "pointer" }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
