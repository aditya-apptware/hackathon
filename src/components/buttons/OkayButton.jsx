import React from "react";
import { useStepperContext } from "../../context/StepperContext";

const OkButton = () => {
  const { setCurrentStep, setAnimatingStep } = useStepperContext();

  const handleClick = () => {
    setCurrentStep((prev) => prev + 1);
    setAnimatingStep((prev) => prev + 1);
  };

  return (
    <button
      className="bg-black text-white px-4 py-2 rounded"
      onClick={handleClick}
    >
      OK
    </button>
  );
};

export default OkButton;
