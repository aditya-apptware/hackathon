import { ToastContainer } from "react-toastify";
import { AppProvider } from "./context/AppContext";
import { Home } from "./pages/Home";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AppProvider>
      <ToastContainer />
      <Home />
    </AppProvider>
  );
}

export default App;
