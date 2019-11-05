import React, { Component } from "react";
import { Link, useRouteMatch } from "react-router-dom";

const MenuItem = ({ activeOnlyWhenExact, to, label, handleMenu }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <div className="menu-item">
      <div className={match ? "menu-active" : ""}>
        <Link onClick={handleMenu} to={to}>
          {label}
        </Link>
      </div>
    </div>
  );
};

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false, showMenuItens: false };
  }

  _handleMenu = () => {
    const { showMenu, showMenuItens } = this.state;
    this.setState({
      showMenu: !showMenu,
      showMenuItens: !showMenuItens
    });
  };

  _renderMenu() {
    return (
      <div className="menu-itens">
        <MenuItem
          handleMenu={this._handleMenu}
          to="/our-vision"
          label="Our Vision"
        />
        <MenuItem handleMenu={this._handleMenu} to="/stories" label="Stories" />
        <MenuItem handleMenu={this._handleMenu} to="/labs" label="Labs" />
        <MenuItem handleMenu={this._handleMenu} to="/people" label="People" />
        <MenuItem
          handleMenu={this._handleMenu}
          to="/our-work"
          label="Our Work"
        />
        <MenuItem
          handleMenu={this._handleMenu}
          to="/partners"
          label="Partners"
        />
      </div>
    );
  }

  render() {
    const { showMenu, showMenuItens } = this.state;
    return (
      <div>
        <div className="menu-mobile">
          {showMenu === false ? (
            <img
              onClick={this._handleMenu}
              src="/images/menu-hamburger.svg"
              className="menu-hamburger"
              alt="Open menu"
            />
          ) : (
            <img
              onClick={this._handleMenu}
              src="/images/menu-close.svg"
              className="menu-hamburger"
              alt="Close menu"
            />
          )}
          {showMenuItens === false ? null : (
            <div className="menu-mobile-box">{this._renderMenu()}</div>
          )}
        </div>
        <div className="menu-desktop">{this._renderMenu()}</div>
      </div>
    );
  }
}

export default Menu;
