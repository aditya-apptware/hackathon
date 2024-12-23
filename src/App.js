import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";

function App() {
  return (
    <>
      <Router>
        <div className="bg-[#121212] py-3 px-[80px] w-full md:w-[1728px] mx-auto">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
