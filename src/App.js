import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./images/BigBrainTime.png";
import { StudyForm } from "./components/Study";
import { RestForm } from "./components/Rest";
import { TimerClass } from "./components/Timer";
import {BrainGraph} from "./components/braingraph";
export let Time = {
  StudyT: 25,
  RestT: 0
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Big Brain Time</p>
      </header>
      <img src={logo} width={400} height={350} />
      <Router>
        <Switch>
          <Route path="/" exact component={StudyForm} />
          <Route path="/rest" exact component={RestForm} />
          <Route path="/studytime" exact component={TimerClass} />
          <Route path="/graph" exact component={BrainGraph}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
