import React from "react";
import globalStyles from "../styles";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
export default function (props) {
  const classes = useClasses(globalStyles);
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
