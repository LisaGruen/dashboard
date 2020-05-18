import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

import "./hapyness.scss";
export default function HappynessBar(props) {
  const [bubbles, setbubbles] = useState([]);
  const [foam, setfoam] = useState([]);
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

  //animations
  useEffect(() => {
    let maxHeihtOfLiquid = props.amountSold;

    if (props.amountSold > 2400) {
      maxHeihtOfLiquid = 2400;
    }
    let f = 0;
    gsap.to("#liquid", { duration: 1, height: maxHeihtOfLiquid / 10 });
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
          repeat: 1,
        }
      )
    );

    //beer foam lifting up animation
    gsap.to(".beer-foam", {
      duration: 1.2,
      height: maxHeihtOfLiquid / 10,
    });
  }, [foam, props.amountSold]);

  const textAnimation = (amountOfBeer) =>
    props.amountSold > amountOfBeer && "happyTextAnimation";
  return (
    <div className="hapcontainer">
      <h2>HOW ARE WE TODAY?</h2>

      <div id="container">
        <div className="pour"></div>
        {/* <h2 className=" hapLevel">Happyness level</h2> */}

        <div id="beaker">
          <div className="beer-foam" ref={beerFoamref}>
            {foam}
          </div>

          <div id="liquid" ref={liquidRef}>
            {bubbles}
          </div>

          <div className="happyness-level" ref={happynessRef}>
            <div className={`${textAnimation(2200)} happyText`}>amazing</div>
            <div className={`${textAnimation(1800)} happyText`}>
              feeling lucky
            </div>
            <div className={`${textAnimation(1300)} happyText`}>great</div>
            <div className={`${textAnimation(800)} happyText`}>fine</div>
            <div className={`${textAnimation(400)} happyText`}>ok</div>
          </div>
        </div>
      </div>
      <h3>FOO BAR HAS HAPPILLY SERVED: {props.amountSold}CL</h3>
    </div>
  );
}
