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

  //when you click on a card the player is taken out of the array
  imageClick = event => {
    const currentPlayer = event.target.alt;
    const playerPreviouslySelected = this.state.clickedPlayer.indexOf(currentPlayer) > -1;

    // PRACTICE SWITCHES HERE!!!!!!!!
    // switch (playerPreviouslySelected) {
    //   case playerPreviouslySelected:
    //   //alert(currentPlayer)

    //     this.setState({
    //       player: this.state.players.sort( (a, b) =>  {
    //         return 0.5 - Math.random();
    //       }),
    //       clickedPlayer: this.state.clickedPlayer.concat(
    //         currentPlayer
    //       ),
    //       score: this.state.score + 1
    //     });
    //     break;
    //   default:
    //     this.setState({
    //       player: this.state.players.sort((a, b) =>  {
    //         return 0.5 - Math.random();
    //       }),
    //       clickedPlayer: [],
    //       score: 0
    //     });
    //     alert(currentPlayer)
    //     alert("loser");
    // }
    // switch (this.state.score) {
    //   case 12:
    //     alert("Winner");
    //     this.setState({
    //       player: this.state.players.sort((a, b) =>  {
    //         return 0.5 - Math.random();
    //       }),
    //       clickedPlayer: [],
    //       score: 0
    //     });
    //     break;
    //   default:
    //     console.log(this.state.score);
    // }


    if (playerPreviouslySelected) {
      this.setState({
        player: this.state.players.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedPlayer: [],
        score: 0
      });
      //alert(this.state.score)
      //alert("You lose. Play again?");
    }
    else if (!playerPreviouslySelected) {
      //alert(this.state.score)
      this.setState({
        player: this.state.players.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedPlayer: this.state.clickedPlayer.concat(
          currentPlayer
        ),
        score: this.state.score + 1
      });
    }

    if (this.state.score === 12) {
      //alert(this.state.score)

      alert("Winner!");
      this.setState({
        player: this.state.players.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedPlayer: [],
        score: 0
      });
    }

  }


  render() {
    return (
      <div>
        <Navbar
          score={this.state.score} />
        <Jumbotron />
        <div className="board">
          {this.state.players.map(player => (
            <MemoryCard
              imageClick={this.imageClick}
              id={player.id}
              key={player.id}
              image={player.image}
              name={player.name}
            />
          ))}
        </div>

      </div>
    );
  }
}

export default App;
