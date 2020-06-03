import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import CreateElements from "../../modules/CreateElements";
import HappyAnimation from "./HappyAnimation";

import "./hapyness.scss";
export default function HappynessBar(props) {
  const [bubbles, setbubbles] = useState([]);
  const [foam, setfoam] = useState([]);
  const [maxBeakerHeight, setmaxBeakerHeight] = useState(0);
  const bubbleCount = 5;
  const foamCount = 6;

  //get the height
  const beaker = useRef();
  useEffect(() => {
    setmaxBeakerHeight(beaker.current.clientHeight);
  }, [maxBeakerHeight]);

  //Set states
  useEffect(() => {
    setfoam(CreateElements(foamCount, "foam"));
    setbubbles(CreateElements(bubbleCount, "bubble"));
  }, []);

  //animations
  useEffect(() => {
    let maxHeihtOfLiquid = props.amountSold;
    //(more than 250)
    if (props.amountSold > maxBeakerHeight * 10) {
      maxHeihtOfLiquid = maxBeakerHeight * 10;
    }

    //beer liquid animation
    gsap.to("#liquid", {
      duration: 1,
      height: (maxHeihtOfLiquid + 40) / 10,
    });

    //beer foam bubbles animation
    foam.map((element) =>
      gsap.fromTo(
        `.${element.props.className.split(" ")[1]}`,
        {
          y: 2,
          webkitFilter: "blur(1px)",
        },
        {
          y: -2,
          delay: "random(0.3, 3)",
          duration: "random(0.3, 2)",
          ease: "bounce",
          webkitFilter: "blur(1.5px)",
          repeat: 1,
        }
      )
    );

    //beer foam lifting up animation
    gsap.to(".beer-foam", {
      duration: 1.2,
      height: (maxHeihtOfLiquid - 30) / 10,
    });
  }, [foam, maxBeakerHeight, props.amountSold]);

  const textAnimation = (amountOfBeer) =>
    props.amountSold > amountOfBeer && "happyTextAnimation";
  return (
    <div className="wrapper happymeterContainer">
      <h2>HAPPINESS-BAR-O-METER</h2>
      <h3>Beer consumption in total</h3>{" "}
      <div className="wrapperInside">
        <HappyAnimation
          amountSold={props.amountSold}
          maxBeakerHeight={maxBeakerHeight}
        />{" "}
        <div id="container">
          <div className="pour"> </div>{" "}
          <div id="beaker" ref={beaker}>
            <div className="beer-foam"> {foam} </div>
            <div id="liquid"> {bubbles} </div>
            <div className="happyness-level">
              <div className={`${textAnimation(2200)} happyText`}>
                {" "}
                amazing{" "}
              </div>{" "}
              <div className={`${textAnimation(1800)} happyText`}>
                feeling lucky{" "}
              </div>{" "}
              <div className={`${textAnimation(1300)} happyText`}> great </div>{" "}
              <div className={`${textAnimation(800)} happyText`}> fine </div>{" "}
              <div className={`${textAnimation(400)} happyText`}> ok </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
        <h3>
          {" "}
          FOOBAR has happily served : {props.amountSold}
          cl{" "}
        </h3>
      </div>
    </div>
  );
}
