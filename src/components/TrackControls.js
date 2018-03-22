import React from "react";

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
            <ShuffleIcon height={20} />
          </button>
          <button className="control-button">
            <PreviousIcon height={20} />
          </button>
          <button className="control-button control-button__play">
            <PlayIcon width={50} />
          </button>
          <button className="control-button">
            <NextIcon height={20} />
          </button>
          <button className="control-button">
            <LoopIcon height={20} />
          </button>
        </div>
        <div className="track-controls__bar">
          <div className="control-time">0:00</div>
          <div className="control-bar" />
          <div className="control-length">0:00</div>
        </div>
      </div>
    );
  }
}

export default TrackControls;
