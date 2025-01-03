import React from "react";
import { useStepperContext } from "../../context/StepperContext";
import NextButton from "./NextButton";
import AddMemberButton from "./AddMemberButton";
import OkButton from "./OkayButton";

const ButtonContainer = () => {
  const { formData, currentStep, steps, isError } = useStepperContext();

  const isLastStep = currentStep === steps.length - 1;
  const isMaxMembers = formData.members.length >= 4;

  if (isLastStep) return null;
  if (isMaxMembers) return <OkButton />;

  return (
    <>
      <div className="flex gap-4">
        <NextButton />
        {currentStep > 1 && !isLastStep && !isMaxMembers && <AddMemberButton />}
      </div>
      {isError && (
        <p className="text-red-500 mt-2 text-sm bg-transparent">
          All Fields are mandatory
        </p>
      )}
    </>
  );
};

export default ButtonContainer;
