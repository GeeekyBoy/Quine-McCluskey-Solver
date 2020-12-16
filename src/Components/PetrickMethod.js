import React from "react";
import useStyles from "../styles";
import { makeStyles } from "@material-ui/core/styles";
import numberToImage from "../Utils/numberToImg";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
export default function (props) {
  const useAditionalStyles = makeStyles({
    root: {
      background: `#D7EFFE url(${numberToImage(props.index.toString())})`,
      color: "#073042"
    }
  });
  const classes = useStyles();
  const additionalClasses = useAditionalStyles();
  const stringifiedSteps = props.stepsData
    .map((step) => step.map((bracket) => `(${bracket.join(" + ")})`).join(""))
    .join(" = ");
  return (
    <Card className={`${classes.numberedBG} ${additionalClasses.root}`}>
      <CardContent align="center">
        <Typography variant="h4">
          <b>Applying Petrick Method</b>
        </Typography>
        {Object.keys(props.mapping).map((key) => (
          <Typography variant="h4">{`Let ${key} = ${props.mapping[key]}`}</Typography>
        ))}
        <Typography variant="h4">{stringifiedSteps}</Typography>
      </CardContent>
    </Card>
  );
}
