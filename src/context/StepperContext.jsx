import React, { createContext, useContext, useState } from "react";
import AddMemberForm from "../components/forms/AddMemberForm";
import CollegeNameForm from "../components/forms/CollegeNameForm";
import ConfirmationPopup from "../components/forms/ConfirmationPopup";
import TeamNameForm from "../components/forms/TeamNameForm";
import { useAppContext } from "./AppContext";

const StepperContext = createContext();
const defaultFormData = {
  teamName: "",
  members: [],
  collegeName: "",
};

const googleScriptUrl =
  "https://script.google.com/macros/s/AKfycbwK3fV-fjjDLDd3vMs23TL4m0RsQnWXXfi6IYHRK-fbT35xxTuYuPruuKLPtNKhTvE4/exec";

export const StepperProvider = ({ children }) => {
  const { closeForm } = useAppContext();

  const [formData, setFormData] = useState({ ...defaultFormData });
  const [direction, setDirection] = useState("up"); // Default direction
  const [currentStep, setCurrentStep] = useState(0);
  const [animatingStep, setAnimatingStep] = useState(currentStep); // Separate state for the animating step

  const [errors, setErrors] = useState({});

  const updateFormData = (data) =>
    setFormData((prev) => ({ ...prev, ...data }));

  const onConfirm = () => {
    fetch(googleScriptUrl, {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Data sent to Google Sheets:", data);
        closeForm();
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  const onCancel = () => {
    setFormData({ ...defaultFormData });
    setDirection("down");
    setTimeout(() => {
      setCurrentStep(0);
      setAnimatingStep(0);
    }, 0);
  };

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
      component: (
        <ConfirmationPopup onCancel={onCancel} onConfirm={onConfirm} />
      ),
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
        animatingStep,
        setAnimatingStep,
      }}
    >
      {children}
    </StepperContext.Provider>
  );
};

export const useStepperContext = () => useContext(StepperContext);
