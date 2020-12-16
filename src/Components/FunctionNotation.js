import React from "react";
import useStyles from "../styles";
import { makeStyles } from "@material-ui/core/styles";
import numberToImage from "../Utils/numberToImg";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import varStore from "../Utils/varStore";
export default function (props) {
  const useAditionalStyles = makeStyles({
    root: {
      background: `#FFDE03 url(${numberToImage(props.index.toString())})`
    }
  });
  const classes = useStyles();
  const additionalClasses = useAditionalStyles();
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
      </CardContent>
    </Card>
  );
}
