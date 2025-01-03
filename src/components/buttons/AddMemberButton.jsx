import React, { useState } from "react";
import { useStepperContext } from "../../context/StepperContext";

const AddMemberButton = () => {
  const {
    currentStep,
    setCurrentStep,
    steps,
    setAnimatingStep,
    setIsError,
  } = useStepperContext();

  const handleClick = () => {
    if (validateCurrentStep()) {
      setIsError(false);
      setCurrentStep((prev) => prev + 1);
      setAnimatingStep((prev) => prev + 1);
    } else {
      setIsError(true);
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
