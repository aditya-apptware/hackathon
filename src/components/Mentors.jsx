import { Button } from "./Button";

const mentors = [
  {
    name: "Davis George",
    role: "Data Scientist",
    imageSource: "/assets/pics/mentor-1.jpg",
  },
  {
    name: "Mark Doe",
    role: "Data Scientist",
    imageSource: "/assets/pics/mentor-2.jpg",
  },
  {
    name: "Ryan Dias",
    role: "Data Scientist",
    imageSource: "/assets/pics/mentor-3.jpg",
  },
];

export const Mentors = () => {
  return (
    <div className="flex flex-col gap-5 w-full md:w-[1120px] mx-auto px-4">
      <img src="/assets/labels/mentors.svg" alt="Mentors Title SVG" width="342.77px" height="122.44px" />
      <div className="font-normal text-[20px] md:text-[28px] leading-[30px] md:leading-[42px]">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, <br />
        sed do eiusmod
      </div>
      <div className="flex justify-center gap-5 flex-wrap mt-10">
        {mentors.map((mentor, mentorItemIndex) => {
          const { name, role, imageSource } = mentor;
          const rotateValue = mentorItemIndex % 2 === 0 ? '7.3deg' : '-7.3deg';
          return (
            <div
              key={mentorItemIndex}
              className="flex flex-col p-8 items-center justify-center gap-5 rounded-[14px] w-full md:w-[340.81px] h-[422px] relative"
            >
              <img
                src={imageSource}
                alt={name}
                style={{ transform: `rotate(${rotateValue})` }}
                className="w-full md:w-auto object-cover h-[250px] md:h-[401.65px] bg-mentorBackground rounded-[14px]"
              />
              <div className="absolute md:left-0 bottom-[20px] md:bottom-[-50px] bg-textLight bg-opacity-10 p-4">
                <div className="font-bold text-[18px] md:text-[28px] leading-[26px] md:leading-[36px] text-textDark">
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
      <div className="register-button mt-8 mx-auto">
        <Button label="VIEW ALL MENTORS" />
      </div>
    </div>
  );
};
