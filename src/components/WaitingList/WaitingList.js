import React, { useState, useEffect, useRef } from "react";
import "./waitinglist.scss";
import { Animated } from "react-animated-css";

let img = "";
let randomImg = 0;
//paths to the three images for the animation
const ImgArray2 = [
  require("../../assets/images/graphics/popMessage.gif"),
  require("../../assets/images/graphics/popMessage2.png"),
  require("../../assets/images/graphics/popMessage3.png"),
];

export default function WaitingList(props) {
  //console.log(props.currentQueue);
  if (props.currentQueue.length > 0) {
    //if there are no orders in the queue
    randomImg = Math.floor(Math.random() * 3); //randomly shows one of the three images when there're no orders in the queue
    return (
      <div className="WRAPPER">
        <h2 className="waiting">waiting list</h2>
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
    img = ImgArray2[randomImg]; //show one, randomly chosen image from ImgArray2
    console.log(randomImg);
    return (
      <div className="WRAPPER">
        <h2 className=""></h2>
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
