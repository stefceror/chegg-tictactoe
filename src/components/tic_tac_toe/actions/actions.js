export const updateGameState = move => ({
  type: "UPDATE_GAME",
  payload: move
});

export const resetGame = () => ({
  type: "RESET_GAME"
});
