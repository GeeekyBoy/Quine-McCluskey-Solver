import React from "react";
import Result from "../components/Result";
import Letters from "../components/Letters";
import NoMinimization from "../components/NoMinimization"
import Start from "../components/Start";

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
