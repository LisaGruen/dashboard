import React from "react";

class Announcement extends React.Component {
  render() {
    return (
      <div className="wrapper">
        {" "}
        <h2>ANNOUNCEMENT</h2>
        <div className="wrapperInside">
          <h3>Every Friday 6 PM</h3>
          <h2>HAPPY HOUR</h2>
        </div>
      </div>
    );
  }
}

export default Announcement;
