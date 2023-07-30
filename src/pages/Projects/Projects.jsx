import React from "react";
import { Card } from "../../components";
import Styles from "./projects.module.scss";
import ProjectList from "./ProjectList";

const Projects = () => {
  const List = ProjectList.map((project) => <Card {...project} />);

  return (
    <div className={Styles.bg}>
      <h1>PROJECTS</h1>
      <div className={Styles.projects}>{List}</div>
    </div>
  );
};

export default Projects;
