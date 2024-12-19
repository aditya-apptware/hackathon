import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <div className="bg-[#121212] py-3 px-[80px] w-full md:w-[1728px] mx-auto">
        <Navbar />
      </div>
      <Home />
    </>
  );
}

export default App;
