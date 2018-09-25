import * as actions from "./index.js";

describe("actions", () => {
  it("should create an action to update game state", () => {
    const move = { i: 0, j: 2 };
    const expectedAction = {
      type: "UPDATE_GAME",
      payload: move
    };
    expect(actions.updateGameState(move)).toEqual(expectedAction);
  });
});
