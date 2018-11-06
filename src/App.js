import React, { Component } from 'react';
import './App.css';
import Jumbotron from './components/jumbotron/jumbotron';
import MemoryCard from "./components/MemoryCard";
import players from "./players.json";
import Navbar from './components/Navbar';

class App extends Component {

  state = {
    players,
    clickedPlayer: [],
    score: 0
  };

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <div className="board">
          {this.state.players.map(player => (
            <MemoryCard
              imageClick={this.imageClick}
              id={player.id}
              key={player.id}
              image={player.image}
            />
          ))}
        </div>

      </div>
    );
  }
}

export default App;
