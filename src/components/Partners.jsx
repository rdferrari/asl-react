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
      oceania: oceania
    });
  };

  _maps() {
    return (
      <div className="partners-container">
        <div className="content-container-black">
          <header>
            <h1>Partners / E Hoa</h1>
          </header>
          <div className="partners-maps-container">
            <div>
              <img
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
                onClick={this.toogleWorld}
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

  _world() {
    const { europe } = this.state;

    return (
      <div className="partners-container">
        <div className="content-container-black">
          <header>
            <h1>International Partners / Hoa Taiao</h1>
            <p onClick={this.toogleWorld}>Back - Partners / E Hoa</p>
          </header>
          <div className="partners-map-detail-container">
            {europe === true ? (
              <img
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
              className="partners-map-detail-image"
              src="/images/maps/world-detail.png"
            />
          </div>
        </div>
      </div>
    );
  }

  _europe() {
    return (
      <div className="">
        <img
          className="partners-map-detail-image"
          src="/images/maps/world-detail.png"
        />
      </div>
    );
  }

  render() {
    const { world } = this.state;

    return world == true ? this._world() : this._maps();
  }
}

export default Partners;
