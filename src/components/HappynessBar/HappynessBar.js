import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

import "./hapyness.css";
export default function HappynessBar(props) {
  const [bubbles, setbubbles] = useState([]);
  const [foam, setfoam] = useState([]);
  const [beerLevel, setbeerLevel] = useState(0);
  let bubbleCount = 5;
  let foamCount = 6;

  function animateElements(count, elementClass) {
    return [...Array(count)].map((e, i) => (
      <div key={i} className={`${elementClass} ${elementClass}${i}`}></div>
    ));
  }

  useEffect(() => {
    setfoam(animateElements(foamCount, "foam"));
    setbubbles(animateElements(bubbleCount, "bubble"));
  }, [bubbleCount, foamCount]);

  const liquidRef = useRef();
  const happynessRef = useRef();
  const beerFoamref = useRef();

  useEffect(() => {
    setbeerLevel(
      props.amountSold > 2500
        ? 1
        : props.amountSold > 2000
        ? 0.8
        : props.amountSold > 1500
        ? 0.6
        : props.amountSold > 1000
        ? 0.4
        : props.amountSold > 500
        ? 0.2
        : 0
    );
  }, [props.amountSold]);

  //animations
  useEffect(() => {
    let f = 0;
    const maxHeihtOfLiquid = 260;
    //beer liquid animation
    gsap.to("#liquid", { duration: 1, height: maxHeihtOfLiquid * beerLevel });
    //beer foam bubbles animation

    foam.map((element) =>
      gsap.fromTo(
        `.foam${f++}`,
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
          repeat: 3,
        }
      )
    );

    //beer foam lifting up animation
    gsap.to(".beer-foam", {
      duration: 1.2,
      height: maxHeihtOfLiquid * beerLevel,
    });
  }, [beerLevel, bubbleCount, bubbles, foam]);

  return (
    <div id="container">
      <div className="pour"></div>
      <h2 className=" hapLevel">Happyness level</h2>

      <div id="beaker">
        <div className="beer-foam" ref={beerFoamref}>
          {foam}
        </div>

        <div id="liquid" ref={liquidRef}>
          {bubbles}
        </div>

        <div className="happyness-level" ref={happynessRef}>
          <div className="">amazing</div>
          <div className="">feeling lucky</div>
          <div className="">great</div>
          <div className="">fine</div>
          <div className="">ok</div>
        </div>
      </div>
      <h2>{props.amountSold}</h2>
    </div>
  );
}
