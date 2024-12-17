import FootLogo from "../assets/images/footer.svg";

const footerItems = [
  {
    title: "share",
    subs: [
      {
        title: "X (TWITTER)",
        path: "",
      },
      {
        title: "Facebook",
        path: "",
      },
      {
        title: "LinkedIn",
        path: "",
      },
      {
        title: "Hacker News",
        path: "",
      },
      {
        title: "Reddit",
        path: "",
      },
    ],
  },
  {
    title: "share",
    subs: [
      {
        title: "X (TWITTER)",
        path: "",
      },
      {
        title: "Facebook",
        path: "",
      },
      {
        title: "LinkedIn",
        path: "",
      },
      {
        title: "Hacker News",
        path: "",
      },
      {
        title: "Reddit",
        path: "",
      },
    ],
  },
  {
    title: "share",
    subs: [
      {
        title: "X (TWITTER)",
        path: "",
      },
      {
        title: "Facebook",
        path: "",
      },
      {
        title: "LinkedIn",
        path: "",
      },
      {
        title: "Hacker News",
        path: "",
      },
      {
        title: "Reddit",
        path: "",
      },
    ],
  },
];

export const Foot = () => {
  return (
    <div className="py-[139px] px-[96px] font-robotoMono text-[#f3f0e0] bg-black">
      <img src={FootLogo} alt="foot logo" />
      <div className="w-full text-right mt-[50px] text-4 leading-[26px] uppercase">
        <div>© 2024 Apptware Solutions LLP</div>
        <div>All Rights Reserved.</div>
      </div>
      <div className="mt-[170px] ml-[602px] flex gap-[256px] uppercase leading-[26px] text-4 f">
        {footerItems.map((each) => {
          return (
            <div>
              <div className="font-bold mb-5">{each.title}</div>
              <div className="border-2 w-[40px] mb-5"></div>
              {each.subs.map((item) => {
                return (
                  <div className="">
                    <a href={item.path} target="_blank">
                      {item.title}
                    </a>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
