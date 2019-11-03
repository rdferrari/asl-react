import React from "react";
import { Link } from "react-router-dom";

const HomeContent = ({ title, link, image }) => {
  return (
    <div className="image-container">
      <div className="home-text-container">
        <h3 className="home-text-button">{title}</h3>
        <button className="button-one bt-large">
          <Link to={link}>Learn more</Link>
        </button>
      </div>
      <img alt="" className="full-image" src={image} />
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <header className="image-container">
        <div className="home-header-text">
          <h1 className="home-tagline">Art Science Lab</h1>
          <p className="home-tagline_sub">Ko te taiao ko au, Ko au te taiao.</p>
          <p className="home-tagline_sub_italic">
            The enviroment is me, I am the enviroment.
          </p>
        </div>

        <img alt="" className="full-image" src="/images/home-arvore.jpg" />
      </header>
      <HomeContent
        title="Our Vision"
        link="./our-vision"
        image="/images/home-glaciarb.jpg"
      />

      <HomeContent
        title="Stories"
        link="./stories"
        image="/images/home-sand.jpg"
      />

      <HomeContent title="Labs" link="./labs" image="/images/home-lab.jpg" />

      <HomeContent
        title="People"
        link="./people"
        image="/images/home-people.jpg"
      />

      <HomeContent
        title="Our Work"
        link="./our-work"
        image="/images/home-work.jpg"
      />

      <HomeContent
        title="Partners"
        link="./partners"
        image="/images/home-seed.jpg"
      />
    </div>
  );
};

export default Home;
