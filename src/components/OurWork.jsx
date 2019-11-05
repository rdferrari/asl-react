import React from "react";
import { Link } from "react-router-dom";

import OurWorkList from "../data/our_work.json";

const Work = ({ name, image, link }) => {
  return (
    <div className="">
      <Link to={link}>
        <img alt="Work example" className="our-work-image" src={image} />
        <div className="">
          <p className="our-work-name">{name}</p>
        </div>
      </Link>
    </div>
  );
};

const OurWork = () => {
  return (
    <div className="main-box">
      <div className="main-header-box_black">
        <header>
          <h1 className="main-tagline">Our Work / Mahi</h1>
          <div className="our-work-text">
            <p className="our-work-intro">
              The Art Science Lab at AUT expands the horizons of Art and Science
              by means of transdisciplinary research, communicating the
              imperative of preserving Earth’s threatened ecosystems, through
              ethical discourse and scholarly practice.
            </p>
            <p className="our-work-intro_sub">
              When artists and scientists work together unexpected ideas and
              discoveries emerge. See a selection of our work below.
            </p>
          </div>
        </header>
        <div className="our-work-box">
          {OurWorkList.map(work => (
            <Work
              key={work.id}
              name={work.name}
              image={work.image}
              link={work.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWork;
