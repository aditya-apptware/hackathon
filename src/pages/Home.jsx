import { useEffect } from "react";
import { CodeBuildRepeat } from "../components/CodeBuildRepeat";
import { Countdown } from "../components/Countdown";
import { Foot } from "../components/Foot";
import { Header } from "../components/Header";
import { Mentors } from "../components/Mentors";
import { Navbar } from "../components/Navbar";
import { Participate } from "../components/Participate";
import { Questions } from "../components/Questions";
import { useAppContext } from "../context/AppContext";
import { Register } from "./Register";

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
        <div className="fixed top-0 backdrop-blur backdrop-blur-[20px] p-4 md:p-16 left-0 h-full w-full flex items-center justify-center z-[99]">
          <Register />
        </div>
      )}
      <Navbar />
      <div className="z-1 relative">
        <Header />
      </div>
      <main className="bg-black">
        <CodeBuildRepeat />
        <Countdown />
        <Mentors />
        {/* <ProblemStatements /> */}
        {/* <Container /> */}
        <div className="w-full bg-white">
          <Participate />
        </div>
        <Questions />
        {/* <JoinUs /> */}
      </main>
      <Foot />
    </div>
  );
};
