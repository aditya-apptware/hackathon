import Box1 from "../assets/images/box1.svg";

export const CodeBuildRepeat = () => {
  return (
    <div className="relative flex items-start justify-center bg-black pt-[120px] pb-[147px] font-robotoMono">
      <img src={Box1} alt="box model 1" width={1060} height={570} />
      <div className="absolute text-white w-[378px] h-[96px] text-[22px] leading-8 capitalize left-[276px] top-[307px]">
        &lt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        elit libero&gt;
      </div>
      <div className="absolute text-white w-[407px] h-[96px] text-[22px] leading-8 capitalize right-[324px] bottom-[133px]">
        &lt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        elit libero&gt;
      </div>
    </div>
  );
};
