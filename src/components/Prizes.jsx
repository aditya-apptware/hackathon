export const Prizes = () => {
  return (
    <div className="flex flex-col gap-5 w-full md:w-[1120px] mx-auto px-4">
      <div className="font-extrabold text-[50px] md:text-[70px] leading-[50px] md:leading-[42px] text-center md:text-start">
        Prizes
      </div>
      <div className="font-normal text-[20px] md:text-[28px] leading-[30px] md:leading-[42px] text-center md:text-start">
        With Exclusive Hackathon Benefits
      </div>
      <div className="flex justify-center gap-6 flex-wrap mt-8">
        {/* Winner Prize Card */}
        <div className="flex flex-col items-center justify-center gap-5 rounded-[14px] bg-mentorBackground w-full md:w-[500px] h-[507px] p-6">
          <img
            src="/assets/images/winner.svg"
            alt=""
            className="w-[94.07px] h-[134.2px]"
          />
          <div className="font-extrabold text-[40px] md:text-[65px] leading-[42px]">
            WINNER
          </div>
          <div className="text-center font-normal text-[20px] md:text-[28px] leading-[30px] md:leading-[42px]">
            Job Opportunity
            <br />
            And Cash Prize
          </div>
        </div>

        {/* Runner Up Section */}
        <div className="flex flex-col gap-6 text-center w-full md:w-[500px]">
          {/* 1st Runner Up Card */}
          <div className="flex flex-col items-center justify-center gap-5 rounded-[14px] bg-mentorBackground w-full h-[242px] p-6">
            <div className="font-extrabold text-[35px] md:text-[43px] leading-[42px]">
              1st Runner Up
            </div>
            <div className="font-normal text-[20px] md:text-[28px] leading-[30px] md:leading-[45px]">
              Lorem, ipsum dolor sit
              <br />
              amet consectetur adipisicing elit.
            </div>
          </div>
          {/* 2nd Runner Up Card */}
          <div className="flex flex-col items-center justify-center gap-5 rounded-[14px] bg-mentorBackground w-full h-[242px] p-6">
            <div className="font-extrabold text-[35px] md:text-[43px] leading-[42px]">
              2nd Runner Up
            </div>
            <div className="font-normal text-[20px] md:text-[28px] leading-[30px] md:leading-[45px]">
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
