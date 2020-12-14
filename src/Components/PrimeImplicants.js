import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
export default function (props) {
  return (
    <Card>
      <CardContent align="center">
        <Typography variant="h4">
          <b>The Prime Implicants Are</b>
        </Typography>
        <Typography variant="h4">{props.implicants.join(", ")}</Typography>
      </CardContent>
    </Card>
  );
}
