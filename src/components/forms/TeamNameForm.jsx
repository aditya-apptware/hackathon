import React, { useState } from "react";
import { useStepperContext } from "../../context/StepperContext";

const TeamNameForm = () => {
  const { updateFormData, errors, setErrors } = useStepperContext();
  const [teamName, setTeamName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeamName(value);
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
    <div className="flex flex-col gap-2">
      <label
        htmlFor="teamName"
        className="font-medium text-[25px] leading-[25.06px]"
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
        className="w-[648.05px] placeholder-[#929090] border-b-[#313030] border-b p-2 outline-none"
        required
      />
      {errors.teamName && (
        <p className="text-red-500 mt-2 text-sm">{errors.teamName}</p>
      )}
    </div>
  );
};

export default TeamNameForm;
