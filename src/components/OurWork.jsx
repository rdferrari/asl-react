import React from "react";
import { Link } from "react-router-dom";

import OurWorkList from "../data/our_work.json";

const Work = ({ name, image, link }) => {
  return (
    <div className="person-container">
      <Link to={link}>
        <img className="people-image_work" src={image} />
        <div className="key-people-texts">
          <p className="people-name">{name}</p>
        </div>
      </Link>
    </div>
  );
};

const OurWork = () => {
  return (
    <div className="people-container">
      <div className="content-container-black">
        <header>
          <h1>Our Work / Mahi</h1>
          <div className="header-text-container">
            <p className="intro-black">
              The Art Science Lab at AUT expands the horizons of Art and Science
              by means of transdisciplinary research, communicating the
              imperative of preserving Earth’s threatened ecosystems, through
              ethical discourse and scholarly practice.
            </p>
            <p className="intro-black">
              When artists and scientists work together unexpected ideas and
              discoveries emerge. See a selection of our work below.
            </p>
          </div>
        </header>

        <div className="content-group-people">
          <div className="people-container">
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
    </div>
  );
};

export default OurWork;
