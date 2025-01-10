import "./styles.css";
import img1 from '../assets/gif/giphy1.svg'

export const Participate = () => {

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
    <div className="relative px-6 md:px-[50px] py-[80px] md:py-[200px] flex flex-col mx-auto md:flex-row gap-10 md:gap-0 bg-white font-spaceGrotesk max-w-[1296px]">
      <div className="min-w-[300px] w-[50%] md:w-[calc(40%)] m-auto relative">
        <div className="my-[31px] md:my-0 w-[full] text-[36px] leading-[44px] md:h-[160px] lg:h-[250px] md:text-[3em] lg:text-[4em] md:leading-[60px] lg:leading-[100px] bg-black text-white">
          <span className="text-[#abd40f]">&gt;hackathon</span><br/>topics
          <p className="text-[#abd40f] text-[15px] md:text-[0.3em] lg:text-[0.3em] pl-1 leading-10 font-robotoMono">
            will be diclosed on 16 th janauary</p>
        </div>
        <div className="font-robotoMono text-sm md:text-base mt-5">
        The specific topics and problem statements
        will be unveiled on January 16th, giving you
        the opportunity to think on your feet and
        innovate with fresh ideas.
        </div>
        <img src={img1} alt="gif" width={126} height={126} className="absolute md:-top-[102px] md:-left-12 -top-[70px] -left-10"/>
      </div>
      <div
        className="grid grid-cols-[4%_92%_4%] grid-rows-[7%_86%_7%] relative mx-auto"
        id="garden"
      >
        <div
          className="bg-black col-start-1 col-end-2 row-start-1 row-end-2"
          id="black1"
        ></div>
        <div
          className="bg-black col-start-3 col-end-4 row-start-3 row-end-4"
          id="black2"
        ></div>
        <div
          className="bg-black col-start-1 col-end-2 row-start-3 row-end-4"
          id="black3"
        ></div>
        <div
          className="bg-black col-start-3 col-end-4 row-start-1 row-end-2"
          id="black4"
        ></div>
        <div
          className="bg-blue col-start-2 col-end-3 row-start-2 row-end-3 absolute inset-0 bg-[#abd40f] m-auto p-6 md:p-6 lg:p-12 font-robotoMono flex flex-col justify-between"
          id="yellow"
        >
          <div className="text-sm md:text-5 md:leading-5 lg:leading-8 capitalize">
              This hackathon is your chance to bring your ideas to life, collaborate with like-minded innovators, and compete to showcase your talent. Prepare to dive into a journey of creativity and problem-solving with Apptware, where the future is designed today. Stay updated on the rules and regulations to ensure a smooth experience and maximize your potential to excel in the competition.          </div>
          <button className="w-[160px] mt-3 px-4 py-2 md:py-3 text-xs md:text-4 font-bold bg-white hover:bg-default hover:border hover:border-black"
          onClick={handleDownload}>
            Download Rulebook
          </button>
        </div>
      </div>
      <div className="md:size-14 size-8 bg-[#abd40f] absolute top-0 left-40"></div>
      <div className="md:size-24 size-14 bg-[#abd40f] absolute bottom-0 md:right-[158px] right-[105px]"></div>
      <div className="md:size-12 size-7 bg-[#abd40f] absolute bottom-0 md:right-28 right-20"></div>
    </div>
  );
};
