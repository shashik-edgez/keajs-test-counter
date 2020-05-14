import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { resetContext, getContext } from "kea";
import { Provider } from "react-redux";

resetContext({
  // 👈 add this
  createStore: {
    // options for redux (e.g. middleware, reducers, ...)
  },
  plugins: [
    // additional kea plugins
  ],
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={getContext().store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
