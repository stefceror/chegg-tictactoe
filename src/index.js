import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TicTacToe from "./components/tic_tac_toe/TicTacToe.js";
import registerServiceWorker from "./registerServiceWorker";

import { store } from "./store/index.js";

ReactDOM.render(<TicTacToe store={store} />, document.getElementById("root"));
registerServiceWorker();
