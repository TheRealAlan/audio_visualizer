import React from "react";

import TrackInfo from "./TrackInfo";
import TrackControls from "./TrackControls";
import PlaybackControls from "./PlaybackControls";

class AudioBar extends React.Component {
  render() {
    return (
      <div className="audio-bar">
        <TrackInfo />
        <TrackControls
          togglePlay={this.props.clickPlay}
          toggleShuffle={this.props.toggleShuffle}
          toggleLoop={this.props.toggleLoop}
          nextTrack={this.props.nextTrack}
          previousTrack={this.props.previousTrack}
          isPlaying={this.props.isPlaying}
          isLooping={this.props.isLooping}
          isShuffling={this.props.isShuffling}
        />
        <PlaybackControls
          toggleQueue={this.props.toggleQueue}
          toggleMute={this.props.toggleMute}
          queueOpen={this.props.queueOpen}
          isMuted={this.props.isMuted}
        />
      </div>
    );
  }
}

export default AudioBar;
