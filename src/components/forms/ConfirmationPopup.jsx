import React from "react";

const ConfirmationPopup = ({ onCancel, onConfirm }) => {
  return (
    <div className="relative border border-black p-16 rounded-lg shadow-lg bg-gradient-to-br from-[#ABD40F] to-[#ABD40F] w-[624px] h-[386px] opacity-90 mx-auto">
      <h2 className="font-bold mb-6 font-medium text-[32px] leading-[45px]">
        Are you sure you want to submit the form?
      </h2>
      <div className="flex justify-center gap-8 absolute right-10 bottom-10 font-medium text-[22px] leading-[22px]">
        <button
          className="bg-[transparent] text-black px-8 py-3"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button className="bg-black text-white px-8 py-3" onClick={onConfirm}>
          Yes
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
