import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router";
import Result from "./components/Result";
import Letters from "./components/Letters";
import NoMinimization from "./components/NoMinimization"
import Start from "./components/Start";

function App() {
  const navigate = useNavigate();
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  useEffect(() => {
    document.body.classList.remove("loadingBody");
    document.getElementById("splash").remove();
    document.body.classList.add("root");
    navigate("/", { replace: true });
    console.log("App loaded");
    setIsFirstLoad(false);
  }, []);
  return isFirstLoad ? null : (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route exact path="/no-minimization" element={<NoMinimization />} />
      <Route exact path="/letters" element={<Letters />} />
      <Route exact path="/result" element={<Result />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
