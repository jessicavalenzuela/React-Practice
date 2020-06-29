import React, { Component } from "react";
import "./App.scss";
import FontAwesome from "react-fontawesome";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/tourList";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <TourList />
      </React.Fragment>
    );
  }
}

export default App;
