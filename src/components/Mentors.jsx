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
    <div className="flex flex-col gap-5 px-[218px] py-[104px] mx-auto px-4 text-textLight">
      <div className="font-karmatic text-[58px] leading-[77px] text-[#ABD40F]">
        Our Mentors
      </div>
      <div className="flex justify-center gap-5 mt-10">
        {mentors.map((mentor, mentorItemIndex) => {
          const { name, role, imageSource } = mentor;
          const rotateValue = mentorItemIndex < 2 ? "7.3deg" : "-7.3deg";
          return (
            <div
              key={mentorItemIndex}
              className="flex flex-col p-8 items-center justify-center gap-5 w-full md:w-[340.81px] h-[422px] relative"
            >
              <img
                src={imageSource}
                alt={name}
                style={{ transform: `rotate(${rotateValue})` }}
                className="w-full md:w-auto object-cover h-[250px] md:h-[401.65px] bg-mentorBackground"
              />
              <div className="absolute md:left-0 bottom-[20px] md:bottom-[-50px]  p-4">
                <div className="font-bold text-[18px] md:text-[28px] leading-[26px] md:leading-[36px] text-textLight">
                  {name.split(" ").map((word, index) => (
                    <p key={index}>{word}</p>
                  ))}
                </div>
                <div className="font-normal text-[16px] md:text-[24px] leading-[26px] md:leading-[42px]">
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
