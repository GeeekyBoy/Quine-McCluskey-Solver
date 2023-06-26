import React from "react";
import numberToImage from "../utils/numberToImg";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function (props) {
  return (
    <Card
      className="numbered-bg"
      style={{
        backgroundColor: "#F86734",
        backgroundImage: `url(${numberToImage(props.index.toString())})`,
        color: "#FFFFFF"
      }}
    >
      <CardContent align="center">
        <Typography variant="h4">
          <b>
            {props.essentials.length > 0
              ? "The Essential Implicants Are"
              : "No Essential Implicants Found"}
          </b>
        </Typography>
        {props.essentials.length > 0 && (
          <Typography variant="h4" style={{ margin: 10 }}>
            {props.essentials.join(", ")}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
