import React, { useState } from "react";
import useStyles from "../styles";
import { navigate } from "hookrouter";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ArrowForwardRounded from "@material-ui/icons/ArrowForwardRounded";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import varStore from "../Utils/varStore";
export default function () {
  const classes = useStyles();
  const [isMintermsChanged, setIsMintermsChanged] = useState(false);
  const [minterms, setMinterms] = useState("");
  const [donotCares, setDonotCares] = useState("");
  const [mintermsErrMsg, setMintermsErrMsg] = useState(null);
  const [donotCaresErrMsg, setDonotCaresErrMsg] = useState(null);
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
  const nextPage = (event) => {
    event.preventDefault();
    if (!isMintermsChanged) {
      setMintermsErrMsg(`Please enter minterms !`);
    } else if (!mintermsErrMsg && !donotCaresErrMsg) {
      varStore.initMinterms = minterms.match(new RegExp("[0-9]+", "g")).map(x => parseInt(x, 10));
      if (donotCares.length > 0) {
        varStore.initDonotCares = donotCares.match(new RegExp("[0-9]+", "g")).map(x => parseInt(x, 10));
      }
      navigate(`${process.env.NODE_ENV === "development" ? "" : process.env.PUBLIC_URL}/letters`);
    }
  };
  document.body.classList.add(useStyles().centeringRoot);
  document.getElementById("app").classList.add(useStyles().ceneredContainer);
  return (
    <Paper className={classes.startContainer}>
      <form noValidate autoComplete="off">
        <div className={classes.startContainerItem}>
          <Typography variant="h4">Enter Function Information</Typography>
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
      </form>
    </Paper>
  );
}
