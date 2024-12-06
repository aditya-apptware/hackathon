import { Button } from "./Button";

export const Rules = () => {
  return (
    <div className="flex gap-5 w-[1120px] h-[330px] mx-auto rounded-[31px] bg-[#d9d9d9] pt-[50px] pr-[34px] pb-[50px] pl-[34px]">
      <div className="w-[465px] flex flex-col justify-center">
        <div className="font-semibold text-[36px] leading-[53px]">
          Rules & Regulations
          <br />
          Toget You Started
        </div>
        <div className="register-button mt-8 font-bold text-[17.29px] leading-[20.92px] w-[200px] h-[60px]">
          <Button label="DOWNLOAD PDF" />
        </div>
      </div>
      <div className="w-[587px]">
        <img
          src="/assets/pics/rules-regulations.jpg"
          className="rounded-[31px]"
        />
      </div>
    </div>
  );
};
