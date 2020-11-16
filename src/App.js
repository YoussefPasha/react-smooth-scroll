import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Sidebar />
        <Navbar />
      </Router>
    );
  }
}
