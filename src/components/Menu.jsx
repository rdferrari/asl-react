import React, { Component } from "react";
import { Link } from "react-router-dom";

const items = [
  { name: "Our Vision", link: "/our-vision" },
  { name: "Stories", link: "/stories" },
  { name: "Labs", link: "/labs" },
  { name: "People", link: "/people" },
  { name: "Our Work", link: "/our-work" },
  { name: "Partners", link: "/partners" }
];

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = { active: "" };
  }

  _handleClick(menuItem) {
    this.setState({ active: menuItem });
  }

  render() {
    const { active } = this.state;

    return (
      <div>
        {items.map(item => (
          <li key={item.name}>
            <Link
              className={active === item.name ? "menu-this-menu" : {}}
              to={item.link}
              onClick={this._handleClick.bind(this, item.name)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </div>
    );
  }
}

const Menu = ({ logo, menu, contact, logoStyle, menuFooter }) => {
  return (
    <div className={menu}>
      <div>
        <Link to="/">
          <img alt="ASL logo" className={logoStyle} src={logo} />
        </Link>
      </div>

      <div className={contact}>
        <div>
          <p className="menu-contact-title">Contact Us</p>
        </div>

        <div className="menu-contact-flex">
          <img
            alt=""
            className="menu-contact-image"
            src="/images/contact/barbara.png"
          />
          <p className="menu-contact-text">
            +Associate Professor Barbara Bollard, Director ArtScience Lab,
          </p>
        </div>
        <div className="menu-contact-flex">
          <img
            alt=""
            className="menu-contact-image"
            src="/images/contact/home.png"
          />
          <p className="menu-contact-text">
            55 Wellesley Street East, Auckland Central
          </p>
        </div>

        <div className="menu-contact-flex">
          <img
            alt=""
            className="menu-contact-image"
            src="/images/contact/email.png"
          />
          <p className="menu-contact-text">barbara.bollard@aut.ac.nz</p>
        </div>
      </div>

      <ul className={menuFooter}>
        <MenuItem />
      </ul>

      <div>
        <img alt="" className="menu-logo-aut" src="/images/logo-aut.png" />
      </div>
    </div>
  );
};

export default Menu;
