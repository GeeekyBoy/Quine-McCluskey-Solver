import React from "react";
import Result from "../Components/Result";
import Letters from "../Components/Letters";
import NoMinimization from "../Components/NoMinimization"
import Start from "../Components/Start";
const routes = [
  {
    path: "/",
    element: <Start />
  },
  {
    path: "/NoMinimization",
    element: <NoMinimization />
  },
  {
    path: "/letters",
    element: <Letters />
  },
  {
    path: "/result",
    element: <Result />
  }
];
export default routes;
