import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import OurVision from "./components/OurVision";
import Stories from "./components/Stories";
import Labs from "./components/Labs";
import Posts from "./components/Posts";
import People from "./components/People";
import OurWork from "./components/OurWork";

const App = () => {
  return (
    <HashRouter>
      <div>
        <Menu
          logo="/images/logo-asl.png"
          menu="menu"
          contact="menu-contact-none"
        />
        <div className="components">
          <Switch>
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
          </Switch>
          <div className="footer">
            <Menu
              logo="/images/logo-asl-footer.png"
              menu="menu-footer"
              contact="menu-contact-container"
            />
          </div>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
