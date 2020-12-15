import React from "react";
import ReactDOM from "react-dom";
import useStyles from "./styles";
import { HashRouter, useRoutes } from "react-router-dom";
import routes from "./Utils/routes";

function App() {
  const classes = useStyles();
  const routeResult = useRoutes(routes);
  document.body.classList.add(classes.root);
  return routeResult;
}

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.querySelector("#app")
);
