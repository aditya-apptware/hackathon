import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useStepperContext } from "../context/StepperContext";
import ButtonContainer from "./buttons/ButtonContainer";

const Stepper = () => {
  const { currentStep, steps, direction, animatingStep } = useStepperContext();

  return (
    <div
      className={`overflow-auto w-full h-full z-10 py-16 relative flex flex-col justify-center ${
        currentStep === 6 ? "mx-auto" : ""
      }`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={animatingStep} // Use animatingStep for motion key
          initial={{ opacity: 0, y: direction === "up" ? "100vh" : "-100vh" }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: direction === "up" ? "-100vh" : "100vh" }}
          transition={{ duration: 0.5 }}
          className="h-fit overflow-scroll flex flex-col justify-start"
        >
          {steps[animatingStep]?.component}
          <div className="mt-10">
            <ButtonContainer />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Stepper;
