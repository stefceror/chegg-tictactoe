import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TicTacToe from "./components/tic_tac_toe/TicTacToe.js";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { store } from "./store/index.js";

ReactDOM.render(
  <Provider store={store}>
    <TicTacToe />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
