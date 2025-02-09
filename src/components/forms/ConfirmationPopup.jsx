import React, { useMemo, useState } from "react";
import { useStepperContext } from "../../context/StepperContext";

const ConfirmationPopup = ({ onCancel, onConfirm }) => {
  const { formData } = useStepperContext();
  const [isDisabled, setIsDisabled] = useState(false);

  const handleFormSubmission = () => {
    setIsDisabled(true);
    if (isFormValid) {
      onConfirm();
    }
  };

  const isFormValid = useMemo(() => {
    const { teamName, collegeName, members } = formData;

    if (!teamName || !collegeName || !members.length) return false;
    if (members.length) {
      let hasError = false;
      members.forEach((member) => {
        const { fullName, email, mobile, expertise, graduationYear } = member;
        if (!fullName || !email || !mobile || !expertise || !graduationYear) {
          hasError = true;
        }
      });
      if (hasError) return false;
    }

    return true;
  }, [formData]);

  return (
    <div className="relative border border-black p-4 md:p-12 rounded-lg shadow-lg bg-gradient-to-br from-[#ABD40F] to-[#ABD40F] lg:w-[495px] opacity-90 mx-auto">
      <h2 className="font-bold mb-6 font-medium text-[18px] md:text-[32px] leading-[24px] md:leading-[45px]">
        Are you sure you want to submit the form?
      </h2>
      <p>
        Note: Registraion fees for members will be collected after selection
        process!!
      </p>
      <div className="flex justify-end mr-4 mb-4 gap-2 md:gap-8 font-medium text-[16px] md:text-[22px] leading-[12px] md:leading-[22px] mt-10">
        <button
          className="bg-[transparent] text-black px-4 py-2"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="bg-black text-white px-4 py-3 disabled:bg-gray-600 hover:bg-opacity-[0.8] disabled:hover:bg-opacity-[1]"
          onClick={handleFormSubmission}
          disabled={!isFormValid || isDisabled}
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
