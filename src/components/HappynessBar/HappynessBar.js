import React, { useEffect, useState, useRef } from "react";
import "./hapyness.css";
export default function HappynessBar(props) {
  const [bubbles, setbubbles] = useState(null);
  const [foam, setfoam] = useState(null);
  const [beerLevel, setbeerLevel] = useState(0);
  const bubbleCount = 5;
  const foamCount = 8;

  function animateElements(count, elementClass) {
    return [...Array(count)].map((e, i) => (
      <div
        key={i}
        className={`${elementClass} ${elementClass}${i}`}
        style={{
          animationDelay: `${Math.random() * 5 + 0.3}s`,
          animationDuration: `${Math.random() * 3 + 0.3}s`,
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
    const heightBeer =
      props.amountSold > 2500
        ? 1
        : props.amountSold > 2000
        ? 0.9
        : props.amountSold > 1500
        ? 0.7
        : props.amountSold > 1000
        ? 0.4
        : props.amountSold > 500
        ? 0.2
        : 0;

    liquidRef.current.style.setProperty("--percentedge", heightBeer);
    beerFoamref.current.style.setProperty("--percentedge", heightBeer);
    happynessRef.current.dataset.beerfill = heightBeer;
  }, [props.amountSold]);

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
    </div>
  );
}
