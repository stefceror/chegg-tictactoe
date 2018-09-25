import { createStore, combineReducers } from "redux";
import { ticTacToeReducer } from "../reducers/index.js";

export const store = createStore(
  combineReducers({
    game: ticTacToeReducer
  })
);
