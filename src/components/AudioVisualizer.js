import React from "react";
import JSMediaTags from "jsmediatags";

import Visualizer from "./Visualizer";
import AudioBar from "./AudioBar";
import QueueList from "./QueueList";

import tracklist from "../tracklist";

import song from "../tracks/Tame Impala/Currents [Explicit]/01 - Let It Happen.mp3";

class AudioVisualizer extends React.Component {
  constructor(props) {
    super(props);

    // this.getMediaTags = this.getMediaTags.bind(this);

    this.state = {
      isPlaying: false,
      isShuffling: false,
      isLooping: false,
      isMuted: false,
      queueOpen: false,
      optionsOpen: false,
      trackIndex: 10,
      trackList: tracklist,
      volume: 100,
      trackTime: 0,
      currentVisualizer: "bars",
    };

    this.options = [
      "waves",
      "bars",
      "lines",
    ];

    this.currentTrack = new Audio();
    this.trackDuration = "";
  }

  togglePlay = () => {
    this.setState(prevState => ({
      isPlaying: !prevState.isPlaying,
    }));
    this.state.isPlaying ? this.currentTrack.pause() : this.currentTrack.play();
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
    this.state.isLooping ? this.currentTrack.loop = false : this.currentTrack.loop = true;
  };

  toggleMute = () => {
    this.setState(prevState => ({
      isMuted: !prevState.isMuted,
    }));
    this.state.isMuted ? this.currentTrack.muted = false : this.currentTrack.muted = true;
  };

  toggleQueue = () => {
    this.setState(prevState => ({
      queueOpen: !prevState.queueOpen,
    }));
  };

  toggleOptions = () => {
    this.setState(prevState => ({
      optionsOpen: !prevState.optionsOpen,
    }));
  };

  updateVisualizer = (value) => {
    this.setState(prevState => ({
      currentVisualizer: value,
    }));
  }

  nextTrack = () => {
    console.log("Next Track");
  };

  previousTrack = () => {
    console.log("Previous Track");
  };

  trackSeek = (value) => {
    this.currentTrack.currentTime = value;
    this.updateTrackTime();
  };

  changeVolume = (value) => {
    this.currentTrack.volume = value;
    this.setState(prevState => ({
      volume: this.currentTrack.volume,
    }));
  };

  updateTrackTime = () => {
    this.setState(prevState => ({
      trackTime: this.currentTrack.currentTime,
    }));
  }

  getMediaTags = (url) => {
    new JSMediaTags.Reader(url)
      .setTagsToRead(["title", "artist"])
      .read({
        onSuccess: function (tag) {
          console.log(tag);
        },
        onError: function (error) {
          console.log(':(', error.type, error.info);
        }
      }
    );
  };

  componentDidMount() {
    this.currentTrack.src = song;
    this.currentTrack.addEventListener('canplay', () => {
      this.trackDuration = this.currentTrack.duration;
      // this.getMediaTags(this.currentTrack.currentSrc);
    });

    setInterval(() => {
      if (this.state.isPlaying) {
        this.setState(prevState => ({
          trackTime: this.currentTrack.currentTime
        }))
      }
    }, 1000);
  };

  render() {
    return (
      <div>
        <Visualizer 
          currentTrack={this.currentTrack}
          volume={this.state.volume}
          currentVisualizer={this.state.currentVisualizer}
          options={this.options}
          updateVisualizer={this.updateVisualizer}
          toggleOptions={this.toggleOptions}
          optionsOpen={this.state.optionsOpen}
        />
        <AudioBar
          togglePlay={this.togglePlay}
          toggleShuffle={this.toggleShuffle}
          toggleLoop={this.toggleLoop}
          toggleMute={this.toggleMute}
          toggleQueue={this.toggleQueue}
          nextTrack={this.nextTrack}
          previousTrack={this.previousTrack}
          trackSeek={this.trackSeek}
          changeVolume={this.changeVolume}
          isPlaying={this.state.isPlaying}
          isShuffling={this.state.isShuffling}
          isLooping={this.state.isLooping}
          isMuted={this.state.isMuted}
          queueOpen={this.state.queueOpen}
          trackDuration={this.trackDuration}
          trackTime={this.state.trackTime}
          volume={this.state.volume}
        />
        <QueueList
          trackList={this.state.trackList}
          queueOpen={this.state.queueOpen}
        />
      </div>
    );
  }
}

export default AudioVisualizer;
