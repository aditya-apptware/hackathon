import { PulseLoader } from "react-spinners";
import { useAppContext } from "../../context/AppContext";
import { useEffect } from "react";

export const Spinner = () => {
  const { loading } = useAppContext();

  useEffect(() => {
    // Disable scrolling when spinner is loading
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup overflow style when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  if (!loading) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen absolute left-0 top-0 bg-black z-[9999] bg-opacity-[0.8]">
      <PulseLoader color="#3498db" loading={loading} size={15} />
    </div>
  );
};
