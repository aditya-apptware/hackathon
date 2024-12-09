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
    <div className="w-[1440px] mx-auto">
      <div>
        <Header />
      </div>
      <main>
        <div className="pt-16 pb-16">
          <Event />
        </div>
        <div className="pt-16 pb-16">
          <Rules />
        </div>
        <div className="pt-16 pb-16">
          <Mentors />
        </div>
        <div className="pt-16 pb-16">
          <ProblemStatements />
        </div>
        <div className="pt-16 pb-16">
          <Prizes />
        </div>
        <div className="pt-16 pb-16">
          <Faqs />
        </div>
        <div className="pt-16 pb-16 mt-[-230px] pb-[300px]">
          <Images />
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};
