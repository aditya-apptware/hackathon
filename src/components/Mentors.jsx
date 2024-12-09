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
    <div className="flex flex-col gap-5 w-[1120px] mx-auto">
      <div className="font-extrabold text-[70px] leading-[68px]">
        LOREM
        <br />
        MENTORS
      </div>
      <div className="font-normal text-[28px] leading-[42px]">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, <br />
        sed do eiusmod
      </div>
      <div className="flex justify-center gap-5 flex-wrap">
        {mentors.map((mentor, mentorItemIndex) => {
          const { name, role, imageSource } = mentor;
          const rotateValue = mentorItemIndex % 2 === 0 ? '7.3deg' : '-7.3deg'
          return (
            <div className="flex flex-col p-16 items-start justify-center gap-5 rounded-[14px] w-[340.81px] h-[422px] relative">
              <img
                src={imageSource}
                alt={name}
                className={`w-auto object-cover h-[401.65px] bg-mentorBackground rotate-[${rotateValue}] rounded-[14px]`}
              />
              <div className="absolute bottom-[-6px] bg-textLight bg-opacity-10">
                <div className="font-bold text-[28px] leading-[36px] text-textDark">
                  {name.split(" ").map((word) => (
                    <p>{word}</p>
                  ))}
                </div>
                <div className="font-normal text-[24px] leading-[42px]">
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
