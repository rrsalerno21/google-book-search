import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import MyNavBar from "./components/MyNavBar";

function App() {
  return (
    <div>
      <Router>
        <MyNavBar />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route path="/book/:id">
            <Detail />
          </Route>
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
