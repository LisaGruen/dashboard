import React, { useState, useEffect } from "react";
import "./waitinglist.scss";

export default function WaitingList(props) {
  console.log(props.currentQueue);
  return (
    <div className="WRAPPER">
      <h2>BEER IS READY!</h2>{" "}
      <div className="container">
        {props.currentServing.map(({ id }) => (
          <div className="serving " style={{ color: "lightgreen" }} key={id}>
            {" "}
            {id}{" "}
          </div>
        ))}{" "}
      </div>
      <h2>
        ALMOST THERE <br /> DO NOT GIVE UP!
      </h2>
      <div className="container">
        {props.currentQueue.map(({ id, startTime }) => (
          <div className="queue" style={{ color: "red" }} key={id}>
            {" "}
            {id}{" "}
          </div>
        ))}
      </div>
      <div>
        <img
          className="cheersImg"
          src={require("../../assets/images/graphics/orderReady.svg")}
          alt="Cheers!"
        />
      </div>
    </div>
  );
}
