import React from "react";
import useStyles from "../styles";
import { useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import numberToImage from "../Utils/numberToImg";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { setIsResultShown } from "./Result";
import varStore from "../Utils/varStore";
export default function (props) {
  const useAditionalStyles = makeStyles({
    root: {
      background: `#FFDE03 url(${numberToImage(props.index.toString())})`
    }
  });
  const classes = useStyles();
  const navigate = useNavigate();
  const additionalClasses = useAditionalStyles();
  const handleNewFunction = () => {
    setIsResultShown(false);
    setTimeout(() => {
      varStore.reset();
      navigate("/");
    }, 500);
  };
  return (
    <Card className={`${classes.numberedBG} ${additionalClasses.root}`}>
      <CardContent align="center">
        <Typography variant="h4">
          <b>{`F(${varStore.initInputLetters.join(
            ", "
          )}) = Σm(${varStore.initMinterms.join(", ")})${
            varStore.initDonotCares.length > 0
              ? ` + Σd(${varStore.initDonotCares.join(", ")})`
              : ""
          }`}</b>
        </Typography>
        <Button variant="outlined" className={classes.newFunctionBtn} onClick={handleNewFunction}>
          <Typography>New Function</Typography>
        </Button>
      </CardContent>
    </Card>
  );
}
