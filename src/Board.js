import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Circle from './Circle';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      circles: Array(42).fill(null),
      redIsNext: true,
      btnArr: Array(7).fill(null)
    };
  }

  handleClick(event) {
    let btnArr = this.state.btnArr.slice();
    console.log('event', event);
    if (this.state.btnArr[event.target.name] === "truthy") {
      return;
    }
    const columnNumber = event.target.name;
    const circles = this.state.circles.slice();
    let arr;

    switch (columnNumber) {
      case "1":
        arr = [35, 28, 21, 14, 7, 0];
        break;
      case "2":
        arr = [36, 29, 22, 15, 8, 1];
        break;
      case "3":
        arr = [37, 30, 23, 16, 9, 2];
        break;
      case "4":
        arr = [38, 31, 24, 17, 10, 3];
        break;
      case "5":
        arr = [39, 32, 25, 18, 11, 4];
        break;
      case "6":
        arr = [40, 33, 26, 19, 12, 5];
        break;
      case "7":
        arr = [41, 34, 27, 20, 13, 6];
        break;
    }
    const endOfColumnCheck = [0, 1, 2, 3, 4, 5, 6];
    let circleToFill = arr.find((number) => {
      if (endOfColumnCheck.includes(number)) {
        // disable btn
        btnArr[number] = "truthy";
        this.setState({
          btnArr
        });
      }
      return circles[number] === null;
    });
    circles[circleToFill] = this.state.redIsNext ? "circle-red" : "circle-black";
    console.log('circles[circleToFill]', circles[circleToFill] );
    this.setState({
      circles: circles,
      redIsNext: !this.state.redIsNext
    });
  }

  renderCircle(i) {
    return (
      <Circle value={this.state.circles[i]} redIsNext={this.state.redIsNext} />
    );
  }

  resetGame = () => {
      this.setState({
        circles: Array(42).fill(null),
        redIsNext: true,
        btnArr: Array(7).fill(null)
      })
  }

  render() {
    let status;
    status =
      (this.state.redIsNext ? `Player one's` : `Player two's`) + " " + "turn:";
    return (
      <div>
        <div className="status">{status}</div>
        <div className="buttons">
          <button
            name="1"
            className={
              this.state.btnArr["1"] ? "drop-btn-disabled" : "drop-btn"
            }
            onClick={(event) => this.handleClick(event)}
          >
            DROP
          </button>
          <button
            name="2"
            className={
              this.state.btnArr["2"] ? "drop-btn-disabled" : "drop-btn"
            }
            onClick={(event) => this.handleClick(event)}
          >
            DROP
          </button>
          <button
            name="3"
            className={
              this.state.btnArr["3"] ? "drop-btn-disabled" : "drop-btn"
            }
            onClick={(event) => this.handleClick(event)}
          >
            DROP
          </button>
          <button
            name="4"
            className={
              this.state.btnArr["4"] ? "drop-btn-disabled" : "drop-btn"
            }
            onClick={(event) => this.handleClick(event)}
          >
            DROP
          </button>
          <button
            name="5"
            className={
              this.state.btnArr["5"] ? "drop-btn-disabled" : "drop-btn"
            }
            onClick={(event) => this.handleClick(event)}
          >
            DROP
          </button>
          <button
            name="6"
            className={
              this.state.btnArr["6"] ? "drop-btn-disabled" : "drop-btn"
            }
            onClick={(event) => this.handleClick(event)}
          >
            DROP
          </button>
          <button
            name="7"
            className={
              this.state.btnArr["7"] ? "drop-btn-disabled" : "drop-btn"
            }
            onClick={(event) => this.handleClick(event)}
          >
            DROP
          </button>
        </div>
        <div className="board-row board-row-1">
          {this.renderCircle(0)}
          {this.renderCircle(1)}
          {this.renderCircle(2)}
          {this.renderCircle(3)}
          {this.renderCircle(4)}
          {this.renderCircle(5)}
          {this.renderCircle(6)}
        </div>
        <div className="board-row board-row-2">
          {this.renderCircle(7)}
          {this.renderCircle(8)}
          {this.renderCircle(9)}
          {this.renderCircle(10)}
          {this.renderCircle(11)}
          {this.renderCircle(12)}
          {this.renderCircle(13)}
        </div>
        <div className="board-row board-row-3">
          {this.renderCircle(14)}
          {this.renderCircle(15)}
          {this.renderCircle(16)}
          {this.renderCircle(17)}
          {this.renderCircle(18)}
          {this.renderCircle(19)}
          {this.renderCircle(20)}
        </div>
        <div className="board-row board-row-4">
          {this.renderCircle(21)}
          {this.renderCircle(22)}
          {this.renderCircle(23)}
          {this.renderCircle(24)}
          {this.renderCircle(25)}
          {this.renderCircle(26)}
          {this.renderCircle(27)}
        </div>
        <div className="board-row board-row-5">
          {this.renderCircle(28)}
          {this.renderCircle(29)}
          {this.renderCircle(30)}
          {this.renderCircle(31)}
          {this.renderCircle(32)}
          {this.renderCircle(33)}
          {this.renderCircle(34)}
        </div>
        <div className="board-row board-row-6">
          {this.renderCircle(35)}
          {this.renderCircle(36)}
          {this.renderCircle(37)}
          {this.renderCircle(38)}
          {this.renderCircle(39)}
          {this.renderCircle(40)}
          {this.renderCircle(41)}
        </div>
        <button className="reset-btn buttons" onClick={() => this.resetGame()}>RESET</button>
      </div>
    );
  }
}
// ReactDOM.render(<App />, document.getElementById('app'));
export default Board;
