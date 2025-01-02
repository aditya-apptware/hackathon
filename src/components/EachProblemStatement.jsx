import CriteriaSVG from "../assets/icons/criteria.svg";

export const EachProblemStatement = ({ statement }) => {
  const { number, question, description, judgingCriteria, expectedOutput } =
    statement;
  return (
    <div>
      <div className="w-[1000px]">
        <div className="font-robotoMono font-normal text-[18px] leading-[83px]">
          Problem Statement {number}
        </div>
        <div className="font-spaceGrotesk font-normal text-[48px] leading-[64px] text-default">
          {question}
        </div>
        <div className="font-robotoMono font-normal text-[20px] leading-[26px] mt-5 text-lightText">
          {description}
        </div>
      </div>
      <div className="mt-24">
        <div className="font-karmatic  font-normal text-[57px] leading-[76px] text-default">
          Judging Criteria
        </div>
        <div className="flex gap-[20px] mt-12">
          {judgingCriteria.map((each) => {
            const { title, description } = each;
            return (
              <div
                className="border p-[40px] flex flex-col gap-[10px] w-[389px] h-[223px]"
                style={{
                  borderImageSource:
                    "linear-gradient(180deg, #FFFFFF 13%, #999999 34%); border-image-slice: 1;",
                }}
                key={title}
              >
                <img
                  src={CriteriaSVG}
                  alt="judging criteria icon"
                  className="h-5 w-5"
                />
                <div className="font-robotoMono font-medium text-[20px] leading-[24px]">
                  {title}
                </div>
                <div className="font-robotoMono font-semibold text-[16px] leading-[24px] text-lightText2">
                  {description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-24">
        <div className="font-karmatic  font-normal text-[57px] leading-[76px] text-default">
          Expected Output
        </div>
        <div className="mt-10 px-5">
          <ul className="text-lightText">
            {expectedOutput.map((each) => {
              return (
                <li
                  key={each}
                  className="font-robotoMono font-normal text-[24px] leading-[32px] text-lightText"
                  style={{ listStyle: "initial" }}
                >
                  {each}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
