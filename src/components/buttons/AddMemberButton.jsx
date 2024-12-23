import React from "react";
import { useStepperContext } from "../../context/StepperContext";

const AddMemberButton = () => {
  const { currentStep, setCurrentStep } = useStepperContext();

  const handleClick = () => setCurrentStep((prev) => prev + 1);

  return (
    <button className="bg-transparent border-black px-4 py-2" onClick={handleClick}>
      Add Member
    </button>
  );
};

export default AddMemberButton;
