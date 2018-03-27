import React from "react";
import { CSSTransition } from "react-transition-group";

import TrackInfo from "./TrackInfo";

class QueueList extends React.Component {
  render() {
    return (
      <CSSTransition
        in={this.props.queueOpen}
        classNames={"slideup"}
        timeout={250}
        unmountOnExit={true}
      >
        <div className="queue-list">
          <div className="queue-list__inner">
            {this.props.trackList.map(key => (
              <div
                key={key}
                className="queue-list__item"
              >
                <TrackInfo />
                <div>{key}</div>

              </div>
            ))}
          </div>
        </div>
      </CSSTransition>
    );
  }
}

export default QueueList;