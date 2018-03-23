import React from "react";

import Visualizer from "./Visualizer";
import AudioBar from "./AudioBar";
import QueueList from "./QueueList";

import soundFile from "../tracks/Broke_For_Free_-_01_-_Night_Owl.mp3";

class AudioVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      isShuffling: false,
      isLooping: false,
      isMuted: false,
      queueOpen: false,
      queue: {},
    };
  }

  togglePlay = () => {
    this.setState(prevState => ({
      isPlaying: !prevState.isPlaying,
    }));
  };

  toggleShuffle = () => {
    this.setState(prevState => ({
      isShuffling: !prevState.isShuffling,
    }));
  };

  toggleLoop = () => {
    this.setState(prevState => ({
      isLooping: !prevState.isLooping,
    }));
  };

  toggleMute = () => {
    this.setState(prevState => ({
      isMuted: !prevState.isMuted,
    }));
  }

  toggleQueue = () => {
    this.setState(prevState => ({
      queueOpen: !prevState.queueOpen,
    }));
  }

  nextTrack = () => {
    console.log("Next Track");
  };

  previousTrack = () => {
    console.log("Previous Track");
  };

  addToQueue = () => {
    
  };

  render() {
    return (
      <div>
        <Visualizer />
        <AudioBar
          togglePlay={this.togglePlay}
          toggleShuffle={this.toggleShuffle}
          toggleLoop={this.toggleLoop}
          toggleMute={this.toggleMute}
          toggleQueue={this.toggleQueue}
          nextTrack={this.nextTrack}
          previousTrack={this.previousTrack}
          isPlaying={this.state.isPlaying}
          isShuffling={this.state.isShuffling}
          isLooping={this.state.isLooping}
          isMuted={this.state.isMuted}
          queueOpen={this.state.queueOpen}
        />
        <QueueList
          queueOpen={this.state.queueOpen}
        />
      </div>
    );
  }
}

export default AudioVisualizer;
