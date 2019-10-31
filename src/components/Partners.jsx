import React, { Component } from "react";

class Partners extends Component {
  render() {
    return (
      <div className="partners-container">
        <div className="content-container-black">
          <header>
            <h1>Our Work / Mahi</h1>
          </header>
          <div className="partners-maps-container">
            <div>
              <img
                className="partners-map-image"
                src="/images/maps/au-nz.png"
              />
              <p className="partners-map-text">
                Partners in Australia & New Zealand
              </p>
            </div>
            <div>
              <img
                className="partners-map-image"
                src="/images/maps/world.png"
              />
              <p className="partners-map-text">International Partners</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Partners;
