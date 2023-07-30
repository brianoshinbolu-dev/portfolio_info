import Styles from "./about.module.scss";
// import AboutImg from "../../assets/gif abot.gif";
import React from "react";
// import ProgressBar from "@ramonak/react-progress-bar";

const About = () => {
  return (
    <div className={Styles.bg}>
      <p className={Styles.about}>
        <p>
          I'm a Web Developer expertised in <span>Frontend</span> Development.
        </p>
        <p>
          {" "}
          I love to design and develop <span>scalable</span> and{" "}
          <span>performant</span> websites.
        </p>
        <p>
          I try to craft a good <span>user experience</span> using modern
          frontend architecture.
        </p>
      </p>
    </div>
  );
};

export default About;
