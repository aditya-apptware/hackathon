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
    <div className="relative flex flex-col gap-5 w-full bg-white font-robotoMono py-10 md:py-16 px-4 md:px-20">
      <div className="font-karmatic text-2xl md:text-4xl leading-tight md:leading-[77px] text-[#abd40f] mt-8 md:mt-20">
        Problem Statements
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-12 self-center md:self-start items-start">
        {statements.map((item, itemIndex) => {
          const bgColor = itemIndex % 2 === 0 ? "bg-black" : "bg-white";
          const textColor = itemIndex % 2 === 0 ? "text-white" : "text-black";
          const { rotate: rotateValue, top } = item;

          return (
            <div
              key={itemIndex}
              className={`${bgColor} ${textColor} max-w-[328px] max-h-[192px] border border-black p-4 md:p-6 flex flex-col justify-between w-full md:w-[calc(50%-24px)]`}
              style={{
                transform: `rotate(${
                  window.innerWidth >= 768 ? rotateValue : 0
                }deg)`,
                marginTop: `${window.innerWidth >= 768 ? top : 0}px`,
              }}
            >
              <div className="text-sm md:text-lg font-medium leading-6">
                {item.statement}
              </div>
              <div className="flex gap-3 mt-2 items-center">
                <div className="w-7 h-7 md:w-10 md:h-10 flex items-center justify-center bg-[#abd40f] text-black text-xs md:text-sm font-bold">
                  {item.abbr}
                </div>
                <div className="text-xs md:text-sm uppercase font-bold">
                  {item.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-1 md:bottom-16 right-4 md:right-20">
        <button className="flex items-stretch text-black border border-black uppercase text-xs md:text-sm">
          <span className="flex items-center px-3 py-1 md:px-4 md:py-2">
            View All
          </span>
          <span className="flex items-center justify-center w-8 md:w-10 bg-[#ABD40F] border-l border-black">
            <img src={ArrowRight} width={14} height={14} alt="arrow" />
          </span>
        </button>
      </div>
    </div>
  );
};
