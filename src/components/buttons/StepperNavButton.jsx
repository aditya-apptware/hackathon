import ArrowDown from "../../assets/images/arrow_down.svg";
import ArrowUp from "../../assets/images/arrow_up.svg";
import { useStepperContext } from "../../context/StepperContext";

export const StepperNavButton = () => {
  const {
    currentStep,
    setCurrentStep,
    setDirection,
    setAnimatingStep,
    formData: { members },
    steps,
  } = useStepperContext();

  const isLastStep = currentStep === steps.length - 1;

  const handleNextClick = () => {
    setDirection("up");

    if (currentStep === 2) {
      // After College Name
      if (members[0]?.fullName?.trim()) {
        setTimeout(() => {
          setAnimatingStep(3);
          setCurrentStep(3); // Show Team Member 2
        }, 0);
      } else {
        setTimeout(() => {
          setAnimatingStep(steps.length - 1);
          setCurrentStep(steps.length - 1); // Skip to Confirmation
        }, 0);
      }
      return;
    }

    if (currentStep > 2 && currentStep < steps.length - 1) {
      // Optional Team Member Steps
      const nextOptionalStep = currentStep + 1;
      if (members[nextOptionalStep - 3]?.fullName?.trim()) {
        setTimeout(() => {
          setAnimatingStep(nextOptionalStep);
          setCurrentStep(nextOptionalStep); // Show the next team member form
        }, 0);
      } else {
        setTimeout(() => {
          setAnimatingStep(steps.length - 1);
          setCurrentStep(steps.length - 1); // Skip to Confirmation
        }, 0);
      }
      return;
    }

    // Default navigation
    setTimeout(() => {
      setAnimatingStep(currentStep + 1);
      setCurrentStep(currentStep + 1);
    }, 0);
  };

  const handlePrevClick = () => {
    if (currentStep > 0) {
      setDirection("down");

      if (currentStep === 6) {
        // If on confirmation step, check the last filled member
        if (members[2]?.fullName) {
          // If team member 3 is filled, go to team member 3 form
          setTimeout(() => {
            setCurrentStep(5);
            setAnimatingStep(5);
          }, 0);
        } else if (members[1]?.fullName) {
          // If team member 2 is filled, go to team member 2 form
          setTimeout(() => {
            setCurrentStep(4);
            setAnimatingStep(4);
          }, 0);
        } else if (members[0]?.fullName) {
          // If team member 1 is filled, go to team member 1 form
          setTimeout(() => {
            setCurrentStep(3);
            setAnimatingStep(3);
          }, 0);
        } else {
          // Otherwise, go to college name form
          setTimeout(() => {
            setCurrentStep(2);
            setAnimatingStep(2);
          }, 0);
        }
      } else if (currentStep === 5) {
        // From team member 3 form
        if (members[1]?.fullName) {
          // If team member 2 is filled, go to team member 2 form
          setTimeout(() => {
            setCurrentStep(4);
            setAnimatingStep(4);
          }, 0);
        } else {
          // Otherwise, go to college name form
          setTimeout(() => {
            setCurrentStep(2);
            setAnimatingStep(2);
          }, 0);
        }
      } else if (currentStep === 4) {
        // From team member 2 form
        if (members[0]?.fullName) {
          // If team member 1 is filled, go to team member 1 form
          setTimeout(() => {
            setCurrentStep(3);
            setAnimatingStep(3);
          }, 0);
        } else {
          // Otherwise, go to college name form
          setTimeout(() => {
            setCurrentStep(2);
            setAnimatingStep(2);
          }, 0);
        }
      } else if (currentStep === 3) {
        // From team member 1 form
        setTimeout(() => {
          setCurrentStep(2); // Go to college name form
          setAnimatingStep(2);
        }, 0);
      } else if (currentStep <= 2) {
        // From college name form
        setTimeout(() => {
          setCurrentStep((prev) => prev - 1); // Go to team name form
          setAnimatingStep((prev) => prev - 1);
        }, 0);
      }
    }
  };

  return (
    <div className="flex">
      <button
        className="w-[55.17px] h-[44.45px] bg-black text-white z-10"
        onClick={handlePrevClick}
        aria-label="Previous Step"
        disabled={currentStep === 0}
      >
        <img src={ArrowUp} className="w-fit mx-auto" alt="arrow up" />
      </button>
      <button
        className="w-[55.17px] h-[44.45px] border-2 border-black z-10 disabled:hidden"
        onClick={handleNextClick}
        aria-label="Next Step"
        disabled={isLastStep}
      >
        <img src={ArrowDown} className="w-fit mx-auto" alt="arrow down" />
      </button>
    </div>
  );
};
