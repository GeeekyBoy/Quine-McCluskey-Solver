import React from "react";
import useStyles from "../styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
export default function (props) {
  const classes = useStyles();
  const stringifiedSteps = props.stepsData
    .map((step) => step.map((bracket) => `(${bracket.join(" + ")})`).join(""))
    .join(" = ");
  return (
    <Card className={classes.petrickCard}>
      <CardContent align="center">
        <Typography variant="h4">
          <b>{`${props.index}. Applying Petrick Method`}</b>
        </Typography>
        {Object.keys(props.mapping).map((key) => (
          <Typography variant="h4">{`Let ${key} = ${props.mapping[key]}`}</Typography>
        ))}
        <Typography variant="h4">{stringifiedSteps}</Typography>
      </CardContent>
    </Card>
  );
}
