import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
export default function (props) {
  const stringifiedSteps = props.stepsData
    .map((step) => step.map((bracket) => `(${bracket.join(" + ")})`).join(""))
    .join(" = ");
  return (
    <Card>
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
