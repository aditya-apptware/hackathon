import "./styles.css";

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
    <div className="px-6  md:px-[50px]lg:px-[100px] py-[80px] md:py-[180px] flex flex-col mx-auto md:flex-row gap-10 md:gap-[80px] bg-white font-spaceGrotesk max-w-[1296px]">
      <div className="min-w-[300px] w-[50%] md:w-[calc(50%-80px)] mx-auto">
        <div className="my-[31px] md:my-0 w-[full] text-[36px] leading-[44px] md:h-[130px] lg:h-[200px] md:text-[3em] lg:text-[5em] md:leading-[60px] lg:leading-[100px] bg-black text-white">
          <span className="text-[#abd40f]">&gt;</span>Participate in teams
        </div>
        <div className="font-robotoMono text-sm md:text-base mt-5">
          Don’t let fear hold you back - team up, build amazing apps, and
          showcase your talent!
        </div>
      </div>

      <div
        className="grid grid-cols-[4%_92%_4%] grid-rows-[7%_86%_7%] relative mx-auto w-[50%] md:h-[322px] "
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
            Stay updated on rules and regulations to excel in the competition.
          </div>
          <button className="w-[160px] mt-3 px-4 py-2 md:py-3 text-xs md:text-4 font-bold bg-white hover:bg-default hover:border hover:border-black"
          onClick={handleDownload}>
            Download Rulebook
          </button>
        </div>
      </div>
    </div>
  );
};
