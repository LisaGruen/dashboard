// Logo Animation Lottie
import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/lottifiles/data08.json";

export default React.memo(function Logoanimation() {
  const [isStopped, setisStopped] = useState(false);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <div className="wrapper">
        <Lottie
          options={defaultOptions}
          height={250}
          width={250}
          isStopped={isStopped}
          eventListeners={[
            {
              eventName: "complete",
              callback: () => {
                setTimeout(() => {
                  setisStopped(true);
                  setisStopped(false);
                }, 20000);
              },
            },
          ]}
        />
      </div>
    </div>
  );
});
