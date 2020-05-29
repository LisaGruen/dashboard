import React from "react";

class Logo extends React.Component {
  render() {
    return (
      <div>
        <img
          className="Logo"
          style={{ width: 200 }}
          width="150"
          height="150"
          src={require(`../../assets/icons/logo.png`)}
          alt="Logo"
        />
      </div>
    );
  }
}

export default Logo;
