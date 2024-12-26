import Box1 from "../assets/images/box1.svg";

export const CodeBuildRepeat = () => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-black pt-[120px] font-robotoMono h-[837px] px-[32px]">
      {/* Responsive Image */}
      <img
        src={Box1}
        alt="box model 1"
        className="w-full md:w-[1060px] md:h-[818px] object-contain absolute top-[-55px] md:top-[-145px]"
      />

      {/* Left Text */}
      <div className="absolute text-white w-[90%] sm:w-[378px] h-[96px] text-[22px] leading-8 capitalize left-[5%] sm:left-[276px] top-[15%] sm:top-[307px] text-center sm:text-left hidden md:block">
        &lt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        elit libero&gt;
      </div>

      {/* Right Text */}
      <div className="absolute text-white w-[90%] sm:w-[407px] h-[96px] text-[22px] leading-8 capitalize right-[5%] sm:right-[324px] bottom-[15%] sm:bottom-[133px] text-center sm:text-right hidden md:block">
        &lt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        elit libero&gt;
      </div>

      {/* Below Text for Smaller Screens */}
      <div className="md:hidden text-white text-center text-[22px] leading-8 capitalize mt-[20px] mx-auto max-w-[90%] sm:max-w-[378px] sm:max-w-[407px]">
        &lt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        elit libero&gt;
      </div>
      <div className="md:hidden text-white text-center text-[22px] leading-8 capitalize mt-[20px] mx-auto max-w-[90%] sm:max-w-[378px] sm:max-w-[407px]">
        &lt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        elit libero&gt;
      </div>
    </div>
  );
};
