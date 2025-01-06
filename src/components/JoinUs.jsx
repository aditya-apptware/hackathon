import EmailInput from "./EmailInput";

export const JoinUs = () => {
  return (
    <div className="font-robotoMono bg-black text-center md:px-16 py-8 md:py-20 relative text-white mx-auto max-w-[1170px] px-8">
      <div className="font-karmatic text-[30px] md:text-[58px] leading-[38px] md:leading-[77px] text-[#ABD40F] text-center md:text-left px-2 md:px-0">
        Code. Build. Solve. Stay Connected!{" "}
      </div>
      <div className="subtitle mx-auto text-center md:text-left md:w-full mt-10">
        <p className="max-w-[1170px] text-[16px] md:text-[18px] lg:text-[22px] md:leading-[22px] lg:leading-[32px] font-normal text-white">
          Follow us for real-time updates, behind-the-scenes stories, and
          exclusive insights into the hackathon journey. Don't miss a single
          moment!
        </p>
      </div>
      <div className="mt-10">
      <EmailInput />
      </div>
    </div>
  );
};
