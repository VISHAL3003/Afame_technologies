import React, { useEffect } from "react";
// @ts-ignore
import styles from "./Works.module.css";
import projects from "../../Data/projects.json";
import { getImageUrl } from "../../Utils/utils";

const Works = () => {
  return (
    <section className={styles.container} id="works">
      {projects.map((project, id) => {
        return (
          <a href={project.source}>
            <div className={styles.projects} key={id}>
              <img src={getImageUrl(project.imageSrc)} alt="" />
              <span>{project.title}</span>
            </div>
          </a>
        );
      })}
    </section>
  );
};

export default Works;
