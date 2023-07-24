import React from "react";
import Headshot from "../../assets/headshot.jpg";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Styles from "./dashboard.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <div>
      <div className={Styles.dashboard}>
        <div className="">
          <img src={Headshot} alt="headshot" />
          <h1>Brian Oshinbolu</h1>
        </div>

        {/* Mbile Navaigation bar Starts */}
        {/* ========================================================================================== */}

        <div className={Styles.toggle_button} onClick={handleToggle}>
          <GiHamburgerMenu />
        </div>

        <ul className={toggle ? Styles.mobileNav : Styles.hide}>
          <li onClick={handleToggle}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={handleToggle}>
            <Link to="/about">About me</Link>
          </li>
          <li onClick={handleToggle}>
            <Link to="/projects">Projects</Link>
          </li >
          <li onClick={handleToggle}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className={toggle ? Styles.mobileSocials : Styles.hide}>
          <span>
            <BsLinkedin />
          </span>
          <span>
            <FaGithubSquare />
          </span>
        </div>
        {/* ===================================================================================== */}

        <ul className={Styles.nav}>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About me</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li >
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className={Styles.socials}>
          <span>
            <BsLinkedin size="30px" />
          </span>
          <span>
            <FaGithubSquare size="35px" />
          </span>
        </div>
      </div>
      <div
        onClick={handleToggle}
        className={toggle ? Styles.wrapper : Styles.hide}
      ></div>
    </div>
  );
};

export default Dashboard;
