export const Participate = () => {
  return (
    <div className="px-[216px] py-[150px] flex gap-[80px] bg-white font-spaceGrotesk">
      <div className="w-[592px]">
        <div className="my-[31px] w-full h-[200px] text-[90px] leading-[100px] bg-black text-white">
          <span className="text-[#abd40f]">&gt;</span>Participate in teams
        </div>
        <div className="font-robotoMono">
          don’t let that fear stop you from contributing to
          <br /> the hackathon . We look forward to seeing
          <br /> you soon!
        </div>
      </div>
      <div class="relative mx-auto w-[608px] h-[326px]">
        <div class="absolute top-0 left-0 w-6 h-6 bg-black"></div>
        <div class="absolute top-0 right-0 w-6 h-6 bg-black"></div>
        <div class="absolute bottom-0 left-0 w-6 h-6 bg-black"></div>
        <div class="absolute bottom-0 right-0 w-6 h-6 bg-black"></div>
        <div class="absolute inset-0 w-[560px] h-[278px] bg-[#abd40f] m-auto p-12 font-robotoMono">
          <div className="text-5 leading-8 capitalize">
            Keep yourself updated with all the
            <br /> rules and regulations that will help
            <br /> you to have a smoother board in the
            <br /> competitions
          </div>
          <button className="mt-3 px-4 py-3 text-4 font-bold bg-white">
            Download Rulebook
          </button>
        </div>
      </div>
    </div>
  );
};
