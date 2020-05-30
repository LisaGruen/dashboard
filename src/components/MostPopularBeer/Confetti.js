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
      const tl = gsap.timeline({ repeat: 0 });
      tl.to(`.${classSelectname}`, {
        x: "random(-50, 50)",
        y: 0,
        backgroundColor: "transparent",
        duration: "random(0.3, 2)",
        ease: "slow",
      });
      tl.to(`.${classSelectname}`, {
        x: "random(-50, 50)",
        y: "random(200, 100)",
        backgroundColor: gsap.utils.random([
          "red",
          "blue",
          "green",
          "yellow",
          "orange",
        ]),
        duration: "random(0.3, 2)",
        ease: "slow",
        opacity: 1,
      });
      tl.to(`.${classSelectname}`, {
        opacity: 0,
        duration: "random(0.3, 2)",
        ease: "slow",
      });
      tl.to(`.${classSelectname}`, {
        opacity: 0,
        duration: 0.1,
        y: 0,
      });
    });
  }, [props.topThreebeers, confettis]);

  return <>{confettis}</>;
});
