import React from "react";

import MenuIcon from "../svg/menu.svg";
import VolumeIcon from "../svg/volume.svg";
import MuteIcon from "../svg/mute.svg";

class PlaybackControls extends React.Component {
  render() {
    return (
      <div className="playback-controls">
        <button className="playback-button icon-menu">
          <MenuIcon width={50} />
        </button>
        <button className="playback-button icon-volume">
          <VolumeIcon width={50} />
        </button>
        <div className="volume-bar" />
      </div>
    );
  }
}

export default PlaybackControls;
