import React from "react";
import { Link } from "react-router-dom";

const Header = ({
  menuText,
  title,
  lineOneMaori,
  lineTwoMaori,
  lineOneEng,
  lineTwoEng,
  image
}) => {
  return (
    <div>
      <header className="image-container">
        <div className="header-text">
          <p>{menuText},</p>
          <h1>{title}</h1>
          <p>{lineOneMaori}</p>
          <p>{lineTwoMaori}</p>
          <p>{lineOneEng}</p>
          <p>{lineTwoEng}</p>
        </div>

        <img className="header-image" src={image} />
      </header>
    </div>
  );
};

export default Header;
