import React, { Component } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";

// components
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
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
    return (
      <HashRouter>
        <div>
          <TopNav />
          <div>
            <Switch>
              <ScrollToTop>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/our-vision">
                  <OurVision />
                </Route>
                <Route path="/stories">
                  <Stories />
                </Route>

                <Route path="/labs">
                  <Labs />
                </Route>
                <Route path="/posts">
                  <Posts />
                </Route>
                <Route path="/people">
                  <People />
                </Route>
                <Route path="/our-work">
                  <OurWork />
                </Route>
                <Route path="/partners">
                  <Partners />
                </Route>
                <Route path="/drone-of-conservation">
                  <StoryDrone />
                </Route>
                <Route path="/remote-sensing">
                  <StoryRemote />
                </Route>
                <Route path="/raised-up-sky">
                  <StoryRaised />
                </Route>
                <Route path="/airbox">
                  <WorkAirBox />
                </Route>

                <Route path="/clouds">
                  <WorkCloud />
                </Route>

                <Route path="/antartica">
                  <WorkAntartica />
                </Route>

                <Route path="/marae">
                  <WorkMarae />
                </Route>

                <Route path="/crude">
                  <WorkCrude />
                </Route>
              </ScrollToTop>
            </Switch>
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
