
// @ts-ignore
import styles from "./App.module.css";
import Home from "./components/Home/Home";
import Works from "./components/Works/Works";
import Experience from "./components/Experience/Experience";
import Navbar from "./components/Navbar/Navbar";
import Background from "./components/Background/Background";
import React from "react";
import About from "./components/About/About";
import About2 from "./components/About2/About2";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.App}>
      <Background color={100000} display={"flex"} zIndex={0}/>
      <Navbar />
      <Home />
      <Works />
      <About />
      <About2 />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
