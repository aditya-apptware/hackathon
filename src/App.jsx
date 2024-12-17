// App.js
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Payment } from "./pages/Payment";
import { ProblemStatements } from "./pages/ProblemStatements";
import { Registration } from "./pages/Registration";

export const App = () => {
  return (
    <BrowserRouter basename="/hackathon">
      <div className="bg-[#121212] py-3 px-[80px] w-full md:w-[1728px] mx-auto">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problem-statements" element={<ProblemStatements />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
};
