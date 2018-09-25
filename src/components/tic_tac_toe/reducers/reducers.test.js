import { ticTacToeReducer } from "./reducers.js";

const initialState = {
  board: [[null, null, null], [null, null, null], [null, null, null]],
  currentPlayer: "X",
  numberOfMoves: 0,
  gameEnded: false,
  gameWon: false
};

describe("tic-tac-toe reducer", () => {
  it("should return the initial state", () => {
    expect(ticTacToeReducer(undefined, {})).toEqual(initialState);
  });

  it("should update the game board when a valid move is made", () => {
    expect(
      ticTacToeReducer(initialState, {
        type: "UPDATE_GAME",
        payload: { i: 0, j: 2 }
      })
    ).toEqual({
      board: [[null, null, "X"], [null, null, null], [null, null, null]],
      currentPlayer: "O",
      numberOfMoves: 1,
      gameEnded: false,
      gameWon: false
    });
  });

  it("should not update if a space is already occupied", () => {});

  describe("should switch players between X and O", () => {
    it("should switch when a valid, non game-ending move is made", () => {});
    it("should not switch when an invalid move is made", () => {});
    it("should not switch when a game-ending move is made", () => {});
  });

  it("should count the number of moves that have been made", () => {});

  it("should update that the game has ended when nine valid moves have been made", () => {});

  it("should update that the game has ended when one player wins", () => {});

  describe("win conditions", () => {
    it("should update when there is a diagonal line", () => {});

    it("should update when there is a backwards diagonal line", () => {});

    it("should update when there is a horizontal line", () => {});

    it("should update when there is a vertical line", () => {});
  });

  it("should reset the game when the reset action is emitted", () => {
    expect(
      ticTacToeReducer(initialState, {
        type: "RESET_GAME"
      })
    ).toEqual({
      board: [[null, null, null], [null, null, null], [null, null, null]],
      currentPlayer: "X",
      numberOfMoves: 0,
      gameEnded: false,
      gameWon: false
    });
  });
});
