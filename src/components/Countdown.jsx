import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

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
      className="font-robotoMono bg-black text-center px-4 py-8 md:py-20 relative"
      style={{ backgroundImage: "url('../assets/images/countdownbg.svg')" }}
      ref={eventRef}
    >
      <div className="text-white text-4xl md:text-8xl font-bold tracking-wider w-full  mx-auto">
        WHN - - WHR
      </div>
      <div className="text-white text-sm md:text-xl mt-2">
        08:00 PM, 17th - 19th January
      </div>
      <div className="max-w-[1022px] lg:w-[990px] md:w-[700px] w-[310px] mx-auto flex flex-wrap justify-center gap-[4px] md:gap-10 lg:gap-12 mt-5 font-karmatic text-[#ABD40F] text-3xl md:text-6xl lg:text-8xl border border-2 border-[#ABD40F] p-4 md:p-8">
        <span className="px-1">{padTwoDigits(timeRemaining.days)}</span>
        <span className="px-1">{padTwoDigits(timeRemaining.hours)}</span>
        <span className="px-1"><span className="font-robotoMono">:</span>{padTwoDigits(timeRemaining.minutes)}</span>
        <span className="px-1">{padTwoDigits(timeRemaining.seconds)}</span>
      </div>
      <div className="mt-6 text-[#ABD40F] text-sm md:text-lg">
        Registration closes on 16th January 2024 ...
      </div>
    </div>
  );
};
