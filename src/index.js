import React from "react";
import ReactDOM from "react-dom";
import useStyles from "../styles";
import { useRoutes } from "hookrouter";
import routes from "./Utils/routes";

function App() {
  const classes = useStyles();
  const routeResult = useRoutes(routes);
  document.body.classList.add(classes.root);
  return routeResult;
}

ReactDOM.render(<App />, document.querySelector("#app"));
