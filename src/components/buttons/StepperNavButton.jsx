import { useStepperContext } from "../../context/StepperContext";
import ArrowUp from "../../assets/images/arrow_up.svg";
import ArrowDown from "../../assets/images/arrow_down.svg";

export const StepperNavButton = () => {
  const { currentStep, setCurrentStep } = useStepperContext();

  const handleNextClick = () => {
    if (currentStep < 6) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="flex">
      <button
        className="w-[55.17px] h-[44.45px] bg-black text-white z-10"
        onClick={handlePrevClick}
        aria-label="Next Step"
      >
        <img src={ArrowUp} className="w-fit mx-auto" alt="arrow up" />
      </button>
      <button
        className="w-[55.17px] h-[44.45px] border-2 border-black z-10 "
        onClick={handleNextClick}
        aria-label="Previous Step"
      >
        <img src={ArrowDown} className="w-fit mx-auto" alt="arrow down"/>
      </button>
    </div>
  );
};
