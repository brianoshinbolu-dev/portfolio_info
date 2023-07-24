import React from "react";
import Styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={Styles.homepage}>
      <h1><em>WELCOME</em></h1>
      <h2 className={Styles.position}>
        <span>Hi I'm BRIAN OSHINBOLU </span>
        <br/>
        #FRONTEND DEVELOPER
      </h2>
    </div>
  );
};

export default Home;
