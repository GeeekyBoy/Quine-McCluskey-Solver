import React, { useState, useEffect } from "react";
import minimizeFunction from "../Core/minimizeFunction";
import useStyles from "../styles";
export let appendStep = () => {};
export default function () {
  const classes = useStyles();
  const [children, setChildren] = useState([]);
  appendStep = (child) => {
    setChildren((oldChildren) => [
      ...oldChildren,
      <div className={classes.gridItem}>{child}</div>
    ]);
  };
  document.body.classList.remove(useStyles().centeringRoot);
  document.getElementById("app").classList.remove(useStyles().ceneredContainer);
	useEffect(() => {
    minimizeFunction();
  }, []);
  return <div className={classes.mansory}>{children}</div>;
}
