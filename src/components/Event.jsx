import React from "react";

export const Event = () => {
  return (
    <div className="flex flex-col gap-5 md:w-[650px] w-full mx-auto px-4">
      <img
        src="/assets/images/event.svg"
        className="w-full object-cover"
        alt="event"
      />
      <div className="text-center">
        <div className="font-bold text-[28px] md:text-[34.42px] leading-[112px] text-textDark opacity-[36%] w-[306px] md:w-auto mx-auto">
          At Apptware Office
        </div>
        <div className="font-medium text-[14px] md:text-[18.42px] leading-[27px] text-textDark opacity-[37%] text-center w-full md:w-[581px] mx-auto">
          910, Maruti Millennium Tower Baner, Maruti Chowk,
          Mumbai-Pune-Bengaluru Highway, Baner, Pune, Maharashtra 411045
        </div>
      </div>
    </div>
  );
};
