import React from "react";
import { CSSTransition } from "react-transition-group";

class Options extends React.Component {
  render() {
    return (
      <CSSTransition
        in={this.props.optionsOpen}
        classNames={"slideleft"}
        timeout={250}
        unmountOnExit={true}
      >
        <div className="visualizer-options">
          <div className="visualizer-options__inner">
            {this.props.options.map(key => (
              <button
                className={`visualizer-options__item ${(this.props.currentVisualizer === key) ? 'is-active' : ''}`}
                key={key}
                onClick={() => this.props.updateVisualizer(key)}
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      </CSSTransition>
    );
  }
};

export default Options;