import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import BackgroundImage from "../assets/images/countdown-bg.png";

const targetDate = new Date("2025-01-17T00:00:00").getTime();

function padTwoDigits(number) {
  return number.toString().padStart(2, "0");
}

export const Countdown = () => {
  const { eventRef } = useAppContext();
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(intervalId); // Stop the timer if the target date has passed
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeRemaining({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      className="font-robotoMono bg-black text-center px-4 py-[100px] md:py-[180px] relative z-[99]"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment:"fixed"
      }}
      ref={eventRef}
    >
      <div className="text-white text-4xl md:text-8xl font-bold tracking-wider w-full  mx-auto">
        WHN - - WHR
      </div>
      <div className="text-white text-sm md:text-xl mt-2">
        08:00 PM, 17th January - 12:00 PM, 19th January
      </div>
      <div className="max-w-[1022px] lg:w-[990px] md:w-[700px] w-[310px] mx-auto flex flex-wrap justify-center gap-[4px] md:gap-10 lg:gap-12 mt-5 font-karmatic text-[#ABD40F] text-2xl md:text-5xl lg:text-7xl border border-2 border-[#ABD40F] p-4 md:p-8">
        <span className="px-1">{padTwoDigits(timeRemaining.days)}</span>
        <span className="px-1">
          <span className="font-robotoMono">:</span>
          {padTwoDigits(timeRemaining.hours)}
        </span>
        <span className="px-1">
          <span className="font-robotoMono">:</span>
          {padTwoDigits(timeRemaining.minutes)}
        </span>
        <span className="px-1">
          <span className="font-robotoMono">:</span>
          {padTwoDigits(timeRemaining.seconds)}
        </span>
      </div>
      <div className="mt-6 text-[#ABD40F] text-sm md:text-lg px-10">
        Registration closes on 16th January 2025 ...
      </div>
      <div className="mt-6 text-[#ABD40F] text-sm md:text-lg px-10">
        <div className="mt-6 text-[#ABD40F] text-sm md:text-lg px-10">
          For more queries, reach us at &nbsp;
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=events@apptware.com"
            className="text-[#ABD40F] underline"
            target="_blank"
            rel="noreferrer"
          >
            events@apptware.com
          </a>
        </div>
      </div>
    </div>
  );
};
