import React from "react";

export const Event = () => {
  return (
    <div className="flex flex-col gap-5 w-[650px] mx-auto">
      <div className="w-[326px] font-bold text-[47.42px] leading-[112px] text-textDark opacity-[36%] mx-auto">
        Jan 17 - Jan 19
      </div>
      <div className="relative flex mx-auto w-[650px] h-[328px]">
        <div className="absolute left-0 top-0 font-extrabold text-[158px] leading-[152px] text-textDark opacity-[36%]">
          24
        </div>
        <div className="absolute left-[157px] top-[74px] font-bold text-[31.42px] height-[50px]">
          <div className="bg-textLight flex items-center justify-center w-fit h-fit">
            <span className="opacity-[36%] text-textDark leading-none">Hours</span>
          </div>
        </div>
        <div className="absolute top-[-40px] left-[30%] font-extrabold text-[408.04px] leading-[392.54px] text-textDark opacity-[11%]">
          &
        </div>
        <div className="absolute right-0 bottom-0 font-extrabold text-[158px] leading-[152px] text-textDark opacity-[36%]">
          17
        </div>
        <div className="absolute right-[-63px] bottom-[60px] font-bold text-[31.42px] height-[50px]">
          <div className="bg-textLight flex items-center justify-center w-fit h-fit">
            <span className="opacity-[36%] text-textDark leading-none">Minutes</span>
          </div>
        </div>
      </div>
      <div>
        <div className="font-bold text-[34.42px] leading-[112px] text-textDark opacity-[36%] w-[306px] mx-auto">
          At Apptware Office
        </div>
        <div className="font-medium text-[18.42px] leading-[27px] text-textDark opacity-[37%] text-center w-[581px] mx-auto">
          910, Maruti Millennium Tower Baner, Maruti Chowk,<br />
          Mumbai-Pune-Bengaluru Highway, Baner, Pune, Maharashtra 411045
        </div>
      </div>
    </div>
  );
};
