import React from "react";
// import ProgressBar from "@ramonak/react-progress-bar";
import Styles from "./skills.module.scss";
import { SiJavascript, SiRedux, SiFirebase } from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaReact,
  FaSass,
  FaGitAlt,
  FaNode,
} from "react-icons/fa";

const Skills = () => {
  return (
    <div className={Styles.skillbody}>
      <h1>Skills</h1>

      <h2>Languages</h2>
      <div className={Styles.list}>
        <div className={Styles.div}>
          <div>
            <SiJavascript color="yellow" size="50px" />
            <p>JavaScript</p>
          </div>
        </div>
        <div className={Styles.div}>
          <div>
            <FaHtml5 size="50px" />
            <p>HTML</p>
          </div>
        </div>
        <div className={Styles.div}>
          <div>
            <FaCss3Alt size="50px" />
            <p>CSS</p>
          </div>
        </div>
        <div className={Styles.div}>
          <div>
            <FaPython size="50px" />
            <p>Python</p>
          </div>
        </div>
      </div>

      <h2>Tools & Technologies</h2>
      <div className={Styles.list}>
        <div className={Styles.div}>
          <div>
            <FaReact size="50px" />
            <p>React</p>
          </div>
        </div>
        <div className={Styles.div}>
          <div>
            <SiRedux size="50px" />
            <p>Redux</p>
          </div>
        </div>
        <div className={Styles.div}>
          <div>
            <SiFirebase size="50px" />
            <p>Firebase</p>
          </div>
        </div>
        <div className={Styles.div}>
          <div>
            <FaSass size="50px" />
            <p>Sass</p>
          </div>
        </div>
        <div className={Styles.div}>
          <div>
            <FaNode size="50px" />
            <p>Node Js</p>
          </div>
        </div>
        <div className={Styles.div}>
          <div>
            <FaGitAlt size="50px" />
            <p>Git</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
