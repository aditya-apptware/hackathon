import React, { useEffect, useRef } from "react";
import { useStepperContext } from "../../context/StepperContext";

const CollegeNameForm = () => {
  const inputRef = useRef(null);
  const {
    updateFormData,
    setErrors,
    errors,
    formData: { collegeName },
    steps,
    setCurrentStep,
    setAnimatingStep,
  } = useStepperContext();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    updateFormData({ collegeName: value });

    // Clear any previous errors on user input
    setErrors((prev) => ({ ...prev, collegeName: "" }));
  };

  const handleBlur = () => {
    if (!collegeName.trim()) {
      setErrors((prev) => ({
        ...prev,
        collegeName: "College Name is required.",
      }));
    } else if (collegeName.trim().length < 3) {
      setErrors((prev) => ({
        ...prev,
        collegeName: "College Name must be at least 3 characters.",
      }));
    } else {
      // If no error, update the form data
      updateFormData({ collegeName });
    }
  };

  const validateCurrentStep = () => {
    const currentStepData = steps[1];
    if (currentStepData?.validate) {
      // Validate the current step
      return currentStepData.validate();
    }
    return true; // Default to true if no validation function is provided
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      setCurrentStep((prev) => prev + 1);
      setAnimatingStep((prev) => prev + 1);
    }
  };

  const handleKeyDown = (e) => {
    if (!collegeName.trim()) {
      setErrors((prev) => ({
        ...prev,
        collegeName: "College Name is required.",
      }));
    } else if (collegeName.trim().length < 3) {
      setErrors((prev) => ({
        ...prev,
        collegeName: "College Name must be at least 3 characters.",
      }));
    } else {
      // If no error, update the form data
      updateFormData({ collegeName });

      if (e.key === "Enter") {
        handleNext();
      }
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="collegeName"
        className="font-medium text-[18px] md:text-[25px] leading-[18px] md:leading-[25.06px]"
      >
        College Name
      </label>
      <input
        id="collegeName"
        type="text"
        placeholder="Enter your college name"
        value={collegeName}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className="md:w-[648.05px] placeholder-[#929090] border-b-[#313030] border-b p-2 outline-none bg-transparent focus:bg-transparent active:bg-transparent"
        autoComplete="off"
        required
        ref={inputRef}
      />
      {errors.collegeName && (
        <p className="text-red-500 mt-2 text-sm">{errors.collegeName}</p>
      )}
    </div>
  );
};

export default CollegeNameForm;
