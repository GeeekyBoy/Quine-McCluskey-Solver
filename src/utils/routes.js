import React from "react";
import Result from "../componentss/Result";
import Letters from "../componentss/Letters";
import NoMinimization from "../componentss/NoMinimization"
import Start from "../componentss/Start";
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
