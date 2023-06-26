import React from "react";
import numberToImage from "../utils/numberToImg";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function ({ index, minimizations }) {
  return (
    <Card
      className="numbered-bg"
      style={{
        backgroundColor: "#3DDB85",
        backgroundImage: `url(${numberToImage(index.toString())})`,
        color: "#FFFFFF"
      }}
    >
      <CardContent align="center">
        <Typography variant="h4">
          <b>Possible Function Minimizations</b>
        </Typography>
        {minimizations.map((minimization, i) => (
          <Typography key={i} variant="h4" style={{ margin: 10 }}>
            F = {minimization.join(" + ")}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}
