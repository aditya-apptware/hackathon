import { useEffect } from "react";
import { About } from "../components/About";
import { Countdown } from "../components/Countdown";
import { Foot } from "../components/Foot";
import { Header } from "../components/Header";
import { Mentors } from "../components/Mentors";
import { Navbar } from "../components/Navbar";
import { PriceAndIncentives } from "../components/PriceAndIncentives";
import { Questions } from "../components/Questions";
import { Topics } from "../components/Topcis";
import { useAppContext } from "../context/AppContext";
import { Register } from "./Register";
import { ProblemStatements } from "../components/ProblemStatements";
import { Schedule } from "../components/Schedule";
import { Winners } from "../components/Winners";

export const Home = () => {
  const { isOpen } = useAppContext();

  // Disable scrolling in the background when the popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = ""; // Reset on unmount
    };
  }, [isOpen]);

  return (
    <div className="w-full mx-auto relative">
      {isOpen && (
        <div className="fixed top-0 backdrop-blur backdrop-blur-[20px] p-4 md:p-8 left-0 h-full w-full flex items-center justify-center z-[99]">
          <Register />
        </div>
      )}
      <Navbar />
      <div className="z-1 relative">
        <Header />
      </div>
      <main className="bg-black">
        {/* <CodeBuildRepeat /> */}
        <Winners/>
        <Countdown />
        <About />
        <div className="w-full bg-white">
          <Topics />
          {/* <Participate /> */}
        </div>
        <PriceAndIncentives />
        <Schedule/>
        <ProblemStatements />
        <Mentors />
        {/* <Container /> */}
        <Questions />
        {/* <JoinUs /> */}
      </main>
      <Foot />
    </div>
  );
};
