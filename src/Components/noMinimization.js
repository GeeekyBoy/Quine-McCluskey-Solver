import React, { useState } from "react";
import useStyles from "../styles";
import { useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import noMinimizationImg from "../Utils/noMinimizationImg";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import varStore from "../Utils/varStore";
import Fade from "react-reveal/Fade";
export default function () {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(true);
  const handleNewFunction = () => {
    setIsShown(false);
    setTimeout(() => {
      varStore.reset();
      navigate("/");
    }, 500);
  };
  document.body.classList.add(useStyles().centeringRoot);
  document.getElementById("app").classList.add(useStyles().ceneredContainer);
  return (
    <Fade duration={500} opposite appear when={isShown}>
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