import React from "react";
import { Link } from "react-router-dom";

const ContactInfo = ({ image, text, alt }) => {
  return (
    <div className="footer-contact_info">
      <div>
        <img alt={alt} className="footer-contact_icon" src={image} />
      </div>
      <div>
        <p className="footer-contact_text">{text}</p>
      </div>
    </div>
  );
};

const MenuItem = ({ to, label }) => {
  return (
    <div className="footer-menu_item">
      <Link to={to}>{label}</Link>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo_box">
        <img
          alt="Art Science Lab logo"
          className="footer-logo"
          src="/images/logo-asl-footer.png"
        />
      </div>

      <div className="footer-contact">
        <div>
          <p className="footer-contact_title">Contact Us</p>
        </div>

        <ContactInfo
          image="/images/contact/barbara.png"
          text="Associate Professor Barbara Bollard, Director ArtScience Lab"
          alt="Profile"
        />

        <ContactInfo
          image="/images/contact/home.png"
          text=" 55 Wellesley Street East, Auckland Central"
          alt="Adress"
        />

        <ContactInfo
          image="/images/contact/email.png"
          text="barbara.bollard@aut.ac.nz"
          alt="Email"
        />
      </div>
      <div className="footer-menu">
        <MenuItem to="/our-vision" label="Our Vision" />
        <MenuItem to="/stories" label="Stories" />
        <MenuItem to="/labs" label="Labs" />
        <MenuItem to="/people" label="People" />
        <MenuItem to="/partners" label="Partners" />
      </div>
    </div>
  );
};

export default Footer;
