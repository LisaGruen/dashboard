import React, { useState, useEffect } from "react";
import "./waitinglist.scss";
import { Animated } from "react-animated-css";

let img = "";
let randomImg = 0;
const ImgArray2 = [
  require("../../assets/images/graphics/popMessage.png"),
  require("../../assets/images/graphics/popMessage2.png"),
  require("../../assets/images/graphics/popMessage3.png"),
];

export default function WaitingList(props) {
  //console.log(props.currentQueue);
  if (props.currentQueue.length > 0) {
    randomImg = Math.floor(Math.random() * 3);
    return (
      <div className="WRAPPER">
        <h2 class="waiting">waiting list</h2>
        <h2 className="">
          ALMOST THERE <br /> DO NOT GIVE UP!
        </h2>
        <div className="container border1">
          {props.currentQueue.map(({ id, startTime }) => (
            <div className="queue" style={{ color: "" }} key={id}>
              {id}
            </div>
          ))}
        </div>
        <h2>BEER IS READY!</h2>{" "}
        <div className="container border2">
          {props.currentServing.map(({ id }) => (
            <div className="serving " style={{ color: "" }} key={id}>
              {id}
            </div>
          ))}
        </div>
        <div className="imageContainer">
          <img
            className="cheersImg"
            src={require("../../assets/images/graphics/orderReady.svg")}
            alt="Cheers!"
          />
        </div>
      </div>
    );
  } else {
    img = ImgArray2[randomImg];
    console.log(randomImg);
    return (
      <div className="WRAPPER">
        <h2 className="popMessage"></h2>
        <div className="">
          <img className="cheersImg" src={img} />
        </div>
        <h2>BEER IS READY!</h2>{" "}
        <div className="container border2">
          {props.currentServing.map(({ id }) => (
            <div className="serving " style={{ color: "" }} key={id}>
              {id}
            </div>
          ))}
        </div>
        <div className="imageContainer">
          <img
            className="cheersImg"
            src={require("../../assets/images/graphics/orderReady.svg")}
            alt="Cheers!"
          />
        </div>
      </div>
    );
  }
}
