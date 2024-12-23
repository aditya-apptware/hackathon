import React, { useEffect } from "react";
import { useStepperContext } from "../context/StepperContext";
import ButtonContainer from "./buttons/ButtonContainer";
import { motion, AnimatePresence } from "framer-motion";

const Stepper = () => {
  const { currentStep, steps } = useStepperContext();

  useEffect(() => {
    // Scroll to the top of the new step when the currentStep changes
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  }, [currentStep]);

  return (
    <div
      className={`overflow-hidden h-[100%] w-[100%] py-[100px] z-10 relative flex flex-col justify-center ${
        currentStep === 6 ? "mx-auto" : ""
      }`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: "100vh" }} // Start from below the view
          animate={{ opacity: 1, y: 0 }} // Slide to original position
          exit={{ opacity: 0, y: "-100vh" }} // Slide out upwards
          transition={{ duration: 0.5 }} // Smooth transition duration
          className="h-fit"
        >
          {steps[currentStep]?.component}
          <div className="mt-10">
            <ButtonContainer />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Stepper;
