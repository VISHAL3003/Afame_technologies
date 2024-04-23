import React, { useContext } from "react";
// @ts-ignore
import styles from "./Menu.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { LoginContext } from "../context/ContextProvider";
import Background from "../Background/Background";
import { scrollFunction } from "../../Utils/utils";

const Menu = () => {
  const { display, setDisplay } = useContext(LoginContext);
  return (
    <section className={styles.container} id="#menu">
      <Background color={414040} display={"none"} zIndex={-1} />
      <div className={styles.closeLogo}>
        <CloseIcon
          fontSize="large"
          sx={{ cursor: "pointer", color: "white" }}
          onClick={() => {
            setDisplay(!display);
          }}
        />
      </div>
      <div className={styles.content}>
        <div
          className={styles.leftContent}
          onClick={() => {
            setDisplay(!display);
            scrollFunction("experience");
          }}
        >
          <span className={styles.title}>Experience</span>

          <a
            href="#works"
            onClick={() => {
              setDisplay(!display);
            }}
          >
            <span className={styles.title}>works</span>
          </a>
          <ul className={styles.workList}>
            <li>Amazon Clone</li>
            <li>YouTube Clone</li>
            <li>SUDOKU GAME</li>
            <li>Blog Website</li>
          </ul>
        </div>
        <div className={styles.rightContent}>
          <a
            href="#about"
            onClick={() => {
              setDisplay(!display);
            }}
          >
            <span className={styles.title}>About</span>
          </a>
          <p>
            My name is Vishal S. I am a programmer. I'm am driven by a passion
            for innovation, I thrive on transforming ideas into tangible,
            user-centric solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
