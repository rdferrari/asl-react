import React from "react";
import { Link } from "react-router-dom";

const HomeContent = ({ title, link, image }) => {
  return (
    <div className="image-container">
      <div className="header-text-center">
        <h3>{title}</h3>
        <button className="button-home">
          <Link to={link}>Learn more</Link>
        </button>
      </div>
      <img className="header-image" src={image} />
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <header className="image-container">
        <div className="header-text">
          <h1>Art Science Lab</h1>
          <p>Ko te taiao ko au,</p>
          <p>Ko au te taiao.</p>
          <p>The enviroment is me,</p>
          <p>I am the enviroment.</p>
        </div>

        <img className="header-image" src="/images/home-header.jpg" />
      </header>
      <HomeContent
        title="Our Vision"
        link="./our-vision"
        image="/images/home-header.jpg"
      />
      <HomeContent
        title="People"
        link="./people"
        image="/images/home-header.jpg"
      />
    </div>
  );
};

export default Home;
