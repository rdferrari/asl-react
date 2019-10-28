import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import OurVision from "./components/OurVision";
import Stories from "./components/Stories";
import Labs from "./components/Labs";
import Posts from "./components/Posts";

const App = () => {
  return (
    <Router>
      <div>
        <Menu logo="/images/logo-asl.png" menu="menu" />
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
          </Switch>
          <div className="footer">
            <Menu logo="/images/logo-asl-footer.png" menu="menu-footer" />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
