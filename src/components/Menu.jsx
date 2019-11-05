import React, { Component } from "react";
import { Link, useRouteMatch } from "react-router-dom";

const MenuItem = ({ activeOnlyWhenExact, to, label }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <div className="menu-item">
      <div className={match ? "menu-active" : ""}>
        <Link to={to}>{label}</Link>
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
        <MenuItem to="/our-vision" label="Our Vision" />
        <MenuItem to="/stories" label="Stories" />
        <MenuItem to="/labs" label="Labs" />
        <MenuItem to="/people" label="People" />
        <MenuItem to="/our-work" label="Our Work" />
        <MenuItem to="/partners" label="Partners" />
      </div>
    );
  }

  render() {
    const { showMenu, showMenuItens } = this.state;
    return (
      <div>
        <div className="menu-mobile">
          {showMenu === false ? (
            <p onClick={this._handleMenu}>show</p>
          ) : (
            <p onClick={this._handleMenu}>hide</p>
          )}
          {showMenuItens === false ? null : this._renderMenu()}
        </div>
        <div className="menu-desktop">{this._renderMenu()}</div>
      </div>
    );
  }
}

export default Menu;
