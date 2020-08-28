import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import MyNavBar from "./components/MyNavBar";
import { SavedBookProvider } from "./util/GlobalStore";

function App() {
  return (
    <SavedBookProvider>
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
    </SavedBookProvider>
  );
}

export default App;
