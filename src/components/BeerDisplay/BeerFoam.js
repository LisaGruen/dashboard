import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default React.memo(function BeerFoam(props) {
  const svgRef = useRef();
  const [loaded, setloaded] = useState(false);
  const [fillColorStatus, setfillColorStatus] = useState("#68cd4e");

  useEffect(() => {
    const heightSVG = svgRef.current.clientHeight;
    const positionY = (heightSVG * props.levelOntap) / 2500;
    gsap.to(`.theSquare${props.id}`, {
      y: heightSVG - positionY,
      duration: 3,
      ease: "linear",
      repeat: 0,
    });
    changeFillColor(props.id, fillColorStatus);
  }, [fillColorStatus, loaded, props.id, props.levelOntap, props.name]);

  useEffect(() => {
    const fillColor =
      props.levelOntap > 1700
        ? "#68cd4e"
        : props.levelOntap > 1000
        ? "#ecf778"
        : "#ff6860";

    console.log(fillColor);

    setfillColorStatus(fillColor);
  }, [props.levelOntap]);

  return (
    <svg
      ref={svgRef}
      width={300}
      height={150}
      style={{ position: "absolute" }}
      viewBox="0 0 421.875 198.377">
      <defs>
        <filter
          x={0}
          y={0}
          width={300}
          height={150}
          filterUnits="userSpaceOnUse">
          <feOffset dx={10} dy={10} />
          <feGaussianBlur stdDeviation={10} result="blur" />
          <feFlood floodOpacity={0.161} />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>

      <defs>
        <clipPath id={"theClipPath" + props.id}>
          <rect
            className={`theSquare${props.id}`}
            x="0"
            y="12"
            width="500"
            height="500"
            fill="red"
          />
        </clipPath>
      </defs>

      <path
        data-name="Path 50"
        d="M170.06 143.094c-11.741 20.816-47.719 20.343-59.231-1.3-9.754 9.261-21.63 17.278-35.7 15.31-14.037-1.993-33.2-13.985-29.815-30.127-27.561 10.29-32.065-24.608-16.223-40.175 3.233-5.733 12.781-6.444 15.2-10.917-7.4-10.159-6.266-24.978 1.584-34.614 10.687-11.663 29.974-16.648 44.176-8.845 5.022 1.028 8.758 14.169 11.548 8.52 6.808-10.177 19.024-18.5 31.687-15.235 9.515.8 19.679 6.535 22.734 15.951 12.9-19.081 44.713-27.5 61.326-9.144 7.128 10.938 5.262 18.841 15.147 4.977 11.182-8.256 35.267-12.758 44.219.328 3.915 16.374 18.446-10.417 29.021-12.733 13.854-10 38.52-5.341 38.31 14.647 15.775.26 43.863-3.763 30.582 29.5 6.031 8.129 13.143 18.971-.911 30.971-4.862 8.924-13.424 16.315-23.384 18.87-3 6.363-5.086 16.359-11.945 21.082-17.87 7.569-39.956 4.432-51.341-11.963-2.778 7.635-13.055 10.032-20.047 12.661a43.08 43.08 0 01-31.257-3.876c-9.891 22.458-50.738 27.618-65.68 6.112z"
        fill="white"
      />

      <g
        id={"clipPathReveal" + props.id}
        clipPath={`url(#theClipPath${props.id})`}>
        <path
          className={"pathFoam" + props.id}
          fill="#fff"
          data-name="Path 50"
          d="M170.06 143.094c-11.741 20.816-47.719 20.343-59.231-1.3-9.754 9.261-21.63 17.278-35.7 15.31-14.037-1.993-33.2-13.985-29.815-30.127-27.561 10.29-32.065-24.608-16.223-40.175 3.233-5.733 12.781-6.444 15.2-10.917-7.4-10.159-6.266-24.978 1.584-34.614 10.687-11.663 29.974-16.648 44.176-8.845 5.022 1.028 8.758 14.169 11.548 8.52 6.808-10.177 19.024-18.5 31.687-15.235 9.515.8 19.679 6.535 22.734 15.951 12.9-19.081 44.713-27.5 61.326-9.144 7.128 10.938 5.262 18.841 15.147 4.977 11.182-8.256 35.267-12.758 44.219.328 3.915 16.374 18.446-10.417 29.021-12.733 13.854-10 38.52-5.341 38.31 14.647 15.775.26 43.863-3.763 30.582 29.5 6.031 8.129 13.143 18.971-.911 30.971-4.862 8.924-13.424 16.315-23.384 18.87-3 6.363-5.086 16.359-11.945 21.082-17.87 7.569-39.956 4.432-51.341-11.963-2.778 7.635-13.055 10.032-20.047 12.661a43.08 43.08 0 01-31.257-3.876c-9.891 22.458-50.738 27.618-65.68 6.112z"
        />
      </g>
    </svg>
  );
});

const changeFillColor = (id, fillColorStatus) => {
  gsap.to(`.pathFoam${id}`, {
    fill: fillColorStatus,
    duration: 1,
    ease: "linear",
    repeat: 0,
  });
};
