import React from "react";

class ControlBar extends React.Component {
  render() {
    return (
      <div className="control-bar">
        <div className="control-bar__progress" />
        <div className="control-bar__slider" />
      </div>
    );
  }
}

export default ControlBar;
