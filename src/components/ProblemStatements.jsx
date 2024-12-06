import { Button } from "./Button";

export const ProblemStatements = () => {
  return (
    <div className="flex flex-col gap-5 w-[1120px] mx-auto">
      <div className="font-extrabold text-[70px] leading-[68px]">
        PROBLEM
        <br />
        STATEMENTS
      </div>
      <div className="font-normal text-[28px] leading-[42px]">
        Lorem ipsum dolor sit amet consectetur adipiscing elit
      </div>
      <div className="flex justify-center gap-5 flex-wrap">
        <div className="flex flex-col p-16 items-start justify-center gap-5 rounded-[14px] bg-gray-300 w-[549px] h-[422px]">
          <img
            src="/assets/images/personal-assistant.svg"
            alt="ai powered personal assistant"
            className="w-[82px] h-[84px]"
          />
          <div className="font-medium text-[28px] leading-[42px]">
            AI-Powered Personal Assistant
          </div>
          <div className="font-normal text-[24px] leading-[42px]">
            Develop an intelligent virtual assistant that can schedule meetings,
            answer questions, and provide recommendations...
          </div>
        </div>
        <div className="flex flex-col p-16 items-start justify-center gap-5 rounded-[14px] bg-gray-300 w-[549px] h-[422px]">
          <img
            src="/assets/images/personal-assistant.svg"
            alt="ai powered personal assistant"
            className="w-[82px] h-[84px]"
          />
          <div className="font-medium text-[28px] leading-[42px]">
            AI-Powered Personal Assistant
          </div>
          <div className="font-normal text-[24px] leading-[42px]">
            Develop an intelligent virtual assistant that can schedule meetings,
            answer questions, and provide recommendations...
          </div>
        </div>
        <div className="flex flex-col p-16 items-start justify-center gap-5 rounded-[14px] bg-gray-300 w-[549px] h-[422px]">
          <img
            src="/assets/images/personal-assistant.svg"
            alt="ai powered personal assistant"
            className="w-[82px] h-[84px]"
          />
          <div className="font-medium text-[28px] leading-[42px]">
            AI-Powered Personal Assistant
          </div>
          <div className="font-normal text-[24px] leading-[42px]">
            Develop an intelligent virtual assistant that can schedule meetings,
            answer questions, and provide recommendations...
          </div>
        </div>
        <div className="flex flex-col p-16 items-start justify-center gap-5 rounded-[14px] bg-gray-300 w-[549px] h-[422px]">
          <img
            src="/assets/images/personal-assistant.svg"
            alt="ai powered personal assistant"
            className="w-[82px] h-[84px]"
          />
          <div className="font-medium text-[28px] leading-[42px]">
            AI-Powered Personal Assistant
          </div>
          <div className="font-normal text-[24px] leading-[42px]">
            Develop an intelligent virtual assistant that can schedule meetings,
            answer questions, and provide recommendations...
          </div>
        </div>
      </div>
      <div className="register-button mt-8 mx-auto">
        <Button label="VIEW ALL" />
      </div>
    </div>
  );
};
