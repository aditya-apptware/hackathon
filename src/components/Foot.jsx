import FootLogo from "../assets/images/footer.svg";
import { useAppContext } from "../context/AppContext";

const footerItems = [
  {
    title: "follow",
    subs: [
      { title: "Instagram", path: "https://www.instagram.com/apptwareindia?igsh=bGlnNmVjaHplYmpk" },
      { title: "LinkedIn", path: "https://www.linkedin.com/company/apptware/" },
      { title: "X (TWITTER)", path: "https://x.com/ApptwareIndia" },
      { title: "Facebook", path: "https://www.facebook.com/apptware?mibextid=ZbWKwL" },
      { title: "Youtube", path: "https://m.youtube.com/channel/UCm7ShvOMvDUhq8DDbRKWDQQ" },
      { title: "Apptware Website", path: "https://apptware.com/" },
    ],
  },
  {
    title: "legal",
    subs: [
      { title: "Terms", path: "" },
      { title: "Privacy", path: "" },
      { title: "Brand Guidelines", path: "" },
    ],
  },
];

export const Foot = () => {
  const { contactRef } = useAppContext();
  return (
    <div
      className="py-[80px] px-[32px] md:px-[96px] font-robotoMono text-[#f3f0e0] bg-black"
      ref={contactRef}
    >
      {/* Logo */}
      <div className="flex justify-center md:justify-start">
        <img src={FootLogo} alt="foot logo" className="w-auto" />
      </div>

      {/* Rights Section */}
      <div className="w-full text-center md:text-right mt-[50px] text-4 leading-[26px] uppercase">
        <div>© 2024 Apptware Solutions LLP</div>
        <div>All Rights Reserved.</div>
      </div>

      {/* Footer Items */}
      <div className="md:w-[full] justify-end mt-[100px] self-end md:mt-[170px]  flex flex-col md:flex-row gap-[20px] md:gap-[256px] uppercase leading-[26px] text-4">
        {footerItems.map((each, index) => (
          <div key={index} className={`${index>0 ? 'mt-[50px] md:mt-0': ''}`}>
            <div className="font-bold mb-5">{each.title}</div>
            <div className="border-2 w-[40px] mb-5"></div>
            <div className="flex md:block flex-row justify-start gap-x-[20px] md:gap-0 flex-wrap">
              {each.subs.map((item, subIndex) => (
                <div key={subIndex} className="min-w-[155px]">
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
