import React, { useContext, useState } from "react";
// @ts-ignore
import styles from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "../Menu/Menu";
import { LoginContext } from "../context/ContextProvider";


const Navbar = () => {
  const { display, setDisplay } = useContext(LoginContext);

  return (
    <nav className={styles.container} id="top">
      <div className={styles.leftSection}>
        {display ? (
          <MenuIcon
            fontSize="large"
            sx={{ cursor: "pointer" }}
            onClick={() => {
              setDisplay(() => {
                return !display
              });
            }}
          />
        ) : (
          <>
            <Menu />
          </>
        )}
      </div>
      <div className={styles.rightSection}>
        <a href="../../../Files/Vishal_S.pdf" download="Vishal_Resume.pdf">
          <button>Resume</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
