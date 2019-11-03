import React, { Component } from "react";

class Partners extends Component {
  constructor(props) {
    super(props);
    this.state = { world: false, oceania: false, nz: false, europe: false };
  }

  toogleEurope = () => {
    const { europe } = this.state;

    this.setState({
      europe: !europe
    });
  };

  toogleWorld = () => {
    const { world } = this.state;

    this.setState({
      world: !world
    });
  };

  toogleOceania = () => {
    const { oceania } = this.state;

    this.setState({
      oceania: !oceania
    });
  };

  toogleNz = () => {
    const { nz } = this.state;

    this.setState({
      nz: !nz
    });
  };

  _maps() {
    return (
      <div className="partners-container">
        <header>
          <h1 className="tagline-partners">Partners / E Hoa</h1>
        </header>
        <div className="partners-maps-container">
          <div>
            <img
              alt="Map Australia and New Zealand"
              onClick={this.toogleOceania}
              className="partners-map-image"
              src="/images/maps/au-nz.png"
            />
            <p className="partners-map-text">
              Partners in Australia & New Zealand
            </p>
          </div>
          <div>
            <img
              alt="Map world"
              onClick={this.toogleWorld}
              className="partners-map-image"
              src="/images/maps/world.png"
            />
            <p className="partners-map-text">International Partners</p>
          </div>
        </div>
      </div>
    );
  }

  _world() {
    const { europe } = this.state;

    return (
      <div className="partners-container">
        <header>
          <h1 className="tagline-partners">
            International Partners / Hoa Taiao
          </h1>
          <p onClick={this.toogleWorld} className="partners-back-bt">
            Back - Partners / E Hoa
          </p>
        </header>
        <div className="partners-map-detail-container">
          {europe === true ? (
            <img
              alt="Map Europe detail"
              onClick={this.toogleEurope}
              className="partners-europe-detail-image"
              src="/images/maps/europe-detail.png"
            />
          ) : (
            <div
              onClick={this.toogleEurope}
              className="partners-bt-invisible"
            ></div>
          )}

          <img
            alt="Map world detail"
            className="partners-map-detail-image"
            src="/images/maps/world-detail.png"
          />
        </div>
      </div>
    );
  }

  _oceania() {
    const { nz } = this.state;

    return (
      <div className="partners-container">
        <header>
          <h1 className="tagline-partners">
            Partners in Australia and NZ / Hoa i roto o Ahitereiria me Aotearoa
          </h1>
          <p onClick={this.toogleOceania} className="partners-back-bt">
            Back - Partners / E Hoa
          </p>
        </header>
        <div className="partners-map-detail-container">
          {nz === true ? (
            <img
              alt="Map NZ details"
              onClick={this.toogleNz}
              className="partners-nz-detail-image"
              src="/images/maps/nz-detail.png"
            />
          ) : (
            <div
              onClick={this.toogleNz}
              className="partners-bt-invisible-nz"
            ></div>
          )}

          <img
            alt="Map AU and NZ details"
            className="partners-map-detail-image"
            src="/images/maps/au-nz-detail.png"
          />
        </div>
      </div>
    );
  }

  render() {
    const { world, oceania } = this.state;

    if (world === true) {
      return this._world();
    } else if (oceania === true) {
      return this._oceania();
    } else {
      return this._maps();
    }
  }
}

export default Partners;
