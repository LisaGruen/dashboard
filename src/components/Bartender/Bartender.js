import React from "react";
import "./bartender.scss";

function Atwork(props) {
  let result = props.bartenders.map((bartender) => (
    <div className="bartendercontainer">
      <h2>At the bar for you today</h2>
      <div id="container">
        <Bartender key={bartender.name} bartenderName={bartender.name} />
        <Status
          key={"status" + bartender.name}
          bartenderStatus={bartender.status}
        />
        <Face key={"face" + bartender.name} name={bartender.name} />
        <h2>Status</h2>

        <StatusDetail
          key={"detail" + bartender.name}
          bartenderDetail={bartender.statusDetail}
        />
        <servingCustomer
          key={"serving" + bartender.name}
          bartenderDetail={bartender.servingCustomer}
        />
      </div>
    </div>
  ));
  return <article>{result}</article>;
}

function Bartender(props) {
  return <h3>{props.bartenderName}</h3>;
}

function Face(props) {
  return (
    <img
      className="portrait"
      style={{ width: 100 }}
      width="100"
      height="100"
      src={require(`../../assets/icons/bartender${props.name}.svg`)}
      alt=""
    />
  );
}
function Status(props) {
  return <h3>{props.bartenderStatus}</h3>;
}
function StatusDetail(props) {
  return <h3>{props.bartenderDetail}</h3>;
}

function servingCustomer(props) {
  return <h3>{props.servingCustomer}</h3>;
}

export default Atwork;
