import React from 'react';
import './App.scss';
import Turns from './components/Turns'
import GameBoard from './components/GameBoard'

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Tic-Tac-Toe</h1>

        <div className="turns">
          <Turns />
        </div>

        <div className="game-board">
          <GameBoard />
        </div>
      </div>
    </div>
  );
}

export default App;
