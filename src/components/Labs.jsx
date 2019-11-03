import React from "react";
import { Link } from "react-router-dom";

import LabsList from "../data/labs.json";

const Labs = () => {
  return (
    <div className="content-container-full">
      <div className="content-container-black">
        <header>
          <h1 className="tagline">Labs / Taiwhanga Pūtaiao</h1>
        </header>
        {LabsList.map(lab => (
          <div key={lab.id} className="content-group-black">
            <div className="content-black">
              <h2 className="title-black">{lab.title}</h2>
              <p className="intro-black">{lab.intro}</p>
              <p className="intro-black_sub">{lab.text}</p>
              <button className="button-one bt-small">
                <a target="_blank" href={lab.link}>
                  Learn more
                </a>
              </button>
            </div>
            <div className="images-black">
              <img className="image-right" src={lab.image} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Labs;
