export const Prizes = () => {
  return (
    <div className="flex flex-col gap-5 w-[1120px] mx-auto">
      <div className="font-extrabold text-[70px] leading-[42px]">
        Prizes
      </div>
      <div className="font-normal text-[28px] leading-[42px]">
        With Exclusive Hackathon Benefits
      </div>
      <div className="flex justify-center gap-6">
        <div className="flex flex-col items-center justify-center gap-5 rounded-[14px] bg-mentorBackground w-[549px] h-[507px]">
          <img
            src="/assets/images/winner.svg"
            alt=""
            className="w-[94.07px] h-[134.2px]"
          />
          <div className="font-extrabold text-[65px] leading-[42px]">
            WINNER
          </div>
          <div className="text-center font-normal text-[28px] leading-[42px]">
            Job Opportunity
            <br />
            And Cash Prize
          </div>
        </div>
        <div className="flex flex-col gap-6 text-center">
          <div className="flex flex-col items-center justify-center gap-5 rounded-[14px] bg-mentorBackground w-[549px] h-[242px]">
            <div className="font-extrabold text-[43px] leading-[42px]">
              1st Runner Up
            </div>
            <div className="font-normal text-[28px] leading-[45px]">
              Lorem, ipsum dolor sit
              <br />
              amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 rounded-[14px] bg-mentorBackground w-[549px] h-[242px]">
            <div className="font-extrabold text-[43px] leading-[42px]">
              2nd Runner Up
            </div>
            <div className="font-normal text-[28px] leading-[45px]">
              Lorem, ipsum dolor sit
              <br />
              amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
