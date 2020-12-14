import React from "react";
import Result from "../Components/Result";
import Letters from "../Components/Letters";
import Start from "../Components/Start";
const routes = {
  "/": () => <Start />,
  "/letters": () => <Letters />,
  "/result": () => <Result />
};
export default routes;