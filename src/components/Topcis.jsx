import ParticipatePNG from "../assets/images/participate-anim.png";
import TopBoxSVG from "../assets/images/topics-top-box.svg";
import BottomBoxSVG from "../assets/images/topics-bottom-box.svg";

import "./styles.css";

export const Topics = () => {
  const handleDownload = () => {
    const pdfUrl = "/Rulebook.pdf"; // Replace with the URL of the PDF file
    const fileName = "Rulebook - CodeCraft 2025.pdf"; // Desired file name for the download

    // Create an anchor element
    const anchor = document.createElement("a");
    anchor.href = pdfUrl;
    anchor.download = fileName;

    // Append anchor to the body and trigger the click
    document.body.appendChild(anchor);
    anchor.click();

    // Remove anchor from the body after triggering the download
    document.body.removeChild(anchor);
  };

  return (
    <div className="py-[53px] md:py-[120px] lg:py-[160px] xl:py-[200px] font-robotoMono border-white">
      <div className="mx-auto wrapper md:h-[364px] lg:h-[486px] xl:h-[608px] w-[315px] md:w-[702px] lg:w-[936px] xl:w-[1171px] md:flex gap-[10px] md:gap-[24px] lg:gap-[32px] xl:gap-[40px]">
        <div className="lhs relative w-1/2 h-full flex flex-col gap-[15px] md:gap-[12px] lg:gap-[16px] xl:gap-[20px] font-normal justify-center">
          <img
            src={ParticipatePNG}
            alt="pareticipate anim"
            className="absolute top-[-24px] md:top-[-22px] lg:top-[-30px] xl:top-[-38px] left-[-18px] md:left-[-42px] lg:left-[-56px] xl:left-[-70px] w-[52px] md:w-[117px] lg:w-[156px] xl:w-[196px] h-[52px] md:h-[117px] lg:h-[156px] xl:h-[196px]"
            width={"100%"}
            height={"100%"}
          />
          <img
            src={TopBoxSVG}
            alt="pareticipate anim"
            className="absolute top-[-53px] md:top-[-120px] lg:top-[-160px] xl:top-[-200px] left-[-13px] md:left-[-30px] lg:left-[-40px] xl:left-[-50px] w-[16px] md:w-[36px] lg:w-[49px] xl:w-[62px] h-[16px] md:h-[36px] lg:h-[49px] xl:h-[62px]"
            width={"100%"}
            height={"100%"}
          />
          <img
            src={BottomBoxSVG}
            alt="pareticipate anim"
            className="absolute bottom-[-415px] md:bottom-[-119px] lg:bottom-[-159px] xl:bottom-[-199px] right-[-156px] md:right-[-348px] lg:right-[-464px] xl:right-[-580px] w-[41px] md:w-[92px] lg:w-[123px] xl:w-[154px] h-[26px] md:h-[60px] lg:h-[80px] xl:h-[101px]"
            width={"100%"}
            height={"100%"}
          />
          <div
            className="black-box w-[315px] md:w-auto leading-[40px] md:leading-[46px] lg:leading-[62px] xl:leading-[78px] px-2 py-8 md:p-[9px] lg:p-[12px] xl:p-[16px] pt-[8px] md:pt-[18px] lg:pt-[25px] xl:pt-[32px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 10%, #1C1C1C 10%, #1C1C1C 90%, rgba(0, 0, 0, 0) 90%)",
            }}
          >
            <div className="text-default text-[30px] md:text-[33px] lg:text-[44px] xl:text-[56px] mt-5 md:mt-0">
              &gt;hackathon
            </div>
            <div className="text-white text-[30px] md:text-[33px] lg:text-[44px] xl:text-[56px]">
              topics
            </div>
            <div className="text-default text-[16px] md:text-[14px] lg:text-[19px] xl:text-[24px]">
              will be disclosed on 16th January
            </div>
          </div>
          <div className="mb-5 md:m-0 w-[315px] md:w-auto support-text text-[15px] md:text-[12px] lg:text-[16px] xl:text-[20px] leading-[18px] md:leading-[18px] lg:leading-[25px] xl:leading-[32px]">
            The specific topics and problem statements will be unveiled on
            January 16th, giving you the opportunity to think on your feet and
            innovate with fresh ideas.
          </div>
        </div>
        <div className="rhs w-[315px] md:w-1/2 h-full">
          <div className="row1 flex justify-between">
            <div className="bg-black w-[6px]  md:w-[14px] lg:w-[19px] xl:w-[24px] h-[6px]  md:h-[14px] lg:h-[19px] xl:h-[24px]"></div>
            <div className="bg-black w-[6px]  md:w-[14px] lg:w-[19px] xl:w-[24px] h-[6px]  md:h-[14px] lg:h-[19px] xl:h-[24px]"></div>
          </div>
          <div className="row2 bg-default w-[300px] md:w-[312px] lg:w-[416px] xl:w-[520px] mx-auto h-[350px] md:h-[336px] lg:h-[448px] xl:h-[560px] p-[15px] md:p-[24px] lg:p-[32px] xl:p-[40px] flex flex-col justify-between">
            <div className="content text-[15px] md:text-[12px] lg:text-[16px] xl:text-[20px] leading-[20px] md:leading-[18px] lg:leading-[25px] xl:leading-[32px]">
              This hackathon is your chance to bring your ideas to life,
              collaborate with like-minded innovators, and compete to showcase
              your talent. Prepare to dive into a journey of creativity and
              problem-solving with Apptware, where the future is designed today.
              Stay updated on the rules and regulations to ensure a smooth
              experience and maximize your potential to excel in the
              competition.
            </div>
            <button onClick={handleDownload} className="font-bold text-[12px] md:text-[9px] lg:text-[12px] xl:text-[16px] leading-[5px] md:leading-[12px] lg:leading-[16px] xl:leading-[21px] px-[8px] md:px-[9px] lg:px-[12px] xl:px-[16px] py-[10px] md:py-[8px] lg:py-[9px] xl:py-[12px] bg-white w-fit">
              Download Rulebook
            </button>
          </div>
          <div className="row1 flex justify-between">
            <div className="bg-black w-[6px]  md:w-[14px] lg:w-[19px] xl:w-[24px] h-[6px]  md:h-[14px] lg:h-[19px] xl:h-[24px]"></div>
            <div className="bg-black w-[6px]  md:w-[14px] lg:w-[19px] xl:w-[24px] h-[6px]  md:h-[14px] lg:h-[19px] xl:h-[24px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
