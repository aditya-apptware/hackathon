import React from "react";
import { useStepperContext } from "../../context/StepperContext";
import NextButton from "./NextButton";
import AddMemberButton from "./AddMemberButton";
import OkButton from "./OkayButton";
import DeleteMemberButton from "./DeleteMember";

const ButtonContainer = () => {
  const { formData, currentStep, steps } = useStepperContext();

  const isLastStep = currentStep === steps.length - 1;
  const isMaxMembers = formData.members.length >= 4;

  if (isLastStep) return null;
  if (isMaxMembers) return <>
  <OkButton />
  <DeleteMemberButton />
  </>

  return (
    <>
      <div className="flex gap-4">
        <NextButton />
        {currentStep > 1 && !isLastStep && !isMaxMembers && <AddMemberButton />}
        {currentStep > 2 && <DeleteMemberButton />}
      </div>
    </>
  );
};

export default ButtonContainer;
