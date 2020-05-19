import React from "react";

function Atwork() {
  return (
    <article>
      <Bartender bartenderName="Jonas" />
      <Face />
      <Customer />
      <Bartender bartenderName="Peter" />
      <Bartender bartenderName="Dannie" />
    </article>
  );
}

function Bartender(props) {
  return <h1>Bartender {props.bartenderName}</h1>;
}

function Face() {
  return (
    <img
      style={{ width: 100 }}
      src={`../../assets/icons/bartenderDannie.svg`}
      alt=""
    />
  );
}

function Customer() {
  return <h1>No. </h1>;
}

export default Atwork;
