import React, { useState } from "react";
import { useStepperContext } from "../../context/StepperContext";

const DeleteMemberButton = () => {
  const {
    currentStep,
    setCurrentStep,
    updateFormData,
    setAnimatingStep,
    formData,
    setErrors,
  } = useStepperContext();

  const handleClick = () => {
    if (formData?.members?.length>=currentStep-2) {
      // Create a new array without the member at currentStep - 1
      const dataMembers = formData.members.filter(
        (_, index) => index !== currentStep - 2
      );

      updateFormData({ ...formData, members: dataMembers });
    }

    setErrors({});
    setCurrentStep((prev) => prev - 1);
    setAnimatingStep((prev) => prev - 1);
  };

  return (
    <button
      className="bg-transparent border-black px-4 py-2 hover:underline"
      onClick={handleClick}
    >
      Delete Member
    </button>
  );
};

export default DeleteMemberButton;
