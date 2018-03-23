import React from "react";

import ControlBar from "./ControlBar";

import MenuIcon from "../svg/menu.svg";
import VolumeIcon from "../svg/volume.svg";
import MuteIcon from "../svg/mute.svg";

class PlaybackControls extends React.Component {
  render() {
    return (
      <div className="playback-controls">
        <div className="playback-controls__inner">
          <button
            className={`control-button ${this.props.queueOpen ? 'is-active' : ''}`}
            onClick={this.props.toggleQueue}
          >
            <MenuIcon/>
          </button>
          <button
            className="control-button"
            onClick={this.props.toggleMute}
          >
            {this.props.isMuted ? <MuteIcon/> : <VolumeIcon />}
          </button>
          <ControlBar />
        </div>
      </div>
    );
  }
}

export default PlaybackControls;
