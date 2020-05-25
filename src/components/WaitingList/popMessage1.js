import React, { useState, useEffect, Component } from "react";
import "./waitinglist.scss";

class popMessage1 extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitor",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thanks",
    });
  }

  render() {
    return <h1> My message here </h1>;
  }
}
export default popMessage1;
