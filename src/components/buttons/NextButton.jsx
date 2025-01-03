import React from "react";
import { useStepperContext } from "../../context/StepperContext";

const NextButton = () => {
  const {
    currentStep,
    setCurrentStep,
    steps,
    formData: { teamName, members, collegeName },
    setAnimatingStep,
    setIsError,
  } = useStepperContext();

  const handleNext = () => {
    if (validateCurrentStep()) {
      setIsError(false);
      if (teamName && members.length && collegeName) {
        setCurrentStep(6);
        setAnimatingStep(6);
      } else {
        setCurrentStep((prev) => prev + 1);
        setAnimatingStep((prev) => prev + 1);
      }
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
    <button className="bg-black text-white px-4 py-2" onClick={handleNext}>
      Next
    </button>
  );
};

export default NextButton;
