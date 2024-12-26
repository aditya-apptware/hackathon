import ArrowRight from "../assets/images/arrow-right.svg";

const statements = [
  {
    statement:
      "Develop an intelligent virtual assistant that can schedule meetings, answer questions...",
    abbr: "ME",
    title: "Problem Statement 1",
    rotate: -8,
    top: 124,
  },
  {
    statement:
      "Develop an intelligent virtual assistant that can schedule meetings, answer questions...",
    abbr: "MA",
    title: "Problem Statement 2",
    rotate: 2,
    top: 86,
  },
  {
    statement:
      "Develop an intelligent virtual assistant that can schedule meetings, answer questions...",
    abbr: "MM",
    title: "Problem Statement 3",
    rotate: 6,
    top: 90,
  },
  {
    statement:
      "Develop an intelligent virtual assistant that can schedule meetings, answer questions...",
    abbr: "GS",
    title: "Problem Statement 4",
    rotate: 0,
    top: 0,
  },
];

export const ProblemStatements = () => {
  return (
    <div className="relative flex flex-col gap-5 w-full bg-black font-robotoMono py-[80px] md:pb-[119px] px-[32px]">
      <div className="font-karmatic text-[36px] leading-[48px] md:text-[58px] md:leading-[77px] text-[#abd40f] mt-8 md:mt-[89px] md:mx-8 md:ml-[209px]">
        Problem Statements
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 md:mx-8 md:mx-[150px] items-start">
        {statements.map((item, itemIndex) => {
          const bgColor = itemIndex % 2 === 0 ? "black" : "white";
          const color = itemIndex % 2 === 0 ? "white" : "black";
          const { rotate: rotateValue, top } = item;

          return (
            <div
              key={itemIndex}
              className={`bg-${bgColor} p-4 md:p-5 text-${color} border border-white h-auto md:h-[190px]`}
              style={{
                transform: `rotate(${rotateValue}deg)`,
                marginTop: `${top}px`,
              }}
            >
              <div className="text-sm md:text-4 font-medium leading-6">
                {item.statement}
              </div>
              <div className="flex gap-3 mt-5 items-center">
                <div className="w-7 h-7 md:w-9 md:h-9 px-2 py-2 bg-[#abd40f] text-black text-[12px] md:text-[14px]">
                  {item.abbr}
                </div>
                <div className="text-[12px] md:text-[14px] uppercase font-bold leading-6 md:leading-8">
                  {item.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-[50px] md:bottom-[146px] right-[32px] md:right-[148px]">
        <button className="flex items-stretch text-white border border-white uppercase text-sm md:text-base">
          <span className="flex items-center px-3 py-1 md:px-4 md:py-2">
            View All
          </span>
          <span className="flex items-center justify-center w-8 md:w-9 bg-[#ABD40F] border-l border-[#ABD40F] text-black">
            <img src={ArrowRight} width={14} height={14} alt="arrow" />
          </span>
        </button>
      </div>
    </div>
  );
};
