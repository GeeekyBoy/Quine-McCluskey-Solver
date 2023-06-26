import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const PetrickMethod = ({ idx, steps, mapping }) => {
  return (
    <Card className="petrick-card">
      <CardContent align="center">
        <Typography variant="h4">
          <b>{idx}. Applying Petrick Method</b>
        </Typography>
        {Object.entries(mapping).map(([k, v]) => (
          <Typography variant="h4">
            Let {k} = {v}
          </Typography>
        ))}
        <Typography variant="h4">
          {steps.map((step) => step.map((bracket) => `(${bracket.join(" + ")})`).join("")).join(" = ")}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PetrickMethod;
