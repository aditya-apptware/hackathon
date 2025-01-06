import { ToastContainer } from "react-toastify";
import { AppProvider } from "./context/AppContext";
import { Home } from "./pages/Home";

import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "./components/buttons/Spinner";

function App() {
  return (
    <AppProvider>
      <Spinner />
      <ToastContainer />
      <Home />
    </AppProvider>
  );
}

export default App;
