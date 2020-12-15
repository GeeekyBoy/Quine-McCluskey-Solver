import { makeStyles } from "@material-ui/core/styles";
export default makeStyles({
  root: {
    backgroundImage: "url(https://source.unsplash.com/user/erondu/1600x900)",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover"
  },
  centeringRoot: {
    width: "100%",
    display: "flex",
    height: "100vh",
    margin: 0,
    justifyContent: "center"
  },
  ceneredContainer: {
    alignSelf: "center",
    width: "80%"
  },
  startContainer: {
    minWidth: "100%"
  },
  startContainerItem: {
    "& .MuiTextField-root": {
      width: "100%"
    },
    padding: 15
  },
  mansory: {
    margin: "0 auto"
  },
  gridItem: {
    margin: 10
  },
  table: {
    "& .MuiTableCell-head": { fontWeight: "bold" },
    minWidth: 300
  },
  cancelled: {
    backgroundColor: "#FFFF00"
  },
  single: {
    color: "#FF0000",
    fontWeight: "bold"
  },
  dashedBorder: {
    border: "dashed!important"
  },
  redBorder: {
    borderColor: "#FF0000!important",
    borderWidth: "thick!important"
  }
});
