import React from "react";
import Styles from "./card.module.scss";

const Card = ({ img, title, tools, link }) => {
  return (
    <div className={Styles.card}>
      <a href={link} target="_blank"  rel="noopener noreferrer">
      <div className={Styles.image}>
        <img src={img} alt="proimg" />
      </div>
      </a>
      <div className={Styles.details}>
        <h3>{title}</h3>
        <p>
          {tools.map((tool) => (
            <span>{tool}</span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Card;
