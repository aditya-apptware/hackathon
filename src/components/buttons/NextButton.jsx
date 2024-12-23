import React from "react";
import { useStepperContext } from "../../context/StepperContext";

const NextButton = () => {
  const { currentStep, setCurrentStep, steps } = useStepperContext();

  const handleNext = () => {
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
    <button className="bg-black text-white px-4 py-2" onClick={handleNext}>
      Next
    </button>
  );
};

export default NextButton;
