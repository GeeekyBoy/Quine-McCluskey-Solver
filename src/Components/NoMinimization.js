import React, { useState } from "react";
import globalStyles from "../styles";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import noMinimizationImg from "../utils/noMinimizationImg";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import varStore from "../utils/varStore";
import useClasses from "../hooks/useClasses";
import { Fade } from "@mui/material";
// import Fade from "react-reveal/Fade";
export default function () {
  const classes = useClasses(globalStyles);
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(true);
  const handleNewFunction = () => {
    setIsShown(false);
    setTimeout(() => {
      varStore.reset();
      navigate("/");
    }, 500);
  };
  document.body.classList.add(classes.centeringRoot);
  document.getElementById("app").classList.add(classes.ceneredContainer);
  return (
    <Fade timeout={500} in={isShown} appear={isShown}>
      <Card className={classes.startContainer}>
        <CardMedia
          className={classes.noMinimizationCardMedia}
          image={noMinimizationImg}
          title="Contemplative Reptile"
        />
        <CardContent align="center">
          <Typography gutterBottom variant="h5">
            <b>
              No Gates Required
              <br />
              Just connect wires
            </b>
          </Typography>
          <Typography variant="h3">
            <b>F = 1</b>
          </Typography>
          <Button
            variant="outlined"
            className={classes.newFunctionBtn}
            onClick={handleNewFunction}
          >
            <Typography>New Function</Typography>
          </Button>
        </CardContent>
      </Card>
    </Fade>
  );
}
