import React from "react";
// import * as THREE from "three";

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
        ctx.lineTo(0, 768);
        frequencies.forEach((f, i) => ctx.lineTo(i, 768 - f));
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
        const barWidth = (width / bufferLength) * 2.5;
        let barHeight = 0;
        let x = 0;

        analyzer.getByteFrequencyData(dataArray);
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(0, 0, width, height);

        for (let i = 0; i < bufferLength; i++) {
          barHeight = dataArray[i] * 4;
          ctx.fillStyle = `rgb(${barHeight + 100},255,0)`;
          ctx.fillRect(x, height - barHeight, barWidth, barHeight);
          x += barWidth + 1;
        };
      };

      draw();
    }

  //   if (this.props.currentVisualizer === "lines") {
  //     const scene = new THREE.Scene();
  //     const renderer = new THREE.WebGLRenderer({ domElement: this.refs.canvas });
  //     const width = this.refs.canvas.width;
  //     const height = this.refs.canvas.height;
  //     const camera = new THREE.PerspectiveCamera(
  //       75,
  //       width / height,
  //       1,
  //       10000
  //     );
  //     camera.position.z = 1000;
  //     renderer.setSize(width, height);
  //     // renderer.domElement = this.refs.canvas;

  //     const newLine = () => {
  //       let material = new THREE.LineBasicMaterial({
  //         color: 0x00ff00
  //       });
  //       let geometry = new THREE.Geometry();
  //       let line = new THREE.Line(geometry, material);
  //       let array = new Uint8Array(analyzer.frequencyBinCount);
  //       let Ypoints = array;
  //       let xPoint = -2048;

  //       analyzer.getByteFrequencyData(array);
  //       scene.remove(line);

  //       for (let i = 0; i < Ypoints.length; i++) {
  //         geometry.vertices.push(new THREE.Vector3(xPoint, Ypoints[i], 0));
  //         xPoint = xPoint + 4;
  //       };

  //       scene.add(line);
  //     };

  //     const draw = () => {
  //       requestAnimationFrame(draw);
  //       newLine();
  //       renderer.render(scene, camera);
  //     };

  //     draw();
  //   }
  }

  render() {
    return (
      <div>
        <canvas
          className="visualizer"
          ref="canvas"
          width={1920}
          height={1080}
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
