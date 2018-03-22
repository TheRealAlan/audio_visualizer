import React from "react";

class TrackInfo extends React.Component {
  render() {
    return (
      <div className="track-info">
        <img className="track-info__art" src="http://via.placeholder.com/400x400" alt="" />
        <div className="track-info__copy">
          <h3 className="track-title">Unknown Title</h3>
          <h4 className="track-artist">Unkown Artist</h4>
        </div>
      </div>
    );
  }
}

export default TrackInfo;
