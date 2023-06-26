import React from "react";
import numberToImage from "../utils/numberToImg";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const PrimeImplicants = ({ idx, implicants }) => {
  return (
    <Card
      className="numbered-bg"
      style={{
        backgroundColor: "#4282F2",
        backgroundImage: `url(${numberToImage(idx.toString())})`,
        color: "#FFFFFF"
      }}
    >
      <CardContent align="center">
        <Typography variant="h4">
          <b>The Prime Implicants Are</b>
        </Typography>
        <Typography variant="h4" style={{ margin: 10 }}>
          {implicants.join(", ")}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PrimeImplicants;
