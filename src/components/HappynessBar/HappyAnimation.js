import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/lottifiles/chers.json";
// Formik
// https://assets6.lottiefiles.com/temp/lf20_8LnHcw.json

export default React.memo(function HappyAnimation(props) {
  const [displayValue, setdisplayValue] = useState("none");
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    if (props.amountSold > props.maxBeakerHeight * 10) {
      setTimeout(() => {
        setdisplayValue("flex");
      }, 700);
      setTimeout(() => {
        setdisplayValue("none");
      }, 7000);
    }
  }, [props.amountSold, props.maxBeakerHeight]);

  return (
    <div style={{ display: displayValue }} className="beerMeterFull">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
});
