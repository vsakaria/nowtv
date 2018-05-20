import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import App from "./App";
import "./index.css";
import { getChatLog, getMembersData } from "./service";

store.dispatch(getChatLog());
store.dispatch(getMembersData());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
