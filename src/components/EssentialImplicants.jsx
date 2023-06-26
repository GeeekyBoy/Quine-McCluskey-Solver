import React from "react";
import numberToImage from "../utils/numberToImg";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function ({ index, essentials }) {
  return (
    <Card
      className="numbered-bg"
      style={{
        backgroundColor: "#F86734",
        backgroundImage: `url(${numberToImage(index.toString())})`,
        color: "#FFFFFF"
      }}
    >
      <CardContent align="center">
        <Typography variant="h4">
          <b>
            {essentials.length > 0
              ? "The Essential Implicants Are"
              : "No Essential Implicants Found"}
          </b>
        </Typography>
        {essentials.length > 0 && (
          <Typography variant="h4" style={{ margin: 10 }}>
            {essentials.join(", ")}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
