import React, { useState } from "react";
import { useStepperContext } from "../../context/StepperContext";

const TeamNameForm = () => {
  const { updateFormData, errors, setErrors, formData:{teamName} } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ teamName: value });
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    if (!teamName.trim()) {
      setErrors((prev) => ({ ...prev, teamName: "Team Name is required" }));
      return false;
    }
    return true;
  };

  const handleBlur = (e) => {
    validate();
    updateFormData({ teamName });
  };

  return (
    <div className="flex flex-col gap-2 bg-transparent">
      <label
        htmlFor="teamName"
        className="font-medium text-[18px] md:text-[25px] leading-[18px] md:leading-[25.06px] bg-transparent"
      >
        Team Name
      </label>
      <input
        id="teamName"
        name="teamName"
        type="text"
        placeholder="Enter your team name"
        value={teamName}
        onChange={handleChange}
        onBlur={handleBlur}
        className="md:w-[648.05px] placeholder-[#929090] border-b-[#313030] border-b p-2 outline-none bg-transparent focus:bg-transparent active:bg-transparent"
        required
        autoComplete="off"
      />
      {errors.teamName && (
        <p className="text-red-500 mt-2 text-sm bg-transparent">
          {errors.teamName}
        </p>
      )}
    </div>
  );
};

export default TeamNameForm;
