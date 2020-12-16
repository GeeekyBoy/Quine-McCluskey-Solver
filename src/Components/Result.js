import React, { useState, useEffect } from "react";
import minimizeFunction from "../Core/minimizeFunction";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Masonry } from "masonic";
import useStyles from "../styles";
export let appendStep = () => {};

const MasonryCard = ({ index, data, width }) => <>{data}</>;
export default function () {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
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
  return (
    <Masonry
      items={children}
      render={MasonryCard}
      columnCount={matchesSm ? 1 : matchesMd ? 2 : 3}
    />
  );
}
