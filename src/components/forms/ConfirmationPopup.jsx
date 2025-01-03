import React from "react";

const ConfirmationPopup = ({ onCancel, onConfirm }) => {
  return (
    <div className="relative border border-black p-8 md:p-16 rounded-lg shadow-lg bg-gradient-to-br from-[#ABD40F] to-[#ABD40F] md:w-[624px] md:h-[386px] opacity-90 mx-auto">
      <h2 className="font-bold mb-6 font-medium text-[18px] md:text-[32px] leading-[24px] md:leading-[45px]">
        Are you sure you want to submit the form?
      </h2>
      <div className="flex justify-center gap-2 md:gap-8 absolute right-4 md:right-10 bottom-4 md:bottom-10 font-medium text-[16px] md:text-[22px] leading-[12px] md:leading-[22px]">
        <button
          className="bg-[transparent] text-black px-4 py-2"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button className="bg-black text-white px-4 py-2" onClick={onConfirm}>
          Yes
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
