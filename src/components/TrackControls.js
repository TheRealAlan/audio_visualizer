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
          <button className="control-button">
            <ShuffleIcon />
          </button>
          <button className="control-button">
            <PreviousIcon />
          </button>
          <button className="control-button control-button__play">
            <PlayIcon />
          </button>
          <button className="control-button">
            <NextIcon />
          </button>
          <button className="control-button">
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
