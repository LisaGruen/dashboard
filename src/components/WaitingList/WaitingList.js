import React, { useState, useEffect } from "react";
import "./waitinglist.scss";

export default function WaitingList(props) {
  console.log(props.currentQueue);
  return (
    <div className="WRAPPER">
      <h2>
        ALMOST THERE <br /> DO NOT GIVE UP!
      </h2>
      {props.currentServing.map(({ id }) => (
        <div className="orderNumber" style={{ color: "red" }} key={id}>
          {id}
        </div>
      ))}
      {props.currentQueue.map(({ id, startTime }) => (
        <div className="orderNumber" key={id}>
          {id}
        </div>
      ))}

      <div className="numbersContainer"></div>
    </div>
  );
}
