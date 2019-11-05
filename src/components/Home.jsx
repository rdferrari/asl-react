import React from "react";
import { Link } from "react-router-dom";

const HomeContent = ({ title, link, image, alt }) => {
  return (
    <div className="home-image-box">
      <img alt={alt} className="home-full-width-img" src={image} />
      <div className="home-text-container">
        <h3 className="home-text-button">{title}</h3>
        <button className="button-one bt-large">
          <Link to={link}>Learn more</Link>
        </button>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="home-box">
      <header className="home-image-box">
        <div className="home-header-text">
          <h1 className="home-tagline">Art Science Lab</h1>
          <p className="home-tagline_sub">Ko te taiao ko au, Ko au te taiao.</p>
          <p className="home-tagline_sub_italic">
            The enviroment is me, I am the enviroment.
          </p>
        </div>
        <img
          alt="Maori tree"
          className="home-full-width-img"
          src="/images/home-arvore.jpg"
        />
      </header>
      <HomeContent
        title="Our Vision"
        link="./our-vision"
        image="/images/home-glaciarb.jpg"
        alt="Antartica glaciar"
      />

      <HomeContent
        title="Stories"
        link="./stories"
        image="/images/home-sand.jpg"
        alt="Namibia dune"
      />

      <HomeContent
        title="Labs"
        link="./labs"
        image="/images/home-lab.jpg"
        alt="Laboratory"
      />

      <HomeContent
        title="People"
        link="./people"
        image="/images/home-people.jpg"
        alt="Art Science Lab people"
      />

      <HomeContent
        title="Our Work"
        link="./our-work"
        image="/images/home-work.jpg"
        alt="Draw Birds"
      />

      <HomeContent
        title="Partners"
        link="./partners"
        image="/images/home-seed.jpg"
        alt="Tree seed"
      />
    </div>
  );
};

export default Home;
