import React, {Component} from 'react';
import SearchPanel from './SearchPanel.jsx';
import Player from './Player.jsx';
import Songlist from './Songlist.jsx';

class App extends React.Component {

  render() {
    return (
        <div>
        <Player />
        <SearchPanel />
        <Songlist />
        </div>
    );
  }
}

export default App;