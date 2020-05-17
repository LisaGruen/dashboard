import React, { useEffect, useState } from "react";
import "./hapyness.css";
export default function HappynessBar() {
  const [bubbles, setbubbles] = useState(null);
  const [foam, setfoam] = useState(null);
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

  return (
    <div id="container">
      <div className="pour"></div>
      <h2 className=" hapLevel">Happyness level</h2>

      <div id="beaker">
        <div className="beer-foam">{foam}</div>

        <div id="liquid">{bubbles}</div>

        <div className="happyness-level">
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
