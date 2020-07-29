import React from "react";
import ReactDOM, { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
// import Routes from "./components/Routes";

ReactDOM.render(
  <Provider store={store}>
    <div>hello world</div>
  </Provider>,
  document.getElementById("app")
);
