import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Mentor1 from "../assets/pics/mentor-1.png";
import Mentor10 from "../assets/pics/mentor-10.png";
import Mentor11 from "../assets/pics/mentor-11.png";
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
    role: "Product Designer",
    imageSource: Mentor11,
  },
];

export const Mentors = () => {
  const { mentorsRef } = useAppContext();
  return (
    <div
      className="flex flex-col gap-5 md:px-[50px] lg:px-[100px] py-[100px] md:py-[180px] mx-auto text-textLight px-[32px] max-w-[1296px]"
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
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true} // Prevent looping back to the start
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="pt-5 w-[240px] mx-auto md:w-[500px] lg:w-full mt-10 h-[350px]"
        style={{padding: 20, paddingRight:0}}
      >
        {mentors.map((mentor, index) => {
          const { name, role } = mentor;

          const rotateValue = index % 2 === 0 ? "7.3deg" : "-7.3deg";
          return (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center gap-4"
            >
              <div
                style={{
                  transform: `rotate(${rotateValue})`,
                  overflow: "hidden",
                }}
                className="relative w-full h-[250px]"
              >
                <img
                  src={mentor.imageSource}
                  alt={mentor.name}
                  className="w-auto h-full object-cover"
                />
              </div>
              <div className="absolute left-[-20px] bottom-[0] md:bottom-[-10px] p-4 text-left bg-black bg-opacity-[0.3] w-full">
                <div className="font-bold text-[14px] sm:text-[18px] md:text-[28px] leading-[20px] sm:leading-[26px] md:leading-[36px] text-textLight">
                  {name.split(" ").map((word, index) => (
                    <p key={index}>{word}</p>
                  ))}
                </div>
                <div className="font-normal text-[12px] sm:text-[16px] md:text-[18px] leading-[18px] sm:leading-[24px] md:leading-[24px]">
                  {role}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
