import React from "react";
import useStyles from "../styles";
import { makeStyles } from "@material-ui/core/styles";
import numberToImage from "../Utils/numberToImg";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
export default function (props) {
  const useAditionalStyles = makeStyles({
    root: {
      background: `#4282F2 url(${numberToImage(props.index.toString())})`,
      color: "#FFFFFF"
    }
  });
  const classes = useStyles();
  const additionalClasses = useAditionalStyles();
  return (
    <Card className={`${classes.numberedBG} ${additionalClasses.root}`}>
      <CardContent align="center">
        <Typography variant="h4">
          <b>The Prime Implicants Are</b>
        </Typography>
        <Typography variant="h4" style={{ margin: 10 }}>
          {props.implicants.join(", ")}
        </Typography>
      </CardContent>
    </Card>
  );
}
