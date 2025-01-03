import React, { useState, useEffect } from "react";
import { useStepperContext } from "../../context/StepperContext";

const AddMemberForm = ({ memberIndex }) => {
  const { formData, updateFormData, errors, setErrors } = useStepperContext();
  const [member, setMember] = useState(formData.members[memberIndex] || {});

  useEffect(() => {
    // Initialize the member when the formData changes
    setMember(formData.members[memberIndex] || {});
  }, [formData.members, memberIndex]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedMember = { ...member, [name]: value };
    setMember(updatedMember);

    // Update formData immediately
    const updatedMembers = [...formData.members];
    updatedMembers[memberIndex] = updatedMember;
    updateFormData({ members: updatedMembers });

    // Clear error for the field as the user types
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleBlur = (e) => {
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
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  return (
    <>
      <h1 className="font-medium text-[32px] leading-[25.06px] mb-16">
        Team Member {memberIndex + 1}
      </h1>
      <form className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <label className="font-medium text-[25px] leading-[25.06px]">
            Full Name
          </label>
          <input
            name="fullName"
            value={member.fullName || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Type your answer here"
            className="w-[648.05px] placeholder-[#929090] border-b-[#313030] border-b p-2 outline-none bg-transparent focus:bg-transparent active:bg-transparent"
            autoComplete="off"
            required
          />
          {errors.fullName && (
            <span className="text-red-500 text-sm">{errors.fullName}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-[25px] leading-[25.06px]">
            Email
          </label>
          <input
            name="email"
            value={member.email || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Type your answer here"
            className="w-[648.05px] placeholder-[#929090] border-b-[#313030] border-b p-2 outline-none bg-transparent focus:bg-transparent active:bg-transparent"
            autoComplete="off"
            required
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-[25px] leading-[25.06px]">
            Mobile
          </label>
          <input
            name="mobile"
            value={member.mobile || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Type your answer here"
            className="w-[648.05px] placeholder-[#929090] border-b-[#313030] border-b p-2 outline-none bg-transparent focus:bg-transparent active:bg-transparent"
            autoComplete="off"
            required
          />
          {errors.mobile && (
            <span className="text-red-500 text-sm">{errors.mobile}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-[25px] leading-[25.06px]">
            Graduation Year
          </label>
          <div className="mt-2 w-[648.05px] border-b border-b-[#313030] pb-2 flex gap-8 text-[18px] leading-[25.06px] font-normal">
            {["2023", "2024", "2025"].map((year, yearIndex) => (
              <div key={year} className="flex align-center">
                <input
                  type="radio"
                  name="graduationYear"
                  value={year}
                  defaultChecked={yearIndex === 1}
                  onChange={(e) => {
                    handleChange(e);
                    handleBlur(e);
                  }}
                  className="w-5 h-5 appearance-none border-2 border-black rounded-full checked:bg-black checked:border-transparent cursor-pointer"
                />
                <label className="ml-4">{year}</label>
              </div>
            ))}
          </div>
        </div>
      </form>
    </>
  );
};

export default AddMemberForm;
