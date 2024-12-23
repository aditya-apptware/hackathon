import React from "react";
import { useStepperContext } from "../../context/StepperContext";

const AddMemberButton = () => {
  const { currentStep, setCurrentStep, steps } = useStepperContext();

  const handleClick = () => {
    if (validateCurrentStep()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  // Validate the fields for the current step
  const validateCurrentStep = () => {
    const currentStepData = steps[currentStep];
    if (currentStepData?.validate) {
      // Validate the current step
      return currentStepData.validate();
    }
    return true; // Default to true if no validation function is provided
  };

  return (
    <button
      className="bg-transparent border-black px-4 py-2"
      onClick={handleClick}
    >
      Add Member
    </button>
  );
};

export default AddMemberButton;
