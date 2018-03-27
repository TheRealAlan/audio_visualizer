import React from "react";

import OptionsList from "./OptionsList";

/**
 * Import SVGs
 */
import OptionsIcon from "../svg/settings.svg"

class Visualizer extends React.Component {

  componentDidMount() {
    this.updateCanvas();
  };

  updateCanvas() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();
    const node = audioCtx.createGain();
    const analyzer = audioCtx.createAnalyser();
    const audio = this.props.currentTrack;
    const input = audioCtx.createMediaElementSource(audio);
    
    node.gain.value = this.props.volume;
    input.connect(analyzer);
    analyzer.connect(node.gain);
    analyzer.connect(audioCtx.destination);
    
    const ctx = this.refs.canvas.getContext('2d');

    if (this.props.currentVisualizer === "waves") {
      const waveform = new Uint8Array(analyzer.fftSize);
      const frequencies = new Uint8Array(analyzer.frequencyBinCount);
  
      const draw = () => {
        requestAnimationFrame(draw);
        analyzer.getByteTimeDomainData(waveform);
        analyzer.getByteFrequencyData(frequencies);
  
        ctx.strokeStyle = 'yellow';
  
        ctx.beginPath();
        waveform.forEach((f, i) => ctx.lineTo(i, f));
        ctx.lineTo(0, 255);
        frequencies.forEach((f, i) => ctx.lineTo(i, 255 - f));
        ctx.stroke();
      };
  
      draw();
    }

    if (this.props.currentVisualizer === "bars") {
      analyzer.fftSize = 256;
      const width = this.refs.canvas.width;
      const height = this.refs.canvas.height;
      const bufferLength = analyzer.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength); 

      ctx.clearRect(0, 0, width, height);

      const draw = () => {
        requestAnimationFrame(draw);

        analyzer.getByteFrequencyData(dataArray);

        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(0, 0, width, height);
        let barWidth = (width / bufferLength) * 2.5;
        let barHeight = 0;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          barHeight = dataArray[i];

          ctx.fillStyle = 'rgb(' + (barHeight + 100) + ',50,50)';
          ctx.fillRect(x, height - barHeight / 2, barWidth, barHeight / 2);

          x += barWidth + 1;
        }
      };

      draw();
    }
  }

  render() {
    return (
      <div>
        <canvas
          className="visualizer"
          ref="canvas"
        />
        <button
          className={`control-button control-button__options ${this.props.optionsOpen ? 'is-active' : ''}`}
          onClick={this.props.toggleOptions}
        >
          <OptionsIcon />
        </button>
        <OptionsList
          options={this.props.options}
          currentVisualizer={this.props.currentVisualizer}
          updateVisualizer={this.props.updateVisualizer}
          optionsOpen={this.props.optionsOpen}
        />
      </div>
    );
  }
}

export default Visualizer;
