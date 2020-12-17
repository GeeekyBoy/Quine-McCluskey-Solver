import "fontsource-rubik";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import { HashRouter, useRoutes } from "react-router-dom";
import routes from "./Utils/routes";

function App() {
  const classes = useStyles();
  const navigate = useNavigate();
  const routeResult = useRoutes(routes);
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);
  useEffect(() => {
    setIsFirstLaunch(false);
    navigate("/");
    document.body.classList.remove("loadingBody");
    document.getElementById("splash").remove();
    document.body.classList.add(classes.root);
  }, []);
  return isFirstLaunch ? null : routeResult;
}

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.querySelector("#app")
);
