import React from "react";
import { render } from "react-dom";

import AudioVisualizer from "./components/AudioVisualizer";
import registerServiceWorker from "./registerServiceWorker";

import "normalize.css";
import "./css/app.css";

const Root = () => {
  return <AudioVisualizer />;
};

render(<Root />, document.getElementById("root"));

registerServiceWorker();
