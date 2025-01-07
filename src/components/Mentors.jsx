import Mentor1 from "../assets/pics/mentor-1.png";
import Mentor2 from "../assets/pics/mentor-2.png";
import Mentor3 from "../assets/pics/mentor-3.png";
import Mentor4 from "../assets/pics/mentor-4.png";
import Mentor5 from "../assets/pics/mentor-5.png";
import Mentor6 from "../assets/pics/mentor-6.png";
import Mentor7 from "../assets/pics/mentor-7.png";
import Mentor8 from "../assets/pics/mentor-8.png";
import Mentor9 from "../assets/pics/mentor-9.png";
import Mentor10 from "../assets/pics/mentor-10.png";
import Mentor11 from "../assets/pics/mentor-11.png";
import { useAppContext } from "../context/AppContext";
import { useEffect, useRef } from "react";

const mentors = [
  {
    name: "Nachiket Labade",
    role: "Senior Mobile Developer",
    imageSource: Mentor1,
  },
  {
    name: "Kaushal Phulgirkar",
    role: "Data Scientist",
    imageSource: Mentor2,
  },
  {
    name: "Keshavram Kuduwa",
    role: "Technical Lead",
    imageSource: Mentor3,
  },
  {
    name: "Shrutika Tatkare",
    role: "Lead Mobile Developer",
    imageSource: Mentor4,
  },
  {
    name: "Vallabh Hake",
    role: "Senior Data Scientist",
    imageSource: Mentor5,
  },
  {
    name: "Harshad Vele ",
    role: "Java Developer",
    imageSource: Mentor6,
  },
  {
    name: "Rahul Bhavsar",
    role: "Senior Lead Developer",
    imageSource: Mentor7,
  },
  {
    name: "Santosh Zore",
    role: "Senior Web Developer",
    imageSource: Mentor8,
  },
  {
    name: "Shashank Chhapanimohan",
    role: "Senior Java Developer",
    imageSource: Mentor9,
  },
  {
    name: "Tejas Acharekar",
    role: "Senior DevOps Engineer",
    imageSource: Mentor10,
  },
  {
    name: "Prasad Ogale",
    role: "UI/UX Designer",
    imageSource: Mentor11,
  },

];

export const Mentors = () => {
  const { mentorsRef } = useAppContext();
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const scrollableWidth =
          scrollRef.current.scrollWidth - scrollRef.current.offsetWidth;

        if (scrollRef.current.scrollLeft >= scrollableWidth) {
          // Reset to start when reaching the end
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Continue scrolling forward
          scrollRef.current.scrollBy({
            left: scrollRef.current.offsetWidth,
            behavior: "smooth",
          });
        }
      }
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left:
          direction === "left"
            ? -scrollRef.current.offsetWidth
            : scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="flex flex-col gap-5 md:px-[50px] lg:px-[100px] py-[100px md:py-[180px] mx-auto text-textLight px-[32px] max-w-[1296px]"
      ref={mentorsRef}
    >
      <div className="font-karmatic text-[38px] md:text-[58px] leading-[48px] md:leading-[77px] text-[#ABD40F] text-center md:text-left">
        Expert Guidance, Every Step of the Way
      </div>
      <div className="font-robotoMono subtitle w-[300px] mx-auto text-center md:text-left md:w-full">
        <p className="max-w-[630px] text-[16px] md:text-[18px] lg:text-[22px] md:leading-[22px] lg:leading-[32px] font-normal text-white">
          Learn from the best! Apptware mentors will be there to guide, inspire,
          and help you turn your ideas into reality.
        </p>
      </div>
      <div className="relative mt-10">
        <div
          className="flex flex-nowrap overflow-x-auto scroll-smooth scrollbar-hide pointer-events-none md:h-[400px] md:gap-10"
          ref={scrollRef}
          onScroll={(e) => e.preventDefault()}
        >
          {mentors.map((mentor, mentorItemIndex) => {
            const { name, role, imageSource } = mentor;
            const rotateValue =
              mentorItemIndex % 2 === 0 ? "7.3deg" : "-7.3deg";
            return (
              <div
                key={mentorItemIndex}
                className="flex-shrink-0 flex flex-col p-8 md:p-4 items-center justify-center gap-10 md:gap-5 w-[100%] sm:w-[100%] md:w-[28%] lg:w-[22%] h-[350px] relative"
              >
                <img
                  src={imageSource}
                  alt={name}
                  style={{
                    transform: `rotate(${rotateValue})`,
                    objectPosition: "top",
                  }}
                  className="w-full object-cover h-full bg-mentorBackground"
                />{" "}
                <div className="absolute left-0 bottom-[0] md:bottom-[-50px] p-4 text-start md:text-left bg-black bg-opacity-[0.3] w-full">
                  <div className="font-bold text-[14px] sm:text-[18px] md:text-[28px] leading-[20px] sm:leading-[26px] md:leading-[36px] text-textLight">
                    {name.split(" ").map((word, index) => (
                      <p key={index}>{word}</p>
                    ))}
                  </div>
                  <div className="font-normal text-[12px] sm:text-[16px] md:text-[18px] leading-[18px] sm:leading-[24px] md:leading-[24px]">
                    {role}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-0 z-10 bg-gray-800 text-white px-4 py-2"
        >
          &#9664;
        </button>
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-0 z-10 bg-gray-800 text-white px-4 py-2"
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};
