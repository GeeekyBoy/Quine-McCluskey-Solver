import React from "react";
import Result from "../Components/Result";
import Letters from "../Components/Letters";
import noMinimization from "../Components/noMinimization"
import Start from "../Components/Start";
const routes = [
  {
    path: "/",
    element: <Start />
  },
  {
    path: "/noMinimization",
    element: <noMinimization />
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
