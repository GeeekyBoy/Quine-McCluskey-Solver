import React, { useState } from "react";
import useStyles from "../styles";
import { useNavigate } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import ArrowForwardRounded from "@material-ui/icons/ArrowForwardRounded";
import Favorite from "@material-ui/icons/Favorite";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import varStore from "../Utils/varStore";
export default function () {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isMintermsChanged, setIsMintermsChanged] = useState(false);
  const [minterms, setMinterms] = useState("");
  const [donotCares, setDonotCares] = useState("");
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
      varStore.isComplementAvail = isComplementAvail;
      navigate("/letters");
    }
  };
  document.body.classList.add(useStyles().centeringRoot);
  document.getElementById("app").classList.add(useStyles().ceneredContainer);
  return (
    <Paper className={classes.startContainer}>
      <form noValidate autoComplete="off">
        <div className={classes.startContainerItem}>
          <center>
            <Typography variant="h4">Enter Function Information</Typography>
          </center>
        </div>
        <div className={classes.startContainerItem}>
          <TextField
            helperText={mintermsErrMsg ? mintermsErrMsg : null}
            error={mintermsErrMsg}
            id="outlined-basic"
            label="Minterms"
            onChange={handleMintermsChange}
            variant="outlined"
          />
        </div>
        <div className={classes.startContainerItem}>
          <TextField
            helperText={donotCaresErrMsg ? donotCaresErrMsg : null}
            error={donotCaresErrMsg}
            id="outlined-basic"
            label="Don't Cares"
            onChange={handleDonotCaresChange}
            variant="outlined"
          />
        </div>
        <div className={classes.startContainerItem}>
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
        <div className={classes.startContainerItem}>
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
        <div className={classes.startContainerItem}>
          <center>
            <Typography>
              Made With <span style={{ color: "#FF0000" }}>❤</span> In Egypt
            </Typography>
          </center>
        </div>
      </form>
    </Paper>
  );
}
