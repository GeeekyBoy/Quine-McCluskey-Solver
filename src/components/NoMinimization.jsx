import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import noMinimizationImg from "../assets/img/no-minimization.gif";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import varStore from "../utils/varStore";
import { Fade } from "@mui/material";

export default function () {
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(true);
  const handleNewFunction = () => {
    setIsShown(false);
    setTimeout(() => {
      varStore.reset();
      navigate("/");
    }, 500);
  };
  document.body.classList.add("centering-root");
  document.getElementById("root").classList.add("centered-container");
  return (
    <Fade timeout={500} in={isShown} appear={isShown}>
      <Card className="start-container">
        <CardMedia
          className="no-minimization-card-media"
          image={noMinimizationImg}
          title="no minimization illustration"
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
            className="new-function-btn"
            onClick={handleNewFunction}
          >
            <Typography>New Function</Typography>
          </Button>
        </CardContent>
      </Card>
    </Fade>
  );
}
