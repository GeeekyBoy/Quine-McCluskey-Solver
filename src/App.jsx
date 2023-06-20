import React, { useEffect } from "react";
import globalStyles from "./styles";
import { HashRouter } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Result from "./components/Result";
import Letters from "./components/Letters";
import NoMinimization from "./components/NoMinimization"
import Start from "./components/Start";

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
  useEffect(() => {
    document.body.classList.remove("loadingBody");
    document.getElementById("splash").remove();
    document.body.classList.add(globalStyles.root);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route exact path="/NoMinimization" element={<NoMinimization />} />
          <Route exact path="/letters" element={<Letters />} />
          <Route exact path="/result" element={<Result />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
