import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import numberToImage from "../utils/numberToImg";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { setIsResultShown } from "./Result";
import varStore from "../utils/varStore";

export default function ({ index }) {
  const navigate = useNavigate();
  const handleNewFunction = () => {
    setIsResultShown(false);
    setTimeout(() => {
      varStore.reset();
      navigate("/");
    }, 500);
  };
  return (
    <Card
      className="numbered-bg"
      style={{
          backgroundColor: "#FFDE03",
          backgroundImage: `url(${numberToImage(index.toString())})`
      }}
    >
      <CardContent align="center">
        <Typography variant="h4">
          <b>
            F({varStore.initInputLetters.join(", ")}) = Σm({varStore.initMinterms.join(", ")})
            {varStore.initDonotCares.length > 0 && ` + Σd(${varStore.initDonotCares.join(", ")})`}
          </b>
        </Typography>
        <Button variant="outlined" className="new-function-btn" onClick={handleNewFunction}>
          <Typography>New Function</Typography>
        </Button>
      </CardContent>
    </Card>
  );
}
