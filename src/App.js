import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";

// components
import Menu from "./components/Menu";
import Home from "./components/Home";
import OurVision from "./components/OurVision";
import Stories from "./components/Stories";
import Labs from "./components/Labs";
import Posts from "./components/Posts";
import People from "./components/People";
import OurWork from "./components/OurWork";
import Partners from "./components/Partners";
import StoryDrone from "./components/story/StoryDrone";
import StoryRemote from "./components/story/StoryRemote";
import StoryRaised from "./components/story/StoryRaised";
import WorkAirBox from "./components/story/WorkAirBox";

import WorkCloud from "./components/story/WorkCloud";
import WorkAntartica from "./components/story/WorkAntartica";
import WorkMarae from "./components/story/WorkMarae";
import WorkCrude from "./components/story/WorkCrude";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { menuClass: null };
  }

  handleThisMenu = () => {
    this.setState({
      menuClass: "menu-this-menu"
    });
  };

  render() {
    // console.log(window.location.hash);
    const { menuClass } = this.state;

    return (
      <HashRouter>
        <div>
          <Menu
            logo="/images/logo-asl.png"
            logoStyle="menu-logo-asl"
            menu="menu"
            contact="menu-contact-none"
            menuClass={menuClass}
            onClick={this.handleThisMenu}
          />
          <div className="components">
            <Switch>
              <ScrollToTop>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/our-vision">
                  <OurVision />
                </Route>
                <Route exact path="/stories">
                  <Stories />
                </Route>

                <Route exact path="/labs">
                  <Labs />
                </Route>
                <Route exact path="/posts">
                  <Posts />
                </Route>
                <Route exact path="/people">
                  <People />
                </Route>
                <Route exact path="/our-work">
                  <OurWork />
                </Route>
                <Route exact path="/partners">
                  <Partners />
                </Route>
                <Route exact path="/stories/drone-of-conservation">
                  <StoryDrone />
                </Route>
                <Route exact path="/stories/remote-sensing">
                  <StoryRemote />
                </Route>
                <Route exact path="/stories/raised-up-sky">
                  <StoryRaised />
                </Route>
                <Route exact path="/work/airbox">
                  <WorkAirBox />
                </Route>

                <Route exact path="/work/clouds">
                  <WorkCloud />
                </Route>

                <Route exact path="/work/antartica">
                  <WorkAntartica />
                </Route>

                <Route exact path="/work/marae">
                  <WorkMarae />
                </Route>

                <Route exact path="/work/crude">
                  <WorkCrude />
                </Route>
              </ScrollToTop>
            </Switch>
            <div className="footer">
              <Menu
                logo="/images/logo-asl-footer.png"
                menu="menu-footer"
                contact="menu-contact-container"
                logoStyle="menu-logo-asl_footer"
                menuFooter="menu-list-footer"
              />
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
