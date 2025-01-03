import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { AppProvider } from "./context/AppContext";
import { Home } from "./pages/Home";

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
