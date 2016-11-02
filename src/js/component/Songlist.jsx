import React, {Component} from 'react';
import Song from './Song.jsx';

class Songlist extends React.Component {
  renderSong(song) {
  	return (<Song value={song}/>);
  };

  render() {
    return (
    <div className="panel panel-default table">
        <div className="list-group">
        {this.renderSong({name: 'Gorillaz - Clint Eastwood', duration: '3:53'})}
        {this.renderSong({name: 'Crystal Castles - Empathy', duration: '3:53'})}
        {this.renderSong({name: 'Enter Shikary - Redshift', duration: '3:53'})}
        </div>
    </div>
    );
  }
}

export default Songlist;