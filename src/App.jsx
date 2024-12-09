// App.js
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Payment } from "./pages/Payment";
import { ProblemStatements } from "./pages/ProblemStatements";
import { Registration } from "./pages/Registration";

export const App = () => {
  return (
    <Router>
      <div className="bg-[#323232] pt-5 w-[1440px] mx-auto">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problem-statements" element={<ProblemStatements />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
};
