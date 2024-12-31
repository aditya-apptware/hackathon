export const Participate = () => {
  return (
    <div className="px-6 md:px-[216px] py-[80px] md:py-[150px] flex flex-col md:flex-row gap-10 md:gap-[80px] bg-white font-spaceGrotesk">
      <div className="w-full md:w-[592px]">
        <div className="my-[31px] w-full text-[36px] leading-[44px] md:h-[200px] md:text-[90px] md:leading-[100px] bg-black text-white">
          <span className="text-[#abd40f]">&gt;</span>Participate in teams
        </div>
        <div className="font-robotoMono text-sm md:text-base">
          Don’t let fear hold you back - <br />
          team up, <br />
          build amazing apps, <br /> and showcase your talent!
        </div>
      </div>
      <div className="relative mx-auto w-full md:w-[608px] h-[300px] md:h-[326px]">
        <div className="absolute top-0 left-0 w-4 h-4 md:w-6 md:h-6 bg-black"></div>
        <div className="absolute top-0 right-0 w-4 h-4 md:w-6 md:h-6 bg-black"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 md:w-6 md:h-6 bg-black"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 md:w-6 md:h-6 bg-black"></div>
        <div className="absolute inset-0 w-[91%] h-[268px] md:w-[560px] md:h-[278px] bg-[#abd40f] m-auto p-6 md:p-12 font-robotoMono flex flex-col justify-between">
          <div className="text-sm md:text-5 md:leading-8 capitalize">
            Stay updated on rules and regulations <br />
            to excel in the competition.
          </div>
          <button className="w-[155px] mt-3 px-4 py-2 md:py-3 text-xs md:text-4 font-bold bg-white">
            Download Rulebook
          </button>
        </div>
      </div>
    </div>
  );
};
