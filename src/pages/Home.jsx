import { CodeBuildRepeat } from "../components/CodeBuildRepeat";
import { Event } from "../components/Event";
import { Faqs } from "../components/Faqs";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Images } from "../components/Images";
import { Mentors } from "../components/Mentors";
import { Prizes } from "../components/Prizes";
import { ProblemStatements } from "../components/ProblemStatements";
import { Rules } from "../components/Rules";

export const Home = () => {
  return (
    <div className="w-full md:w-[1728px] mx-auto">
      <div>
        <Header />
      </div>
      <main className="bg-black">
        <CodeBuildRepeat />
          <Mentors />
        {/* <div className="py-8 md:py-16">
          <Event />
        </div>
        <div className="py-8 md:py-16 mx-4">
          <Rules />
        </div>
        <div className="py-8 md:py-16">
          <Mentors />
        </div>*/}
        <ProblemStatements />
        {/*<div className="py-8 md:py-16">
          <Prizes />
        </div>
        <div className="py-8 md:py-16 relative z-10">
          <Faqs />
        </div>
        <div className="py-8 md:py-16 mt-[-230px] md:pb-[330px] hidden md:block">
          <Images />
        </div> */}
      </main> 
      {/*  <div>
        <Footer />
      </div> */}
    </div>
  );
};
