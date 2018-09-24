import React from "react";
import ReactDOM from "react-dom";
import TicTacToe from "./TicTacToe";

import { store } from "../../store/index.js";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TicTacToe store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
