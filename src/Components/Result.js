import { Fade } from "@mui/material";
import React, { useState, useEffect } from "react";
import minimizeFunction from "../core/minimizeFunction";
import useClasses from "../hooks/useClasses";
// import Fade from "react-reveal/Fade";
import globalStyles from "../styles";
export let appendStep = () => {};
export let setIsResultShown = () => {};

export default function () {
  const classes = useClasses(globalStyles);
  const [isShown, setIsShown] = useState(true);
  const [children, setChildren] = useState([]);
  setIsResultShown = setIsShown;
  appendStep = (child) => {
    setChildren((oldChildren) => [
      ...oldChildren,
      <div
        className={classes.gridItem}
        key={"_" + Math.random().toString(36).substr(2, 9)}
      >
        {child}
      </div>
    ]);
  };
  document.body.classList.remove(classes.centeringRoot);
  document.getElementById("app").classList.remove(classes.ceneredContainer);
  useEffect(() => {
    minimizeFunction();
  }, []);
  return (
    <div className={classes.Masonry}>
      <Fade timeout={500} in={isShown} appear={isShown}>
        <div>{children}</div>
      </Fade>
    </div>
  );
}
