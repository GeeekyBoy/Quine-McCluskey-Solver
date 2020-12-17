import React, { useState, useEffect } from "react";
import minimizeFunction from "../Core/minimizeFunction";
import Fade from "react-reveal/Fade";
import useStyles from "../styles";
export let appendStep = () => {};
export let setIsResultShown = () => {};

export default function () {
  const classes = useStyles();
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
  document.body.classList.remove(useStyles().centeringRoot);
  document.getElementById("app").classList.remove(useStyles().ceneredContainer);
  useEffect(() => {
    minimizeFunction();
  }, []);
  return (
    <div className={classes.Masonry}>
      <Fade duration={500} bottom cascade opposite appear when={isShown}>
        <div>{children}</div>
      </Fade>
    </div>
  );
}
