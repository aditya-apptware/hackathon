import { CodeBuildRepeat } from "../components/CodeBuildRepeat";
import { Countdown } from "../components/Countdown";
import { Foot } from "../components/Foot";
import { Header } from "../components/Header";
import { Mentors } from "../components/Mentors";
import { Participate } from "../components/Participate";
import { ProblemStatements } from "../components/ProblemStatements";
import { Questions } from "../components/Questions";

export const Home = ({
}) => {
  return (
    <div
      className="w-full md:w-[1728px] mx-auto relative"
      style={{ zIndex: 1 }}
    >
      <div className="z-1 relative">
        <Header
        />
      </div>
      <main className="bg-black">
        <CodeBuildRepeat />
        <Countdown />
        <Mentors />
        <ProblemStatements />
        <Participate />
        <Questions />
      </main>
      <Foot />
    </div>
  );
};
