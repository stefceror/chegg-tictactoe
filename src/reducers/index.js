const initialState = {
  board: [[null, null, null], [null, null, null], [null, null, null]],
  currentPlayer: "X",
  numberOfMoves: 0,
  gameEnded: false,
  gameWon: false
};

const checkIfMoveValid = (state, move) => {
  if (!state.gameEnded && !state.board[move.i][move.j]) {
    return true;
  } else {
    return false;
  }
};

const updateGameBoard = (state, move) => {
  const board = [...state.board];
  board[move.i][move.j] = state.currentPlayer;
  return board;
};

const checkForGameEnd = state => {
  let gameWon = false;
  let gameEnded = false;

  const board = state.board;
  // Check for wins along the diagonals
  if (
    (board[0][0] &&
      board[0][0] === board[1][1] &&
      board[0][0] === board[2][2]) ||
    (board[2][0] && board[2][0] === board[1][1] && board[2][0] === board[0][2])
  ) {
    gameWon = true;
    gameEnded = true;
  } else {
    //Check for wins on a row or column
    board.forEach((row, i, board) => {
      if (
        (row[0] && row[0] === row[1] && row[1] === row[2]) ||
        (board[0][i] &&
          board[0][i] === board[1][i] &&
          board[1][i] === board[2][i])
      ) {
        gameWon = true;
        gameEnded = true;
      }
    });
  }

  if (state.numberOfMoves === 8) {
    gameEnded = true;
  }
  console.log(gameWon, gameEnded);
  return { gameWon, gameEnded };
};

const switchCurrentPlayer = state => {
  if (state.currentPlayer === "X") {
    return "O";
  } else {
    return "X";
  }
};

const updateGameState = (state, move) => {
  if (checkIfMoveValid(state, move)) {
    const numberOfMoves = state.numberOfMoves + 1;
    const board = updateGameBoard(state, move);
    const { gameWon, gameEnded } = checkForGameEnd(state);
    const currentPlayer = switchCurrentPlayer(state);
    return { currentPlayer, board, numberOfMoves, gameWon, gameEnded };
  } else {
    return state;
  }
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_GAME":
      return updateGameState(state, action.payload);
    default:
      return state;
  }
};
