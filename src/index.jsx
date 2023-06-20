import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "fontsource-rubik";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
