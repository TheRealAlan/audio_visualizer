import React from "react";

import Visualizer from "./components/Visualizer";
import AudioBar from "./components/AudioBar";

import soundFile from "./tracks/Broke_For_Free_-_01_-_Night_Owl.mp3";

class AudioVisualizer extends React.Component {
  render() {
    return (
      <div>
        <Visualizer />
        <AudioBar />
      </div>
    );
  }
}

export default AudioVisualizer;
