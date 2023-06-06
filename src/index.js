import "fontsource-rubik";
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { useNavigate } from "react-router-dom";
import globalStyles from "./styles";
import { HashRouter, useRoutes } from "react-router-dom";
import routes from "./utils/routes";
import useClasses from "./hooks/useClasses";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#00696F",
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: "#4A6365",
      contrastText: "#FFFFFF"
    }
  },
  typography: {
    fontFamily: 'Rubik, Roboto, sans-serif',
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#CCE8EA",
          color: "#051f21",
          borderRadius: 8,
        },
      },
    },
  }
});
function App() {
  const classes = useClasses(globalStyles);
  const navigate = useNavigate();
  const routeResult = useRoutes(routes);
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);
  useEffect(() => {
    setIsFirstLaunch(false);
    navigate("/");
    document.body.classList.remove("loadingBody");
    document.getElementById("splash").remove();
    document.body.classList.add(classes.root);
  }, []);
  return isFirstLaunch ? null : routeResult;
}

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <HashRouter>
      <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </HashRouter>
);
