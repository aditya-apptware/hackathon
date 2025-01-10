import AboutSVG from "../assets/images/about.svg";
import PixelPNG from "../assets/pics/pixel.png";

export const About = () => {
  return (
    <div className="relative max-w-[988px] mx-auto mt-[-39px] md:mt-[-78px] lg:mt-[-103px] z-50 pb-[100px] md:pb-[200px]">
      <div className="max-w-[889px] mx-auto mb-[100px] lg:mb-[150px]">
        <img src={AboutSVG} width={"100%"} height={103} alt="about svg" />
      </div>
      <div className="absolute bottom-0 right-0 w-[100px] md:w-[223px] md:max-w-[223px] max-h-[223px] z-50">
        <img src={PixelPNG} width={"100%"} alt="pixel svg" />
      </div>
      <div className="px-8 md:px-[50px] lg:px-[100px] font-robotoMono text-center md:text-left text-white font-normal text-[14px] leading-[20px] lg:text-[22px] lg:leading-[32px] capitalize">
      <div>Ab{"{}"}ut Hackathon</div>
      <div>
        Unleash your creativity, showcase your skills, and step into the future
        of technology at the Apptware Hackathon{" "}
        <span className="text-default">c{"{}"}decraft</span>.
      </div>
      <div className="mt-10 flex flex-col gap-10">
        <div>
          From January 17th to 19th, Apptware’s headquarters will transform into
          a hub of innovation, bringing together the brightest minds eager to
          shape the future.
        </div>
        <div>
          This unique three-day event is designed to offer fresh talent and
          aspiring innovators the opportunity to collaborate, compete, and
          create groundbreaking solutions. Whether you're an experienced coder
          or a passionate newcomer, this is your chance to prove your mettle and
          earn new opportunities in the industry.
        </div>
      </div>
      </div>
    </div>
  );
};
