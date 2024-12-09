import { Button } from "./Button";

export const Rules = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 w-full md:w-[1120px] h-auto mx-auto rounded-[31px] bg-bannerBackground py-[50px] md:px-[34px] px-[20px]">
      <div className="w-full md:w-[465px] flex flex-col justify-center">
        <div className="font-semibold text-[30px] md:text-[36px] leading-[53px]">
          Rules & Regulations
          <br />
          To Get You Started
        </div>
        <div className="register-button mt-8 font-bold text-[17.29px] leading-[20.92px] w-[200px] h-[60px]">
          <Button label="DOWNLOAD PDF" />
        </div>
      </div>
      <div className="w-full md:w-[587px] mt-5 md:mt-0">
        <img
          src="/assets/pics/rules-regulations.jpg"
          alt="rules and regulations banner"
          className="w-full h-auto rounded-[31px]"
        />
      </div>
    </div>
  );
};
