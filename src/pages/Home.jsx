import { CodeBuildRepeat } from "../components/CodeBuildRepeat";
import { Container } from "../components/Container";
import { Countdown } from "../components/Countdown";
import { Foot } from "../components/Foot";
import { Header } from "../components/Header";
import { Mentors } from "../components/Mentors";
import { Navbar } from "../components/Navbar";
import { Participate } from "../components/Participate";
import { ProblemStatements } from "../components/ProblemStatements";
import { Questions } from "../components/Questions";
import { useAppContext } from "../context/AppContext";
import { Register } from "./Register";

export const Home = ({}) => {
  const { isOpen } = useAppContext();
  return (
    <div
      className="w-full md:w-[1728px] mx-auto relative"
      style={{ zIndex: 1 }}
    >
      {isOpen && (
        <div
          className="absolute backdrop-blur backdrop-blur-[20px] w-full px-[16px] py-[16px] sm:w-[1728px] sm:h-[1134px] flex flex-col justify-center items-center"
          style={{ zIndex: 99 }}
        >
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
        <Participate />
        <Questions />
      </main>
      <Foot />
    </div>
  );
};
