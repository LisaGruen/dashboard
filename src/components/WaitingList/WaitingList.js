import React from "react";
import "./waitinglist.scss";

let img = "";
let randomImg = 0;
//paths to the three images for the animation
const ImgArray2 = [
  require("../../assets/images/graphics/popMessage.gif"),
  require("../../assets/images/graphics/popMessage2.gif"),
  require("../../assets/images/graphics/popMessage3.gif"),
];

export default function WaitingList(props) {
  if (props.currentQueue.length > 0) {
    //if there are no orders in the queue
    randomImg = Math.floor(Math.random() * 3); //randomly shows one of the three images when there're no orders in the queue
    return (
      <div className="wrapper">
        <h2>BEER IS READY!</h2>
        <h3>Customers served</h3>{" "}
        <div className="wrapperCustomer">
          <h3>Ordering number</h3>
          <div className="container2 border2">
            {props.currentServing.map(({ id }) => (
              <div className="serving " style={{ color: "" }} key={id}>
                {id}
              </div>
            ))}
          </div>
        </div>
        <div className="wrapperInside">
          <div className="imageContainer">
            <img
              className="cheersImg"
              src={require("../../assets/images/graphics/orderReady.svg")}
              alt="Cheers!"
            />
          </div>
        </div>
        <h2 className="readyHeadline">
          ALMOST THERE <br /> DO NOT GIVE UP!
        </h2>
        <div className="">
          <h3>Customers waiting</h3>
          <div className="wrapperCustomer">
            {" "}
            <h3>Ordering number</h3>
            <div className="container2 border1">
              {props.currentQueue.map(({ id, startTime }) => (
                <div className="queue" style={{ color: "" }} key={id}>
                  {id}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    img = ImgArray2[randomImg]; //show one, randomly chosen image from ImgArray2
    return (
      <div className="wrapper">
        <h2>BEER IS READY!</h2>
        <h3>Customers served</h3>{" "}
        <div className="wrapperCustomer">
          {" "}
          <h3>Ordering number</h3>
          <div className="container2 border2">
            {props.currentServing.map(({ id }) => (
              <div className="serving " style={{ color: "" }} key={id}>
                {id}
              </div>
            ))}
          </div>
        </div>
        <div className="wrapperInside">
          <div className="">
            <img className="cheersImg popMessage " src={img} alt="Waiting" />
          </div>
        </div>
        <h2 className="readyHeadline">
          ALMOST THERE <br /> DO NOT GIVE UP!
        </h2>
        <div className="">
          <h3>Customers waiting</h3>
          <div className="wrapperCustomer">
            {" "}
            <h3>Ordering number</h3>
            <div className="container2 border1">
              {props.currentQueue.map(({ id, startTime }) => (
                <div className="queue" style={{ color: "" }} key={id}>
                  {id}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
