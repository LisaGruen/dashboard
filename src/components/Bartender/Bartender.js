import React from "react";
import "./bartender.scss";
import "../../sass/partials/layout/_main.scss";

function Atwork(props) {
  let result = props.bartenders.map((bartender) => (
    <div key={bartender.name} className="wrapperInside">
      <Bartender key={bartender.name} bartenderName={bartender.name} />

      <Face
        key={"face" + bartender.name}
        name={bartender.name}
        bartenderDetail={bartender.statusDetail}
      />
      <StatusDetail
        key={"detail" + bartender.name}
        bartenderDetail={bartender.statusDetail}
        servingCustomer={bartender.servingCustomer}
        usingTap={bartender.usingTap}
      />
      <ServingCustomer
        key={"serving" + bartender.name}
        bartenderDetail={bartender.servingCustomer}
      />
    </div>
  ));
  return (
    <div className="wrapper">
      <h2>AT THE BAR FOR YOU</h2>
      <h3>Staff working today</h3>
      <div id="bartenders">{result}</div>
    </div>
  );
}

function Bartender(props) {
  return <h2>{props.bartenderName}</h2>;
}

function Face(props) {
  const bartenderFaces = {
    Dannie_waiting: require(`../../assets/icons/bartenderDannieWaiting.png`),
    Jonas_waiting: require(`../../assets/icons/bartenderJonasWaiting.png`),
    Peter_waiting: require(`../../assets/icons/bartenderPeterWaiting.png`),
    Dannie_default: require(`../../assets/icons/bartenderDannie.png`),
    Jonas_default: require(`../../assets/icons/bartenderJonas.png`),
    Peter_default: require(`../../assets/icons/bartenderPeter.png`),
    Dannie_receivePayment: require(`../../assets/icons/bartenderDanniePayment.png`),
    Jonas_receivePayment: require(`../../assets/icons/bartenderJonasPayment.png`),
    Peter_receivePayment: require(`../../assets/icons/bartenderPeterPayment.png`),
  };

  const fk =
    props.bartenderDetail === "receivePayment" ||
    props.bartenderDetail === "waiting"
      ? props.bartenderDetail
      : "default";
  const statusFace = bartenderFaces[props.name + "_" + fk];

  return (
    <div className="portrait">
      <img width="100" height="100" src={statusFace} alt="portrait bartender" />
    </div>
  );
}

function StatusDetail(props) {
  let statusText = "";
  if (props.bartenderDetail === "pourBeer") {
    statusText = "Pouring beer for customer #" + props.servingCustomer;
  } else if (props.bartenderDetail === "waiting") {
    statusText = "Waiting!";
  } else if (props.bartenderDetail === "receivePayment") {
    statusText = "Payment from customer #" + props.servingCustomer;
  } else if (props.bartenderDetail === "releaseTap") {
    statusText = "Releasing tap #" + props.usingTap;
  } else if (props.bartenderDetail === "reserveTap") {
    statusText = "Reserving tap";
  } else if (props.bartenderDetail === "startServing") {
    statusText = "Start to serve";
  }

  return <h3>{statusText}</h3>;
}

function ServingCustomer(props) {
  return <h3>{props.servingCustomer}</h3>;
}

export default Atwork;
