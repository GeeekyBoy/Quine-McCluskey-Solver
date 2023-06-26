import React, { useEffect, useState, createContext } from "react";
import Result from "./components/Result";
import Letters from "./components/Letters";
import NoMinimization from "./components/NoMinimization"
import Start from "./components/Start";

function App() {
  const [wizardStep, setWizardStep] = useState(0);
  useEffect(() => {
    document.body.classList.remove("loadingBody");
    document.getElementById("splash").remove();
    document.body.classList.add("root");
  }, []);
  return (
    wizardStep === 0 ? <Start onNextPage={(alt) => setWizardStep(alt ? 1 : 2)} /> :
    wizardStep === 1 ? <NoMinimization onNextPage={() => setWizardStep(0)} /> :
    wizardStep === 2 ? <Letters onNextPage={() => setWizardStep(3)} /> :
    wizardStep === 3 ? <Result onNextPage={() => setWizardStep(0)} /> :
    null
  );
}

export default App;
