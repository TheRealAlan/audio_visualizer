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
          <button className="control-button">
            <MenuIcon />
          </button>
          <button className="control-button">
            <VolumeIcon />
          </button>
          <ControlBar />
        </div>
      </div>
    );
  }
}

export default PlaybackControls;
