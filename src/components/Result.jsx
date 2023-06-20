import { Fade } from "@mui/material";
import React, { useState, useEffect } from "react";
import minimizeFunction from "../core/minimizeFunction";
import globalStyles from "../styles";
export let appendStep = () => {};
export let setIsResultShown = () => {};

export default function () {
  const [isShown, setIsShown] = useState(true);
  const [children, setChildren] = useState([]);
  setIsResultShown = setIsShown;
  appendStep = (child) => {
    setChildren((oldChildren) => [
      ...oldChildren,
      <div
        className={globalStyles.gridItem}
        key={"_" + Math.random().toString(36).substr(2, 9)}
      >
        {child}
      </div>
    ]);
  };
  document.body.classList.remove(globalStyles.centeringRoot);
  document.getElementById("root").classList.remove(globalStyles.ceneredContainer);
  useEffect(() => {
    minimizeFunction();
  }, []);
  return (
    <div className={globalStyles.Masonry}>
      <Fade timeout={500} in={isShown} appear={isShown}>
        <div>{children}</div>
      </Fade>
    </div>
  );
}
