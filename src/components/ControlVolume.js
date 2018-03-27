import React from "react";

class ControlVolume extends React.Component {

  handleChange = (event) => {
    this.props.changeVolume(event.currentTarget.value);
  };

  render() {
    return (
      <input
        type="range"
        min="0"
        max="1"
        value={this.props.volume}
        step="any"
        onChange={this.handleChange}
      />
    );
  }
}

export default ControlVolume;
