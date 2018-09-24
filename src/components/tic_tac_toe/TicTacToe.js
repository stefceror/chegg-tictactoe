import React, { Component } from "react";

import { connect } from "react-redux";
import { updateGameState } from "../../actions/index.js";

import "./TicTacToe.css";

class TicTacToe extends Component {
  constructor(props) {
    super(props);

    this.setPlayerSymbol = this.setPlayerSymbol.bind(this);
  }

  setPlayerSymbol(i, j) {
    this.props.updateGameState({ i, j });
  }

  createGameBoard(board) {
    return board.map((row, i) => {
      return (
        <div className="TicTacToe-row" key={`${i}`}>
          {row.map((cell, j) => (
            <div
              className="TicTacToe-cell"
              onClick={this.setPlayerSymbol.bind(this, i, j)}
              key={`${j}`}
            >
              {cell}
            </div>
          ))}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="TicTacToe">{this.createGameBoard(this.props.board)}</div>
    );
  }
}

const mapStateToProps = state => {
  return { board: state.state.board };
};

const mapDispatchToProps = dispatch => {
  return { updateGameState: move => dispatch(updateGameState(move)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);
