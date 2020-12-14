import React from "react";
import Result from "../Components/Result";
import Letters from "../Components/Letters";
import Start from "../Components/Start";
const routes = {
  [`${process.env.NODE_ENV === "development" ? "" : process.env.PUBLIC_URL}/`]: () => <Start />,
  [`${process.env.NODE_ENV === "development" ? "" : process.env.PUBLIC_URL}/letters`]: () => <Letters />,
  [`${process.env.NODE_ENV === "development" ? "" : process.env.PUBLIC_URL}/result`]: () => <Result />
};
export default routes;
