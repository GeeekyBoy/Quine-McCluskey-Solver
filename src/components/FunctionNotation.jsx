import React from "react";
import Button from "@mui/material/Button";
import numberToImage from "../utils/numberToImg";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import varStore from "../utils/varStore";

const FunctionNotation = ({ idx, onNewFunction }) => {
  return (
    <Card
      className="numbered-bg"
      style={{
          backgroundColor: "#FFDE03",
          backgroundImage: `url(${numberToImage(idx.toString())})`
      }}
    >
      <CardContent align="center">
        <Typography variant="h4">
          <b>
            F({varStore.initInputLetters.join(", ")}) = Σm({varStore.initMinterms.join(", ")})
            {varStore.initDonotCares.length > 0 && ` + Σd(${varStore.initDonotCares.join(", ")})`}
          </b>
        </Typography>
        <Button variant="outlined" className="new-function-btn" onClick={onNewFunction}>
          <Typography>New Function</Typography>
        </Button>
      </CardContent>
    </Card>
  );
}

export default FunctionNotation;
