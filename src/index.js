import React from "react";
import ReactDOM from "react-dom";
import Router from "./router";
import { ThemeProvider } from "../src/components/context/ThemeContext";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <ThemeProvider>
    <Router />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
