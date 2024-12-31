import Mentor1 from "../assets/pics/mentor-1.jpg";
import Mentor2 from "../assets/pics/mentor-2.jpg";
import Mentor3 from "../assets/pics/mentor-3.jpg";

const mentors = [
  {
    name: "Davis George",
    role: "Data Scientist",
    imageSource: Mentor1,
  },
  {
    name: "Ryan Dias",
    role: "Data Scientist",
    imageSource: Mentor3,
  },
  {
    name: "Mark Doe",
    role: "Data Scientist",
    imageSource: Mentor2,
  },
  {
    name: "Mark Doe",
    role: "Data Scientist",
    imageSource: Mentor2,
  },
];

export const Mentors = () => {
  return (
    <div className="flex flex-col gap-5 md:px-[218px] py-[80px] md:py-[104px] mx-auto text-textLight px-[32px]">
      <div className="font-karmatic text-[38px] md:text-[58px] leading-[48px] md:leading-[77px] text-[#ABD40F] text-center md:text-left">
        Our Mentors
      </div>
      <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-10">
        {mentors.map((mentor, mentorItemIndex) => {
          const { name, role, imageSource } = mentor;
          const rotateValue = mentorItemIndex < 2 ? "7.3deg" : "-7.3deg";
          return (
            <div
              key={mentorItemIndex}
              className="flex flex-col p-8 items-center justify-center gap-10 md:gap-5 w-full sm:w-[300px] md:w-[307.81px] h-[300px] md:h-[422px] relative"
            >
              <img
                src={imageSource}
                alt={name}
                style={{ transform: `rotate(${rotateValue})` }}
                className="w-full object-cover h-[200px] sm:h-[250px] md:h-[401.65px] bg-mentorBackground"
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
