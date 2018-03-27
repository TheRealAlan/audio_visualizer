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
          togglePlay={this.props.togglePlay}
          toggleShuffle={this.props.toggleShuffle}
          toggleLoop={this.props.toggleLoop}
          nextTrack={this.props.nextTrack}
          previousTrack={this.props.previousTrack}
          trackSeek={this.props.trackSeek}
          isPlaying={this.props.isPlaying}
          isLooping={this.props.isLooping}
          isShuffling={this.props.isShuffling}
          trackDuration={this.props.trackDuration}
          trackTime={this.props.trackTime}
        />
        <PlaybackControls
          toggleQueue={this.props.toggleQueue}
          toggleMute={this.props.toggleMute}
          queueOpen={this.props.queueOpen}
          isMuted={this.props.isMuted}
          volume={this.props.volume}
          changeVolume={this.props.changeVolume}
        />
      </div>
    );
  }
}

export default AudioBar;
