import { createStore, combineReducers } from "redux";
import { ticTacToeReducer } from "../components/tic_tac_toe/reducers/reducers.js";

export const store = createStore(
  combineReducers({
    game: ticTacToeReducer
  })
);
