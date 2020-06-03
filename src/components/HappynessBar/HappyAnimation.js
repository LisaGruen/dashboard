import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/lottifiles/datacheers.json";

export default React.memo(function HappyAnimation(props) {
  const [displayValue, setdisplayValue] = useState("none");
  const [StopShowing, setStopShowing] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    if (StopShowing) {
      return;
    } else if (
      props.amountSold > props.maxBeakerHeight * 10 &&
      displayValue === "none"
    ) {
      setdisplayValue("flex");
      setTimeout(() => {
        setdisplayValue("none");
        setStopShowing(true);
      }, 7000);
    }
  }, [StopShowing, displayValue, props.amountSold, props.maxBeakerHeight]);

  return (
    <div style={{ display: displayValue }} className="beerMeterFull">
      <h1>
        More beers less tears We did it! <br /> The happiness bar is full!
      </h1>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
});
