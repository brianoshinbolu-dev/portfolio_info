import Styles from "./about.module.scss";
import AboutImg from "../../assets/gif abot.gif";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const About = () => {
  return (
    <div>
      <div className={Styles.about}>
        <p className={Styles.aboutInfo}>
          I am a passionate Software Engineer with a love for creating
          innovative web applications. Skilled in Front End , I thrive on
          tackling technical challenges and delivering seamless user
          experiences. Committed to continuous learning, I stay up-to-date with
          the latest technologies to craft cutting-edge solutions. Let's build
          something incredible together.
        </p>
        <img className={Styles.aboutImg} src={AboutImg} alt="about" />
      </div>

      <div className={Styles.skills}>
        <h5 className={Styles.skillHeading}>SKILLS</h5>

        <ul className={Styles.skillbody}>
          <li>
            HTML
          </li>
          <li>
            CSS
          </li>
          <li>
            Javascript
          </li>
          <li>
            React Js
          </li>
          <li>
            GIT
          </li>
        </ul>

        <ul className={Styles.skillbodybig}>
         <div>
         <li>
            HTML
            <span>
              <ProgressBar completed={90} />
            </span>
          </li>
          <li>
            CSS
            <span>
              <ProgressBar completed={90} />
            </span>
          </li>
          <li>
            Javascript
            <span>
              <ProgressBar completed={80} />
            </span>
          </li>
         </div>
          <div>
          <li>
            React Js
            <span>
              <ProgressBar completed={79} />
            </span>
          </li>
          <li>
            GIT
            <span>
              <ProgressBar completed={80} />
            </span>
          </li>
          </div>
        </ul>


      </div>
    </div>
  );
};

export default About;
