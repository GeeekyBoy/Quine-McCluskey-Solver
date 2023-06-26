import React, { useState } from "react";
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
  const handleChange = (e) => {
    setIsLettersChanged(true);
    setLetters(e.target.value);
    setErrMsg(
      !e.target.value.match(/^[A-Z]*$/)
      ? "Only capital letters with no spaces are allowed"
      : !e.target.value.match(RegExp(`^[A-Z]{${varStore.initInputsNumber}}$`))
      ? `Only ${varStore.initInputsNumber} inputs have to be named`
      : null
    )
  };
  const solve = (e) => {
    e.preventDefault();
    if (!isLettersChanged) {
      setErrMsg(`${varStore.initInputsNumber} inputs have to be named`);
    } else if (!errMsg) {
      varStore.initInputLetters = letters.split("");
      setIsShown(false);
      setTimeout(() => navigate("/result"), 500);
    }
  };
  document.body.classList.add("centering-root");
  document.getElementById("root").classList.add("centered-container");
  return (
    <Fade timeout={500} in={isShown} appear={isShown}>
      <Paper className="start-container">
        <form noValidate autoComplete="off">
          <div className="start-container-item">
            <center>
              <Typography variant="h4">Name The Inputs</Typography>
            </center>
          </div>
          <div className="start-container-item">
            <TextField
              id="outlined-basic"
              label={`Enter ${varStore.initInputsNumber} Letters`}
              helperText={errMsg ? errMsg : null}
              error={!!errMsg}
              onChange={handleChange}
              size="small"
              variant="filled"
            />
          </div>
          <div className="start-container-item">
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
