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
  const [inputsCount, setInputsCount] = useState(0);
  const [mintermsErrMsg, setMintermsErrMsg] = useState(null);
  const [donotCaresErrMsg, setDonotCaresErrMsg] = useState(null);
  const [isComplementAvail, setIsComplementAvail] = useState(false);
  const handleMintermsChange = (e) => {
    setIsMintermsChanged(true);
    setMinterms(e.target.value);
    setMintermsErrMsg(
      (!e.target.value.match(/(\d+)(?<= *,* *)/g) || e.target.value.match(/[^0-9 ,]/g))
      ? "Numbers can be only separated by spaces and commas"
      : null
    );
  };
  const handleDonotCaresChange = (e) => {
    setDonotCares(e.target.value);
    setDonotCaresErrMsg(
      (!e.target.value.match(/(\d+)(?<= *,* *)/g) || e.target.value.match(/[^0-9 ,]/g))
      ? "Numbers can be only separated by spaces and commas"
      : null
    )
  };
  const handleInputsNumberChange = (e) => {
    setInputsCount(Number.isInteger(parseInt(e.target.value, 10)) ? e.target.value : 0);
  };
  const handleComplementAvailChange = (e) => {
    setIsComplementAvail(e.target.checked);
  };
  const nextPage = (e) => {
    e.preventDefault();
    if (!isMintermsChanged) {
      setMintermsErrMsg("Minterms are required");
    } else if (!mintermsErrMsg && !donotCaresErrMsg) {
      varStore.initMinterms = minterms.match(/\d+/g).map((x) => parseInt(x, 10));
      if (donotCares.length > 0) {
        varStore.initDonotCares = donotCares.match(/\d+/g).map((x) => parseInt(x, 10));
      }
      const mintermsPlusDonotcares = varStore.initMinterms.concat(varStore.initDonotCares);
      const minInputsCount = parseInt(Math.log2(Math.max(...new Set(mintermsPlusDonotcares))), 10) + 1;
      varStore.initInputsNumber = Math.max(inputsCount, minInputsCount);
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
                Quine McCluskey Solver
              </Typography>
              <Typography variant="h5">Enter Function Information</Typography>
            </center>
          </div>
          <div className="start-container-item">
            <TextField
              id="minterms"
              label="Minterms"
              helperText={mintermsErrMsg ? mintermsErrMsg : null}
              error={!!mintermsErrMsg}
              onChange={handleMintermsChange}
              size="small"
              variant="filled"
            />
          </div>
          <div className="start-container-item">
            <TextField
              id="donot-cares"
              label="Don't Cares"
              helperText={donotCaresErrMsg ? donotCaresErrMsg : null}
              error={!!donotCaresErrMsg}
              onChange={handleDonotCaresChange}
              size="small"
              variant="filled"
            />
          </div>
          <div className="start-container-item">
            <TextField
              id="inputs-count"
              label="Inputs Count"
              helperText="Leave blank to be calculated automatically"
              type="number"
              onChange={handleInputsNumberChange}
              inputProps={{ min: 1 }}
              size="small"
              variant="filled"
            />
          </div>
          <div className="start-container-item">
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    name="complement-avail"
                    checked={isComplementAvail}
                    onChange={handleComplementAvailChange}
                  />
                }
                label="Complements have no cost"
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
