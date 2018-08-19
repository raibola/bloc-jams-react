import React, { Component } from 'react';
import '../index.css';
 
class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">
        <section id="buttons">
        <button id="previous" onClick={this.props.handlePrevClick}>
             <span className="ion-skip-backward"></span>
           </button>
           <button id="play-pause" onClick={this.props.handleSongClick} >
           <span className={this.props.isPlaying ? "ion-pause" : "ion-play"}></span>
           </button>
           <button id="next" onClick={this.props.handleNextClick}>
             <span className="ion-skip-forward"></span>
           </button>
         </section>
         <section id="time-control">
         <div className="current-time"></div>
           <span>{this.props.formatTime(this.props.currentTime)}</span><input 
             type="range" 
             className="seek-bar" 
             value={(this.props.currentTime / this.props.duration) || 0} 
             max="1" 
             min="0" 
             step="0.01" 
             onChange={this.props.handleTimeChange}
           /><span>{this.props.formatTime(this.props.duration)}</span>    
         <div className="total-time"></div>
         </section>
         <section id="volume-control">
          <div className="volume-low"></div>
            <span className="icon ion-volume-low" /><input 
             type="range" 
             className="seek-bar" 
             value={this.props.currentVolume}
             max="1.0" 
             min="0.0"
             step="0.01"
             onChange={this.props.handleVolumeChange}
                    /><span className="icon ion-volume-high" /> 
          <div className="volume-high"></div>
         </section>
      </section>
    );
  }
}

export default PlayerBar;