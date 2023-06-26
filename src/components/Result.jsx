import { Fade } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import minimizeFunction from "../core/minimizeFunction";
import varStore from "../utils/varStore";
import SelectionTable from "./SelectionTable";
import PrimeImplicants from "./PrimeImplicants";
import EssentialImplicants from "./EssentialImplicants";
import PetrickMethod from "./PetrickMethod";
import TabularTable from "./TabularTable";
import MinimizedFunction from "./MinimizedFunction";
import FunctionNotation from "./FunctionNotation";

const Result = () => {
  const [steps, setSteps] = useState(null);
  const navigate = useNavigate();
  const handleNewFunction = () => {
    setSteps(null);
    setTimeout(() => {
      varStore.reset();
      navigate("/");
    }, 500);
  };
  document.body.classList.remove("centering-root");
  document.getElementById("root").classList.remove("centered-container");
  useEffect(() => {
    setSteps(minimizeFunction());
  }, []);
  return (
    <div className="mansory">
      <Fade timeout={500} in={steps} appear={steps}>
        <div>
          <div className="grid-item">
            <FunctionNotation idx={1} onNewFunction={handleNewFunction} />
          </div>
          {steps && steps.map(({ type, ...props }, index) => {
            return (
              <div className="grid-item" key={index}>
                {type === "selectionTable" ? (
                  <SelectionTable idx={index + 2} {...props} />
                ) : type === "primeImplicants" ? (
                  <PrimeImplicants idx={index + 2} {...props} />
                ) : type === "essentialImplicants" ? (
                  <EssentialImplicants idx={index + 2} {...props} />
                ) : type === "petrickMethod" ? (
                  <PetrickMethod idx={index + 2} {...props} />
                ) : type === "tabularTable" ? (
                  <TabularTable idx={index + 2} {...props} />
                ) : type === "minimizedFunction" ? (
                  <MinimizedFunction idx={index + 2} {...props} />
                ) : null}
              </div>
            );
          })}
        </div>
      </Fade>
    </div>
  );
}

export default Result;
