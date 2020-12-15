import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
export default function (props) {
  return (
    <Card style={{ backgroundColor: "#FF0266", color: "#FFFFFF"  }}>
      <CardContent align="center">
        <Typography variant="h4">
          <b>Possible Function Minimizations</b>
        </Typography>
        {props.minimizations.map((minimization) => (
          <Typography variant="h4">{`F = ${minimization.join(
            " + "
          )}`}</Typography>
        ))}
      </CardContent>
    </Card>
  );
}
