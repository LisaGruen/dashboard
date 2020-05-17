import React, { useEffect, useState } from "react";
import "./hapyness.css";
export default function HappynessBar() {
  const [bubbles, setbubbles] = useState(null);
  const n = 5;
  useEffect(() => {
    setbubbles(
      [...Array(n)].map((e, i) => (
        <div
          key={i}
          className={`bubble bubble${i}`}
          style={{
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3}s`,
          }}></div>
      ))
    );
  }, []);

  return (
    <div id="container">
      <div className="pour"></div>
      <h2 className=" hapLevel">Happyness level</h2>

      <div id="beaker">
        <div className="beer-foam">
          <div className="foam-1"></div>
          <div className="foam-2"></div>
          <div className="foam-3"></div>
          <div className="foam-4"></div>
          <div className="foam-5"></div>
          <div className="foam-6"></div>
          <div className="foam-7"></div>
        </div>

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
