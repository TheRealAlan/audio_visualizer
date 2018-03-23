import React from "react";

import ControlBar from "./ControlBar";

/**
 * Import SVG Icons
 */
import ShuffleIcon from "../svg/shuffle.svg";
import PreviousIcon from "../svg/previous.svg";
import PlayIcon from "../svg/play.svg";
import PauseIcon from "../svg/pause.svg";
import NextIcon from "../svg/next.svg";
import LoopIcon from "../svg/loop.svg";

class TrackControls extends React.Component {
  render() {
    return (
      <div className="track-controls">
        <div className="track-controls__buttons">
          <button
            className={`control-button ${this.props.isShuffling ? 'is-active' : ''}`}
            onClick={this.props.toggleShuffle}
          >
            <ShuffleIcon />
          </button>
          <button
            className="control-button"
            onClick={this.props.previousTrack}
          >
            <PreviousIcon />
          </button>
          <button
            className="control-button control-button__play"
            onClick={this.props.togglePlay}
          >
            {this.props.isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
          <button
            className="control-button"
            onClick={this.props.nextTrack}
          >
            <NextIcon />
          </button>
          <button
            className={`control-button ${this.props.isLooping ? 'is-active' : ''}`}
            onClick={this.props.toggleLoop}
          >
            <LoopIcon />
          </button>
        </div>
        <div className="track-controls__bar">
          <div className="control-time">0:00</div>
          <ControlBar />
          <div className="control-time">0:00</div>
        </div>
      </div>
    );
  }
}

export default TrackControls;
