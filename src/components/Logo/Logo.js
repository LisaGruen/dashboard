// Logo Animation Lottie
import React, { Component, useState, useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/lottifiles/data08.json";

function Logoanimation() {
  const [isPaused, setisPaused] = useState(false);
  const [isStopped, setisStopped] = useState(false);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const buttonStyle = {
    display: "block",
    margin: "10px auto",
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={350}
        width={350}
        isPaused={isPaused}
        isStopped={isStopped}
        eventListeners={[
          {
            eventName: "complete",
            callback: () => {
              console.log("hiii");

              setTimeout(() => {
                setisStopped(true);
                setisStopped(false);
              }, 50000);
            },
          },
        ]}
      />
    </div>
  );
}

export default Logoanimation;
