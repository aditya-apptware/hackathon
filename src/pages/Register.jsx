import Stepper from "../components/Stepper";
import { StepperProvider } from "../context/StepperContext";

export const Register = () => {
  return (
    <div className="px-[200px] py-[100px] font-robotoMono">
      <StepperProvider>
        <Stepper />
      </StepperProvider>
    </div>
  );
};
