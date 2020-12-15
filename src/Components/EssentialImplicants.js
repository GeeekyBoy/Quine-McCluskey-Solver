import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
export default function (props) {
  return (
    <Card style={{ backgroundColor: "#0336FF", color: "#FFFFFF" }}>
      <CardContent align="center">
        <Typography variant="h4">
          <b>
            {props.essentials.length > 0
              ? "The Essential Implicants Are"
              : "No Essential Implicants Found"}
          </b>
        </Typography>
        {props.essentials.length > 0 && (
          <Typography variant="h4">{props.essentials.join(", ")}</Typography>
        )}
      </CardContent>
    </Card>
  );
}
