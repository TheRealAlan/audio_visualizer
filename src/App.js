import React, { Component } from 'react';
import './css/app.css';

import soundFile from './tracks/Broke_For_Free_-_01_-_Night_Owl.mp3';

class AudioVisualizer extends Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
      <section className="App">
        <section
          className="🔈"
          data-demo="analyzer"
        >

          <audio
            crossOrigin="anonymous"
            controls
          >
            <source src={soundFile} />
          </audio>
{/*
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
          />*/}

          <canvas
            width="400"
            height="400">
          </canvas>

        </section>
      </section>
    );
  }
}

export default AudioVisualizer;
