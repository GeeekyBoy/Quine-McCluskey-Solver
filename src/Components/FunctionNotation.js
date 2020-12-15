import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import varStore from "../Utils/varStore";
export default function () {
  return (
    <Card style={{backgroundColor: "#FFDE03"}}>
      <CardContent align="center">
        <Typography variant="h4">{`F(${varStore.initInputLetters.join(
          ", "
        )}) = Σm(${varStore.initMinterms.join(", ")})${
          varStore.initDonotCares.length > 0
            ? ` + Σd(${varStore.initDonotCares.join(", ")})`
            : ""
        }`}</Typography>
      </CardContent>
    </Card>
  );
}
