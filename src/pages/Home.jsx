import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Prizes } from "../components/Prizes";
import { ProblemStatements } from "../components/ProblemStatements";

export const Home = () => {
  return (
    <div>
      <Header />

      <main>
        <div className="pt-16 pb-16">
          <Prizes />
        </div>
        <div className="pt-16 pb-16">
          <ProblemStatements />
        </div>
      </main>
      <Footer />
    </div>
  );
};
