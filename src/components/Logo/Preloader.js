// Logo Animation Lottie
import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/lottifiles/data08.json";

class Preloader extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div>
        <Lottie options={defaultOptions} height={350} width={350} />
      </div>
    );
  }
}

export default Preloader;
