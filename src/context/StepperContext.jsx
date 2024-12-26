import React, { createContext, useContext, useState } from "react";
import TeamNameForm from "../components/forms/TeamNameForm";
import AddMemberForm from "../components/forms/AddMemberForm";
import CollegeNameForm from "../components/forms/CollegeNameForm";
import ConfirmationPopup from "../components/forms/ConfirmationPopup";

const StepperContext = createContext();

export const StepperProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    teamName: "",
    members: [],
    collegeName: "",
  });
  const [direction, setDirection] = useState("up"); // Default direction

  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState({});

  const updateFormData = (data) =>
    setFormData((prev) => ({ ...prev, ...data }));

  // Define the steps array
  const steps = [
    {
      component: <TeamNameForm />,
      validate: () => {
        if (!formData.teamName || formData.teamName.trim() === "") {
          // setError("Team Name is required.");
          return false;
        }
        return true;
      },
    },
    {
      component: <AddMemberForm memberIndex={0} />,
      validate: () => {
        const member = formData.members[0];
        if (!member || !member.fullName || !member.email || !member.mobile) {
          // setError("All fields for Team Member 1 are required.");
          return false;
        }
        return true;
      },
    },
    {
      component: <CollegeNameForm />,
      validate: () => {
        if (!formData.collegeName || formData.collegeName.trim() === "") {
          // setError("College Name is required.");
          return false;
        }
        return true;
      },
    },
    ...Array(3)
      .fill(null)
      .map((_, index) => ({
        component: <AddMemberForm memberIndex={index + 1} />,
        validate: () => {
          const member = formData.members[index + 1];
          if (!member || !member.fullName || !member.email || !member.mobile) {
            // setError(`All fields for Team Member ${index + 2} are required.`);
            return false;
          }
          return true;
        },
      })),
    {
      component: <ConfirmationPopup />,
      validate: () => true, // No validation for the confirmation step
    },
  ];

  return (
    <StepperContext.Provider
      value={{
        formData,
        currentStep,
        setCurrentStep,
        updateFormData,
        errors,
        setErrors,
        steps,
        direction,
        setDirection,
      }}
    >
      {children}
    </StepperContext.Provider>
  );
};

export const useStepperContext = () => useContext(StepperContext);
