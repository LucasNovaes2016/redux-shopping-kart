import React from "react";
import "./App.css";
import Navbar from "../src/components/layout/navbar";
import { MainPage } from "../src/components/pages/main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route path={["/", "/inicio"]}>
              <MainPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

{
  /* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> */
}
