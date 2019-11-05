import React from "react";

import LabsList from "../data/labs.json";

const Labs = () => {
  return (
    <div className="main-box">
      <div className="main-header-box_black">
        <header>
          <h1 className="main-tagline">Labs / Taiwhanga Pūtaiao</h1>
        </header>
      </div>

      {LabsList.map(lab => (
        <div key={lab.id} className="main-content-box_black">
          <div className="main-box-left">
            <h2 className="main-title">{lab.title}</h2>
            <p className="main-intro">{lab.intro}</p>
            <p className="main-intro_sub">{lab.text}</p>
            <button className="button-one bt-small">
              <a rel="noopener noreferrer" target="_blank" href={lab.link}>
                Learn more
              </a>
            </button>
          </div>
          <div className="main-box-right">
            <img alt="" className="main-content-image" src={lab.image} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Labs;
