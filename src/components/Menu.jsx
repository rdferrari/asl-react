import React from "react";
import { Link } from "react-router-dom";

const Menu = ({
  logo,
  menu,
  contact,
  logoStyle,
  menuFooter,
  menuClass,
  onClick
}) => {
  return (
    <div className={menu}>
      <div>
        <Link to="/">
          <img className={logoStyle} src={logo} />
        </Link>
      </div>

      <div className={contact}>
        <div>
          <p className="menu-contact-title">Contact Us</p>
        </div>
        <div className="menu-contact-flex">
          <img className="menu-contact-image" src="/images/contact/home.png" />
          <p className="menu-contact-text">
            55 Wellesley Street East, Auckland Central
          </p>
        </div>
        <div className="menu-contact-flex">
          <img className="menu-contact-image" src="/images/contact/phone.png" />
          <p className="menu-contact-text">+64 9 921 9999</p>
        </div>
        <div className="menu-contact-flex">
          <img className="menu-contact-image" src="/images/contact/email.png" />
          <p className="menu-contact-text">applab@aut.ac.nz</p>
        </div>
      </div>

      <ul className={menuFooter}>
        <li>
          <Link onClick={onClick} className={menuClass} to="/our-vision">
            Our Vision
          </Link>
        </li>
        <li>
          <Link onClick={onClick} className={menuClass} to="/stories">
            Stories
          </Link>
        </li>
        <li>
          <Link onClick={onClick} className={menuClass} to="/labs">
            Labs
          </Link>
        </li>
        <li>
          <Link onClick={onClick} className={menuClass} to="/people">
            People
          </Link>
        </li>
        <li>
          <Link onClick={onClick} className={menuClass} to="/our-work">
            Our Work
          </Link>
        </li>
        <li>
          <Link onClick={onClick} className={menuClass} to="/partners">
            Partners
          </Link>
        </li>
      </ul>

      <div>
        <img className="menu-logo-aut" src="/images/logo-aut.png" />
      </div>
    </div>
  );
};

export default Menu;
