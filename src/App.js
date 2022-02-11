import './App.css';
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Board from './Board'

class App extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById('app'));
export default App;
