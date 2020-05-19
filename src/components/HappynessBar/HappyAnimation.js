import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/lottifiles/chers.json";
// Formik
// https://assets6.lottiefiles.com/temp/lf20_8LnHcw.json

export default React.memo(function HappyAnimation(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const displayValue = props.isHappyMeterfull ? "flex" : "none";
  return (
    <div style={{ display: displayValue }} className="beerMeterFull">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
});
