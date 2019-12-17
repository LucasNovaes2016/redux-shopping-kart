import React from "react";
import "./App.css";
import Navbar from "../src/components/layout/navbar";
import { MainPage } from "../src/components/pages/main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Products from "../src/core/data/local";
import { Provider } from "react-redux";
import store from "../src/core/redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route path="/teste">
                <div> testando... </div>
              </Route>
              <Route path="/">
                <MainPage />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
