import React, { Component } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

class TopNav extends Component {
  render() {
    return (
      <div className="menu-top-nav">
        <div>
          <Link to="/">
            <img
              alt="ASL logo"
              className="menu-logo-asl"
              src="/images/logo-asl.png"
            />
          </Link>
        </div>
        <Menu />
        <div>
          <img alt="" className="menu-logo-aut" src="/images/logo-aut.png" />
        </div>
      </div>
    );
  }
}

export default TopNav;
