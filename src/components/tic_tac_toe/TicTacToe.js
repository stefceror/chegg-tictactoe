import React, { Component } from "react";

import { connect } from "react-redux";
import { updateGameState, resetGame } from "./actions/actions.js";

import "./TicTacToe.css";

class TicTacToe extends Component {
  constructor(props) {
    super(props);

    this.markSquare = this.markSquare.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  markSquare(i, j) {
    this.props.updateGameState({ i, j });
  }

  renderGameBoard(board) {
    return board.map((row, i) => {
      return (
        <div className="TicTacToe-row" key={`${i}`}>
          {row.map((cell, j) => (
            <div
              className="TicTacToe-cell"
              onClick={this.markSquare.bind(this, i, j)}
              key={`${j}`}
            >
              {cell}
            </div>
          ))}
        </div>
      );
    });
  }

  resetGame() {
    this.props.resetGame();
  }

  renderNotification() {
    let text = "";
    if (this.props.game.gameEnded) {
      if (this.props.game.gameWon) {
        text = `${this.props.game.currentPlayer} has won!`;
      } else {
        text = "The game has ended in cat's game";
      }
      return (
        <div className="TicTacToe-ending-notification" onClick={this.resetGame}>
          {text} (Click to reset)
        </div>
      );
    } else {
      return text;
    }
  }

  render() {
    return (
      <div className="TicTacToe">
        <div className="TicTacToe-board">
          {this.renderGameBoard(this.props.game.board)}
        </div>
        {this.renderNotification()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { game: state.game };
};

const mapDispatchToProps = dispatch => {
  return {
    updateGameState: move => dispatch(updateGameState(move)),
    resetGame: () => dispatch(resetGame())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);
