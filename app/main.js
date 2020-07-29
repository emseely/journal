import React from "react";
import ReactDOM, { render } from "react-dom";
import { Provider } from "react-redux";
import Routes from "./components/Routes";

import store from "./store";
// import Routes from "./components/Routes";

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("app")
);
