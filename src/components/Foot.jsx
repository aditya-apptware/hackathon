import FootLogo from "../assets/images/footer.svg";
import { useAppContext } from "../context/AppContext";

const footerItems = [
  {
    title: "share",
    subs: [
      { title: "X (TWITTER)", path: "" },
      { title: "Facebook", path: "" },
      { title: "LinkedIn", path: "" },
      { title: "Hacker News", path: "" },
      { title: "Reddit", path: "" },
    ],
  },
  {
    title: "follow",
    subs: [
      { title: "Discord", path: "" },
      { title: "X (TWITTER)", path: "" },
      { title: "Mastodon", path: "" },
      { title: "Bluesky", path: "" },
      { title: "Reddit", path: "" },
      { title: "Email", path: "" },
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
      <div className="mt-[100px] md-mt-[170px] md:ml-[602px] flex flex-col md:flex-row gap-[20px] md:gap-[256px] uppercase leading-[26px] text-4">
        {footerItems.map((each, index) => (
          <div key={index}>
            <div className="font-bold mb-5">{each.title}</div>
            <div className="border-2 w-[40px] mb-5"></div>
            {each.subs.map((item, subIndex) => (
              <div key={subIndex}>
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
        ))}
      </div>
    </div>
  );
};
