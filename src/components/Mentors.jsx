import Mentor1 from "../assets/pics/mentor-1.png";
import Mentor2 from "../assets/pics/mentor-2.png";
import Mentor3 from "../assets/pics/mentor-3.png";
import Mentor4 from "../assets/pics/mentor-4.png";
import Mentor5 from "../assets/pics/mentor-5.png";
import Mentor6 from "../assets/pics/mentor-6.png";
import Mentor7 from "../assets/pics/mentor-7.png";
import Mentor8 from "../assets/pics/mentor-8.png";
import Mentor9 from "../assets/pics/mentor-9.png";
import { useAppContext } from "../context/AppContext";

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
    role: "Java Devloper",
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
];

export const Mentors = () => {
  const { mentorsRef } = useAppContext();
  return (
    <div
      className="flex flex-col gap-5 md:px-[50px] lg:px-[100px] py-[100px] md:py-[104px] mx-auto text-textLight px-[32px] max-w-[1296px]"
      ref={mentorsRef}
    >
      <div className="font-karmatic text-[38px] md:text-[58px] leading-[48px] md:leading-[77px] text-[#ABD40F] text-center md:text-left">
        Expert Guidance, Every Step of the Way
      </div>
      <div className="subtitle w-[300px] mx-auto text-center md:text-left md:w-full">
        <p className="max-w-[630px] text-[16px] md:text-[18px] lg:text-[22px] md:leading-[22px] lg:leading-[32px] font-normal text-white">
          Learn from the best! Apptware mentors will be there to guide, inspire,
          and help you turn your ideas into reality.
        </p>
      </div>
      <div className="flex flex-wrap justify-center md:justify-start lg:gap-5 md:gap-2 mt-10 mx-auto max-w-[1296px]">
        {mentors.map((mentor, mentorItemIndex) => {
          const { name, role, imageSource } = mentor;
          const rotateValue = mentorItemIndex % 2 === 0 ? "7.3deg" : "-7.3deg";
          return (
            <div
              key={mentorItemIndex}
              className="flex flex-col p-8 md:p-4 items-center justify-center gap-10 md:gap-5 w-full sm:w-[300px] md:w-[23%] h-[300px] md:h-[300px] relative"
            >
              <img
                src={imageSource}
                alt={name}
                style={{ transform: `rotate(${rotateValue})` }}
                className="w-full object-cover h-[200px] md:h-[200px] lg:h-[401.65px] bg-mentorBackground"
              />
              <div className="absolute left-0 bottom-[-45px] md:bottom-[-50px] p-4 text-start md:text-left">
                <div className="font-bold text-[14px] sm:text-[18px] md:text-[28px] leading-[20px] sm:leading-[26px] md:leading-[36px] text-textLight">
                  {name.split(" ").map((word, index) => (
                    <p key={index}>{word}</p>
                  ))}
                </div>
                <div className="font-normal text-[12px] sm:text-[16px] md:text-[24px] leading-[18px] sm:leading-[26px] md:leading-[42px]">
                  {role}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
