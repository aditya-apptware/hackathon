import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
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
  graduationYear: "2024",
};

const googleScriptUrl =
  "https://script.google.com/macros/s/AKfycbyxCBzI4Zv_qs8Iqhq_NTHOBNuAdNE36fzUyRCgpuh9CuKOs14QBsB6WfUcqYfTBCsP/exec";

export const StepperProvider = ({ children }) => {
  const { closeForm, setLoading } = useAppContext();

  const [formData, setFormData] = useState({ ...defaultFormData });
  const [direction, setDirection] = useState("up"); // Default direction
  const [currentStep, setCurrentStep] = useState(0);
  const [animatingStep, setAnimatingStep] = useState(currentStep); // Separate state for the animating step

  const [errors, setErrors] = useState({});

  const updateFormData = (data) =>
    setFormData((prev) => ({ ...prev, ...data }));

  const onConfirm = () => {
    setLoading(true);
    fetch(googleScriptUrl, {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        toast.success("Data submitted successfully!");
        closeForm();
      })
      .catch((error) => {
        toast.error("Failed to send data. Please try again.");
        console.error(error);
      })
      .finally(() => setLoading(false));
  };

  const onCancel = () => {
    setFormData({ ...defaultFormData });
    setDirection("down");
    setErrors({});
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
          setErrors((prev) => ({
            ...prev,
            teamName: "Team Name is required.",
          }));
          return false;
        }
        return true;
      },
    },
    {
      component: <CollegeNameForm />,
      validate: () => {
        if (!formData.collegeName || formData.collegeName.trim() === "") {
          setErrors((prev) => ({
            ...prev,
            collegeName: "College Name is required.",
          }));
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
          if (!member?.fullName) {
            setErrors((prev) => ({
              ...prev,
              fullName: "Full Name is required.",
            }));
          }
          if (!member?.email) {
            setErrors((prev) => ({
              ...prev,
              email: "Email is required.",
            }));
          }

          if (!member?.mobile) {
            setErrors((prev) => ({
              ...prev,
              mobile: "Mobile is required.",
            }));
          }

          if (!member?.graduationYear) {
            setErrors((prev) => ({
              ...prev,
              graduationYear: "Graduation Year is required.",
            }));
          }
          return false;
        } else {
          if (
            member?.email &&
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
              member?.email
            )
          ) {
            setErrors((prev) => ({
              ...prev,
              email: "Email pattern is wrong.",
            }));
            return false;
          }
          if (member?.mobile && !/^\d{10}$/.test(member?.mobile)) {
            setErrors((prev) => ({
              ...prev,
              mobile: "Mobile number should be exactly 10 digits.",
            }));
            return false;
          }
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
