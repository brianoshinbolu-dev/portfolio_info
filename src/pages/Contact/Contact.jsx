import React from "react";
import Styles from "./contact.module.scss";
import { BsLinkedin } from "react-icons/bs";
import {
  FaGithubSquare,
  FaPhoneSquareAlt,
  FaWhatsappSquare,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <div className={Styles.bg}>
      <div>
        <div>
          <a
            href="https://github.com/brianoshinbolu-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare size="40px" color="white" />
          </a>
          <span>Brianoshinbolu-dev</span>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/brian-oshinbolu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin size="40px" color="blue" />
          </a>
          <span>Brian Oshinbolu</span>
        </div>
        <div>
          <FiMail size="40px" color="red" />
          <span>oshinbolubrian@gmail.com</span>
        </div>
        <div>
          <FaPhoneSquareAlt size="40px" color="blue" />
          <span>234-810-027-1832</span>
        </div>
        <div>
          <FaWhatsappSquare size="40px" color="green" />
          <span>234-810-027-1832</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
