import { useEffect, useState } from "react";
import Box1 from "../assets/images/box1.svg";
import Box2 from "../assets/images/box2.svg";

export const CodeBuildRepeat = () => {
  const texts = ["Code", "Build", "Repeat"];
  const [visibleIndex, setVisibleIndex] = useState(0);

  const fullText = texts.join("");
  const totalLetters = fullText.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prev) => (prev < totalLetters ? prev + 1 : 0)); // Reset to 0 for repetition
    }, 500); // Adjust timing for animation speed

    return () => clearInterval(interval); // Cleanup on unmount
  }, [totalLetters]);

  const splitText = (index) => {
    const start = texts.slice(0, index).join("").length;
    const end = start + texts[index].length;
    return [start, end];
  };

  return (
    <div className="relative flex flex-col items-center justify-center bg-black pt-[120px] font-robotoMono h-[837px] px-[32px]">
      {/* Responsive Image */}
      <img
        src={Box1}
        alt="box model 1"
        className="w-full hidden md:block md:w-[1060px] md:h-[818px] object-contain absolute top-[-55px] md:top-[-145px]"
      />
      <img
        src={Box2}
        alt="box model 1"
        className="w-full block md:hidden md:w-[1060px] md:h-[818px] object-contain absolute top-[-55px] md:top-[-145px]"
      />

      {/* Left Text */}
      <div className="absolute text-white w-[90%] sm:w-[378px] h-[96px] text-[18px] leading-6 capitalize left-[5%] sm:left-[276px] top-[15%] sm:top-[307px] text-center sm:text-left hidden md:block">
        Code drives innovation — it's the language of creativity and
        transformation, shaping the future from ideation to execution.
      </div>

      {/* Right Text */}
      <div className="absolute text-white w-[90%] sm:w-[407px] h-[96px] text-[18px] leading-6 capitalize right-[5%] sm:right-[324px] bottom-[15%] sm:bottom-[133px] text-center sm:text-left hidden md:block">
        Repetition refines. By testing and enhancing, we create robust solutions
        ready to make an impact.
      </div>

      {/* Below Text for Smaller Screens */}
      <div className="md:hidden text-white text-center text-[18px] leading-6 capitalize mt-[20px] mx-auto max-w-[90%] sm:max-w-[378px] sm:max-w-[407px]">
        Code drives innovation — it's the language of creativity and
        transformation, shaping the future from ideation to execution.
      </div>
      <div className="md:hidden text-white text-center text-[18px] leading-6 capitalize mt-[20px] mx-auto max-w-[90%] sm:max-w-[378px] sm:max-w-[407px]">
        Repetition refines. By testing and enhancing, we create robust solutions
        ready to make an impact.
      </div>

      <div className="flex flex-col space-y-2 hidden md:block">
        {texts.map((text, index) => {
          const [start, end] = splitText(index);

          let classes = "";
          if (index === 0) {
            classes = "left-[550px] top-[200px]";
          }
          if (index === 1) {
            classes = "left-[750px] top-[430px]";
          }
          if (index === 2) {
            classes = "left-[1075px] top-[500px]";
          }

          return (
            <div
              key={index}
              className={`font-robotoMono text-lg absolute font-semibold font-medium text-[75px] leading-[49px] ${classes}`}
            >
              {text.split("").map((char, charIndex) => {
                const globalIndex = start + charIndex;
                const isVisible = globalIndex < visibleIndex;
                return (
                  <span
                    key={charIndex}
                    className={`transition-colors duration-300 text-[75px] ${
                      isVisible ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {char}
                  </span>
                );
              })}
              {/* Add green vertical line */}
              {visibleIndex > start && visibleIndex <= end && (
                <span
                  className="absolute top-[-7px] h-[60px] w-[5px] bg-[#abd40f] text-[75px]"
                  style={{
                    left: `${(visibleIndex - start) * 1}ch`, // Adjust position dynamically
                  }}
                ></span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
