import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { AppProvider } from "./context/AppContext";
import { Home } from "./pages/Home";

function App() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const handleCloseRegisterForm = () => {
    setShowRegistrationForm(false);
  };
  const navigateToRegisterationForm = () => {
    setShowRegistrationForm(true);
  };
  return (
    <AppProvider>
      <Navbar />
      <Home />
    </AppProvider>
  );
}

export default App;
