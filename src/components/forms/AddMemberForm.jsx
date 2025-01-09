import React, { useState, useEffect, useRef } from "react";
import { useStepperContext } from "../../context/StepperContext";

const AddMemberForm = ({ memberIndex }) => {
  const inputRef = useRef(null);
  const {
    formData,
    updateFormData,
    errors,
    setErrors,
    currentStep,
    steps,
    setCurrentStep,
    setAnimatingStep,
  } = useStepperContext();
  const [member, setMember] = useState(formData.members[memberIndex] || {});

  useEffect(() => {
    // Initialize the member when the formData changes
    setMember(formData.members[memberIndex] || {});
  }, [formData.members, memberIndex]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedMember = { ...member, [name]: value };
    if (!updatedMember.graduationYear) updatedMember.graduationYear = "2024";
    setMember(updatedMember);

    // Update formData immediately
    const updatedMembers = [...formData.members];
    updatedMembers[memberIndex] = updatedMember;
    updateFormData({ members: updatedMembers });

    // Clear error for the field as the user types
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleBlur = (e) => {
    if (e.relatedTarget && e.relatedTarget.tagName === "BUTTON") {
      return; // Don't validate if focus is shifting to a button
    }
  
  
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";
    if (name === "fullName" && !value.trim()) {
      error = "Full Name is required.";
    } else if (
      name === "email" &&
      (!value.trim() ||
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value))
    ) {
      error = "A valid email is required.";
    } else if (
      name === "mobile" &&
      (!value.trim() || !/^\d{10}$/.test(value))
    ) {
      error = "A valid 10-digit mobile number is required.";
    } else if (name === "expertise" && !value.trim()) {
      error = "Add few lines here.";
    } else if (name === "graduationYear" && !value.trim()) {
      error = "Select a graduation";
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateCurrentStep = () => {
    const currentStepData = steps[currentStep];
    if (currentStepData?.validate) {
      // Validate the current step
      return currentStepData.validate();
    }
    return true; // Default to true if no validation function is provided
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      if (
        formData.teamName &&
        formData.members.length &&
        formData.collegeName
      ) {
        setCurrentStep(6);
        setAnimatingStep(6);
      } else {
        setCurrentStep((prev) => prev + 1);
        setAnimatingStep((prev) => prev + 1);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission or default behavior
      validateField("fullName", e.target.value) &&
        validateField("email", e.target.value) &&
        validateField("mobile", e.target.value) &&
        validateField("expertise", e.target.value) &&
        validateField("graduationYear", e.target.value ?? "2024");

      const isValid = Object.values(errors).every((each) => !each.length);
      if (isValid) {
        handleNext();
      }
    }
  };

  return (
    <>
      <h1 className="font-semibold text-[20px] md:text-[32px] leading-[18px] md:leading-[25.06px] mb-16">
        Team Member {memberIndex + 1}&nbsp;
        <span className="font-bold text-[14px]">(Rs. 250 per member)</span>
      </h1>
      <form className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <label className="font-medium text-[18px] md:text-[25px] leading-[18px] md:leading-[25.06px]">
            Full Name
          </label>
          <input
            name="fullName"
            value={member.fullName || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            placeholder="Type your answer here"
            className="md:w-[648.05px] placeholder-[#929090] border-b-[#313030] border-b p-2 outline-none bg-transparent focus:bg-transparent active:bg-transparent"
            autoComplete="off"
            required
            ref={inputRef}
          />
          {errors.fullName && (
            <span className="text-red-500 text-sm">{errors.fullName}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-[18px] md:text-[25px] leading-[18px] md:leading-[25.06px]">
            Email
          </label>
          <input
            name="email"
            value={member.email || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            placeholder="Type your answer here"
            className="md:w-[648.05px] placeholder-[#929090] border-b-[#313030] border-b p-2 outline-none bg-transparent focus:bg-transparent active:bg-transparent"
            autoComplete="off"
            required
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-[18px] md:text-[25px] leading-[18px] md:leading-[25.06px]">
            Mobile
          </label>
          <input
            name="mobile"
            value={member.mobile || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={(e) => {
              // Prevent non-numeric input
              if (
                !/[0-9]/.test(e.key) &&
                e.key !== "Backspace" &&
                e.key !== "Tab"
              ) {
                e.preventDefault();
              }
            }}
            type="tel"
            maxLength={10}
            placeholder="Type your answer here"
            className="md:w-[648.05px] placeholder-[#929090] border-b-[#313030] border-b p-2 outline-none bg-transparent focus:bg-transparent active:bg-transparent"
            autoComplete="off"
            required
          />
          {errors.mobile && (
            <span className="text-red-500 text-sm">{errors.mobile}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-[18px] md:text-[25px] leading-[18px] md:leading-[25.06px]">
            Elaborate on Your Expertise and Achievements
          </label>
          <input
            name="expertise"
            value={member.expertise || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            placeholder="Share your experiences and include your GitHub profile"
            className="md:w-[648.05px] placeholder-[#929090] border-b-[#313030] border-b p-2 outline-none bg-transparent focus:bg-transparent active:bg-transparent"
            autoComplete="off"
            required
          />
          {errors.expertise && (
            <span className="text-red-500 text-sm">{errors.expertise}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-[18px] md:text-[25px] leading-[18px] md:leading-[25.06px]">
            Graduation Year
          </label>
          <div className="mt-2 md:w-[648.05px] border-b border-b-[#313030] pb-2 flex gap-8 text-[14px] md:text-[18px] leading-[18px] md:leading-[25.06px] font-normal">
            {["2023", "2024", "2025"].map((year, yearIndex) => (
              <div key={year} className="flex align-center">
                <input
                  type="radio"
                  name="graduationYear"
                  value={year}
                  defaultChecked={year === "2024"}
                  onChange={(e) => {
                    handleChange(e);
                    handleBlur(e);
                  }}
                  onKeyDown={handleKeyDown}
                  className="w-5 h-5 appearance-none border-2 border-black rounded-full checked:bg-black checked:border-transparent cursor-pointer"
                />
                <label className="ml-4">{year}</label>
              </div>
            ))}
          </div>
          {errors.graduationYear && (
            <span className="text-red-500 text-sm">
              {errors.graduationYear}
            </span>
          )}
        </div>
      </form>
    </>
  );
};

export default AddMemberForm;
