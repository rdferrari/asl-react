import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <div>
        <img className="menu-logo-asl" src="/images/logo-asl.png" />
      </div>

      <ul>
        <li>
          <Link className="menu-link" to="/">
            Art Science Lab
          </Link>
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

      <div>
        <img className="menu-logo-aut" src="/images/logo-aut.png" />
      </div>
    </div>
  );
};

export default Menu;
