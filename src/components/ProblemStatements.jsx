import { Button } from "./Button";

export const ProblemStatements = () => {
  return (
    <div className="flex flex-col gap-5 w-full md:w-[1120px] mx-auto px-4">
      <div className="font-extrabold text-[50px] md:text-[70px] leading-[50px] md:leading-[68px] text-center md:text-start">
        PROBLEM
        <br />
        STATEMENTS
      </div>
      <div className="font-normal text-[20px] md:text-[28px] leading-[30px] md:leading-[42px] text-center md:text-start">
        Lorem ipsum dolor sit amet consectetur adipiscing elit
      </div>
      <div className="flex justify-center gap-5 flex-wrap mt-8">
        {/* Problem Card 1 */}
        <div className="flex flex-col p-8 md:p-16 items-start justify-center gap-5 rounded-[14px] bg-mentorBackground w-full md:w-[500px] h-[422px]">
          <img
            src="/assets/images/personal-assistant.svg"
            alt="ai powered personal assistant"
            className="w-[82px] h-[84px]"
          />
          <div className="font-medium text-[20px] md:text-[28px] leading-[30px] md:leading-[42px]">
            AI-Powered Personal Assistant
          </div>
          <div className="font-normal text-[16px] md:text-[24px] leading-[24px] md:leading-[42px]">
            Develop an intelligent virtual assistant that can schedule meetings,
            answer questions, and provide recommendations...
          </div>
        </div>

        {/* Problem Card 2 */}
        <div className="flex flex-col p-8 md:p-16 items-start justify-center gap-5 rounded-[14px] bg-mentorBackground w-full md:w-[500px] h-[422px]">
          <img
            src="/assets/images/personal-assistant.svg"
            alt="ai powered personal assistant"
            className="w-[82px] h-[84px]"
          />
          <div className="font-medium text-[20px] md:text-[28px] leading-[30px] md:leading-[42px]">
            AI-Powered Personal Assistant
          </div>
          <div className="font-normal text-[16px] md:text-[24px] leading-[24px] md:leading-[42px]">
            Develop an intelligent virtual assistant that can schedule meetings,
            answer questions, and provide recommendations...
          </div>
        </div>

        {/* Problem Card 3 */}
        <div className="flex flex-col p-8 md:p-16 items-start justify-center gap-5 rounded-[14px] bg-mentorBackground w-full md:w-[500px] h-[422px]">
          <img
            src="/assets/images/personal-assistant.svg"
            alt="ai powered personal assistant"
            className="w-[82px] h-[84px]"
          />
          <div className="font-medium text-[20px] md:text-[28px] leading-[30px] md:leading-[42px]">
            AI-Powered Personal Assistant
          </div>
          <div className="font-normal text-[16px] md:text-[24px] leading-[24px] md:leading-[42px]">
            Develop an intelligent virtual assistant that can schedule meetings,
            answer questions, and provide recommendations...
          </div>
        </div>

        {/* Problem Card 4 */}
        <div className="flex flex-col p-8 md:p-16 items-start justify-center gap-5 rounded-[14px] bg-mentorBackground w-full md:w-[500px] h-[422px]">
          <img
            src="/assets/images/personal-assistant.svg"
            alt="ai powered personal assistant"
            className="w-[82px] h-[84px]"
          />
          <div className="font-medium text-[20px] md:text-[28px] leading-[30px] md:leading-[42px]">
            AI-Powered Personal Assistant
          </div>
          <div className="font-normal text-[16px] md:text-[24px] leading-[24px] md:leading-[42px]">
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
