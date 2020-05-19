import React, { useEffect, useState } from "react";
import CreateElements from "../../modules/CreateElements";
import gsap from "gsap";

export default React.memo(function Confetti(props) {
  const [confettis, setconfettis] = useState([]);

  //setconfettielement
  const confetiCount = 30;
  useEffect(() => {
    setconfettis(CreateElements(confetiCount, "confetti"));
  }, []);

  //confetti animation
  useEffect(() => {
    confettis.forEach((item) => {
      const classSelectname = item.props.className.split(" ")[1];
      gsap.to(`.${classSelectname}`, {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        backgroundColor: gsap.utils.random([
          "red",
          "blue",
          "green",
          "yellow",
          "orange",
        ]),
        ease: "linear",
        duration: "random(0.3, 3)",
        repeat: 0,
      });
    });
  }, [props.topThreebeers, confettis]);

  return <>{confettis}</>;
});
