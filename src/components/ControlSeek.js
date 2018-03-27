import React from "react";

class ControlSeek extends React.Component {

  handleChange = (event) => {
    this.props.trackSeek(event.currentTarget.value);
  };

  render() {
    return (
      <input
        type="range"
        min="0"
        max={this.props.trackDuration}
        value={this.props.trackTime}
        step="any"
        onChange={this.handleChange}
      />
    );
  }
}

export default ControlSeek;
