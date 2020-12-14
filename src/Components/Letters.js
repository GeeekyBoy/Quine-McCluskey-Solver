import React, { useState } from "react";
import useStyles from "../styles";
import Paper from "@material-ui/core/Paper";
import { navigate } from "hookrouter";
import Button from "@material-ui/core/Button";
import CalculateRounded from "@material-ui/icons/CalculateRounded";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import varStore from "../Utils/varStore";
export default function () {
  const classes = useStyles();
  varStore.initInputsNumber =
    parseInt(
      Math.log2(
        Math.max(
          ...[...new Set(varStore.initMinterms.concat(varStore.initDonotCares))]
        )
      ),
      10
    ) + 1;
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
      navigate("/result");
    }
  };
  document.body.classList.add(useStyles().centeringRoot);
  document.getElementById("app").classList.add(useStyles().ceneredContainer);
  return (
    <Paper className={classes.startContainer}>
      <form noValidate autoComplete="off">
        <div className={classes.startContainerItem}>
          <Typography variant="h4">Name The Inputs</Typography>
        </div>
        <div className={classes.startContainerItem}>
          <TextField
            helperText={errMsg ? errMsg : null}
            error={errMsg}
            id="outlined-basic"
            label={`Enter ${varStore.initInputsNumber} Letters`}
            onChange={handleChange}
            variant="outlined"
          />
        </div>
        <div className={classes.startContainerItem}>
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
  );
}
