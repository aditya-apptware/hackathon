export const EachProblemStatement = ({ statement }) => {
  return (
    <div className="xl:w-[1024px] md:w-[668px] w-[275px] p-6">
      <div className="font-robotoMono font-bold text-[18px] leading-[30px] mb-2">
        Problem Statement
      </div>
      <div className="font-spaceGrotesk font-normal md:text-[24px] text-[20px] leading-[32px] text-default mb-4">
        {statement.statement}
      </div>
      <div className="font-robotoMono font-medium md:text-[20px] text-[12x] leading-[26px] mt-5 text-lightText">
       <span className="text-black"> Description:</span> {statement.description}
      </div>
      {/* <div className="font-robotoMono font-medium text-[20px] leading-[26px] mt-2 text-lightText">
      Challenges to Address:: {statement.challenges}
      </div> */}
    </div>
  );
};
