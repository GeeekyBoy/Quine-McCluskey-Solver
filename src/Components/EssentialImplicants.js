import React from "react";
import globalStyles from "../styles";
import numberToImage from "../utils/numberToImg";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import useClasses from "../hooks/useClasses";
export default function (props) {
  const styles = {
    root: {
      backgroundColor: "#F86734 !important",
      background: `url(${numberToImage(props.index.toString())})`,
      color: "#FFFFFF !important"
    }
  };
  const classes = useClasses(globalStyles);
  const additionalClasses = useClasses(styles);
  return (
    <Card className={`${classes.numberedBG} ${additionalClasses.root}`}>
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
