import React, { useState } from "react";
import { useStepperContext } from "../../context/StepperContext";

const CollegeNameForm = () => {
  const { updateFormData, setErrors, errors } = useStepperContext();
  const [collegeName, setCollegeName] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setCollegeName(value);

    // Clear any previous errors on user input
    setErrors((prev) => ({ ...prev, collegeName: "" }));
  };

  const handleBlur = () => {
    if (!collegeName.trim()) {
      setErrors((prev) => ({ ...prev, collegeName: "College Name is required." }));
    } else if (collegeName.trim().length < 3) {
      setErrors((prev) => ({ ...prev, collegeName: "College Name must be at least 3 characters." }));
    } else {
      // If no error, update the form data
      updateFormData({ collegeName });
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="collegeName"
        className="font-medium text-[25px] leading-[25.06px]"
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
        className="w-[648.05px] placeholder-[#929090] border-b-[#313030] border-b p-2 outline-none"
        required
      />
      {errors.collegeName && (
        <p className="text-red-500 mt-2 text-sm">{errors.collegeName}</p>
      )}
    </div>
  );
};

export default CollegeNameForm;
