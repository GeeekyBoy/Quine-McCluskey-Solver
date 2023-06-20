import React, { useState } from "react";
import globalStyles from "../styles";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CalculateRounded from "@mui/icons-material/CalculateRounded";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import varStore from "../utils/varStore";
import { Fade } from "@mui/material";

export default function () {
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(true);
  const [isLettersChanged, setIsLettersChanged] = useState(false);
  const [letters, setLetters] = useState("");
  const [errMsg, setErrMsg] = useState(null);
  const handleChange = (event) => {
    setIsLettersChanged(true);
    setLetters(event.target.value);
    if (!event.target.value.match(new RegExp("^[A-Z]*$", "g"))) {
      setErrMsg("Capital letters only with no spaces !");
    } else {
      if (
        !event.target.value.match(
          new RegExp(`^[A-Z]{${varStore.initInputsNumber}}$`, "g")
        )
      ) {
        setErrMsg(
          `You have to name just ${varStore.initInputsNumber} inputs !`
        );
      } else {
        setErrMsg(null);
      }
    }
  };
  const solve = (event) => {
    event.preventDefault();
    if (!isLettersChanged) {
      setErrMsg(`You have to name just ${varStore.initInputsNumber} inputs !`);
    } else if (!errMsg) {
      varStore.initInputLetters = letters.split("");
      setIsShown(false);
      setTimeout(() => navigate("/result"), 500);
    }
  };
  document.body.classList.add(globalStyles.centeringRoot);
  document.getElementById("root").classList.add(globalStyles.ceneredContainer);
  return (
    <Fade timeout={500} in={isShown} appear={isShown}>
      <Paper className={globalStyles.startContainer}>
        <form noValidate autoComplete="off">
          <div className={globalStyles.startContainerItem}>
            <center>
              <Typography variant="h4">Name The Inputs</Typography>
            </center>
          </div>
          <div className={globalStyles.startContainerItem}>
            <TextField
              helperText={errMsg ? errMsg : null}
              error={!!errMsg}
              id="outlined-basic"
              label={`Enter ${varStore.initInputsNumber} Letters`}
              onChange={handleChange}
              size="small"
              variant="filled"
            />
          </div>
          <div className={globalStyles.startContainerItem}>
            <center>
              <Button
                endIcon={<CalculateRounded />}
                variant="contained"
                color="primary"
                onClick={solve}
              >
                Solve
              </Button>
            </center>
          </div>
        </form>
      </Paper>
    </Fade>
  );
}
