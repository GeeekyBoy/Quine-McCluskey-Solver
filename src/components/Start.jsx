import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import varStore from "../utils/varStore";
import { Fade } from "@mui/material";

export default function () {
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(true);
  const [isMintermsChanged, setIsMintermsChanged] = useState(false);
  const [minterms, setMinterms] = useState("");
  const [donotCares, setDonotCares] = useState("");
  const [enteredInputsNumber, setEnteredInputsNumber] = useState(0);
  const [mintermsErrMsg, setMintermsErrMsg] = useState(null);
  const [donotCaresErrMsg, setDonotCaresErrMsg] = useState(null);
  const [isComplementAvail, setIsComplementAvail] = useState(false);
  const handleMintermsChange = (event) => {
    setIsMintermsChanged(true);
    setMinterms(event.target.value);
    if (
      !event.target.value.match(new RegExp("([0-9]+)(?<= *,* *)", "g")) ||
      event.target.value.match(new RegExp("[^0-9 ,]", "g"))
    ) {
      setMintermsErrMsg("Numbers separated by spaces and commas only !");
    } else {
      setMintermsErrMsg(null);
    }
  };
  const handleDonotCaresChange = (event) => {
    setDonotCares(event.target.value);
    if (
      !event.target.value.match(new RegExp("([0-9]+)(?<= *,* *)", "g")) ||
      event.target.value.match(new RegExp("[^0-9 ,]", "g"))
    ) {
      setDonotCaresErrMsg("Numbers separated by spaces and commas only !");
    } else {
      setDonotCaresErrMsg(null);
    }
  };
  const handleInputsNumberChange = (event) => {
    setEnteredInputsNumber(
      Number.isInteger(parseInt(event.target.value, 10))
        ? parseInt(event.target.value, 10)
        : 0
    );
  };
  const handleComplementAvailChange = (event) => {
    setIsComplementAvail(event.target.checked);
  };
  const nextPage = (event) => {
    event.preventDefault();
    if (!isMintermsChanged) {
      setMintermsErrMsg(`Please enter minterms !`);
    } else if (!mintermsErrMsg && !donotCaresErrMsg) {
      varStore.initMinterms = minterms
        .match(new RegExp("[0-9]+", "g"))
        .map((x) => parseInt(x, 10));
      if (donotCares.length > 0) {
        varStore.initDonotCares = donotCares
          .match(new RegExp("[0-9]+", "g"))
          .map((x) => parseInt(x, 10));
      }
      const mintermsPlusDonotcares = varStore.initMinterms.concat(
        varStore.initDonotCares
      );
      const supposedInputsNumber =
        parseInt(
          Math.log2(Math.max(...[...new Set(mintermsPlusDonotcares)])),
          10
        ) + 1;
      varStore.initInputsNumber =
        enteredInputsNumber < supposedInputsNumber
          ? supposedInputsNumber
          : enteredInputsNumber;
      if (mintermsPlusDonotcares.length === 2 ** varStore.initInputsNumber) {
        setIsShown(false);
        setTimeout(() => navigate("/no-minimization"), 500);
      } else {
        varStore.isComplementAvail = isComplementAvail;
        setIsShown(false);
        setTimeout(() => navigate("/letters"), 500);
      }
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
              <Typography variant="h4" className="logo">
                Quine McCluskey Solver !
              </Typography>
              <Typography variant="h5">Enter Function Information</Typography>
            </center>
          </div>
          <div className="start-container-item">
            <TextField
              helperText={mintermsErrMsg ? mintermsErrMsg : null}
              error={!!mintermsErrMsg}
              id="outlined-basic"
              label="Minterms"
              onChange={handleMintermsChange}
              size="small"
              variant="filled"
            />
          </div>
          <div className="start-container-item">
            <TextField
              helperText={donotCaresErrMsg ? donotCaresErrMsg : null}
              error={!!donotCaresErrMsg}
              id="outlined-basic"
              label="Don't Cares"
              onChange={handleDonotCaresChange}
              size="small"
              variant="filled"
            />
          </div>
          <div className="start-container-item">
            <TextField
              id="filled-number"
              label="Inputs Number"
              type="number"
              onChange={handleInputsNumberChange}
              inputProps={{
                min: 1
              }}
              size="small"
              variant="filled"
              helperText="Leave blank to be calcualted automatically"
            />
          </div>
          <div className="start-container-item">
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isComplementAvail}
                    onChange={handleComplementAvailChange}
                    name="complementedAvailbility"
                  />
                }
                label="Complemented form is available"
              />
            </FormGroup>
          </div>
          <div className="start-container-item">
            <center>
              <Button
                endIcon={<ArrowForwardRounded />}
                variant="contained"
                color="primary"
                onClick={nextPage}
              >
                Next
              </Button>
            </center>
          </div>
          <div className="start-container-item">
            <center>
              <a href="https://github.com/GeeekyBoy/Quine-McCluskey-Solver" target="_blank">
                <img
                  alt="GitHub stars"
                  src="https://img.shields.io/github/stars/GeeekyBoy/Quine-McCluskey-Solver?style=social&amp;label=Star"
                  width={76}
                  height={20}
                />
              </a>
              <Typography variant="body2">
                Made With <span style={{ color: "#FF0000" }}>❤</span> by{" "}
                <a href="https://github.com/GeeekyBoy" target="_blank" style={{ color: "inherit" }}>GeeekyBoy</a>{" "}
                In Egypt
              </Typography>
              <Typography variant="body2">
                Copyright © 2023 GeeekyBoy
              </Typography>
            </center>
          </div>
        </form>
      </Paper>
    </Fade>
  );
}
