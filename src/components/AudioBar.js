import React from "react";

import TrackInfo from "./TrackInfo";
import TrackControls from "./TrackControls";
import PlaybackControls from "./PlaybackControls";

class AudioBar extends React.Component {
  render() {
    return (
      <div className="audio-bar">
        <TrackInfo />
        <TrackControls />
        <PlaybackControls />
      </div>
    );
  }
}

export default AudioBar;
