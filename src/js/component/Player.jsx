import React, {Component} from 'react';

class Player extends React.Component {
  
  constructor() {
    super();
    this.state = {
      percentage: 20
    };
  }

  render() {
    const style = {width: this.state.percentage + "%"};
    return (
    <div className="player">
        <div className="player-icons">
            <span className="glyphicon glyphicon-backward" aria-hidden="true"></span>
            <span className="glyphicon glyphicon-play" aria-hidden="true"></span>
            <span className="glyphicon glyphicon-forward" aria-hidden="true"></span>
        </div>
        <div className="player-progress">
            <div className="progress">
                <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={style}>
                    <span className="sr-only">20% Complete</span>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Player;