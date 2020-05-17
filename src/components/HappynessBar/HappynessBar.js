import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

import "./hapyness.css";
export default function HappynessBar(props) {
  const [bubbles, setbubbles] = useState([]);
  const [foam, setfoam] = useState([]);
  const [beerLevel, setbeerLevel] = useState(0);
  const bubbleCount = 5;
  const foamCount = 8;

  function animateElements(count, elementClass) {
    return [...Array(count)].map((e, i) => (
      <div
        key={i}
        className={`${elementClass} ${elementClass}${i}`}
        style={{
          animationDelay: `${Math.random() * 5 + 0.2}s`,
          animationDuration: `${Math.random() * 2}s`,
        }}></div>
    ));
  }

  useEffect(() => {
    setfoam(animateElements(foamCount, "foam"));
    setbubbles(animateElements(bubbleCount, "bubble"));
  }, []);

  const liquidRef = useRef();
  const happynessRef = useRef();
  const beerFoamref = useRef();

  useEffect(() => {
    setbeerLevel(
      props.amountSold > 2500
        ? 180
        : props.amountSold > 2000
        ? 150
        : props.amountSold > 1500
        ? 120
        : props.amountSold > 1000
        ? 80
        : props.amountSold > 500
        ? 40
        : 0
    );

    gsap.to(".beer-foam", { duration: 2, height: beerLevel });
    let i = 0;
    foam.map((element) =>
      gsap.fromTo(
        `.foam${i++}`,
        {
          y: "random(-3, 0)",
        },
        {
          y: "random(0, 3)",
          delay: "random(0.3, 3)",
          duration: 4,
          ease: "bounce",
          repeat: 0,
        }
      )
    );

    gsap.to("#liquid", { duration: 2, height: beerLevel });
  }, [beerLevel, bubbles, foam, props.amountSold]);

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
