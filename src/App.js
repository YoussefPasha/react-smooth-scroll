import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Home />
      </Router>
    );
  }
}
