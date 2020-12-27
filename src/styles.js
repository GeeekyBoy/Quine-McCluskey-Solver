import { makeStyles } from "@material-ui/core/styles";
import BG from "./Utils/background";
export default makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${BG})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    overflowX: "hidden"
  },
  centeringRoot: {
    width: "100%",
    display: "flex",
    height: "100vh",
    margin: 0,
    justifyContent: "center",
    overflow: "hidden"
  },
  ceneredContainer: {
    alignSelf: "center",
    width: "80%",
    maxWidth: 600
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
    margin: "2vw auto",
    width: "90vw",
    maxWidth: 600
  },
  table: {
    "& .MuiToolbar-root": {
      backgroundColor: "#073042",
      justifyContent: "center",
      "& .MuiTypography-root": {
        fontWeight: "bold",
        color: "#FFFFFF"
      }
    },
    "& .MuiTableHead-root": {
      backgroundColor: "#073042",
      "& .MuiTableCell-head": {
        color: "#FFFFFF",
        fontWeight: "bold"
      }
    },
    "& .MuiTableBody-root": {
      backgroundColor: "#D7EFFE",
      "& .MuiTableCell-body": {
        color: "#073042",
        fontWeight: "bold"
      }
    },
    minWidth: 300,
    borderCollapse: "unset!important"
  },
  cancelled: {
    backgroundColor: "#073042!important",
    color: "#3DDC84!important",
    borderBottom: "none!important"
  },
  single: {
    color: "#F86734!important",
    fontWeight: "bold"
  },
  dashedBorder: {
    border: "dashed!important",
    borderColor: "#3DDC84!important"
  },
  redBorder: {
    borderColor: "#F86734!important",
    borderWidth: "thick!important"
  },
  numberedBG: {
    backgroundPosition: "left bottom, center!important",
    backgroundRepeat: "no-repeat, repeat!important"
  },
  petrickCard: {
    background: "#D7EFFE",
    "& .MuiTypography-root": {
      color: "#073042"
    }
  },
  newFunctionBtn: {
    "& .MuiTypography-root": {
      color: "#000000",
      fontWeight: "bold"
    },
    marginTop: "10px!important",
    border: "1px solid #00000080!important"
  },
  noMinimizationCardMedia: {
    height: 260
  },
  logo: {
    fontWeight: "900!important",
    marginBottom: "10px!important"
  }
}));
