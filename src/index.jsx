import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from "./App";
import "fontsource-rubik";
import "./styles.css";

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

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
