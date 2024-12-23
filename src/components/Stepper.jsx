import React from "react";
import { useStepperContext } from "../context/StepperContext";
import ButtonContainer from "./buttons/ButtonContainer";

const Stepper = () => {
  const { currentStep, steps } = useStepperContext();

  return (
    <div className="px-[200px] py-[100px]">
      {steps[currentStep]?.component}
      <div className="mt-10">
        <ButtonContainer />
      </div>
    </div>
  );
};

export default Stepper;
