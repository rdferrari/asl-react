import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="/">Art Science Lab</Link>
        </li>
        <li>
          <Link to="/our-vision">Our Vision</Link>
        </li>
        <li>
          <Link to="/stories">Stories</Link>
        </li>
        <li>
          <Link to="/labs">Labs</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/our-work">Our Work</Link>
        </li>
        <li>
          <Link to="/partners">Partners</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
