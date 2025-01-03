import CloseIcon from "../assets/icons/closeRegisterPopup.svg";
import CodeCraftImage from "../assets/images/codecraft.svg";
import FormBg from "../assets/images/formbg.png";
import { StepperNavButton } from "../components/buttons/StepperNavButton";
import Stepper from "../components/Stepper";
import { useAppContext } from "../context/AppContext";
import { StepperProvider } from "../context/StepperContext";

export const Register = () => {
  const { closeForm } = useAppContext();

  return (
    <div className="relative font-robotoMono bg-[#ABD40F] w-full h-full overflow-hidden mx-auto flex p-8 md:px-[50px] lg:px-[200px] z-1 rounded-[10px]">
      <img
        src={FormBg}
        className="w-full h-full absolute left-0 top-0 opacity-[40%] object-cover"
        alt="form background"
      />
      <img
        src={CodeCraftImage}
        className="absolute right-[50px] sm:right-[100px] bottom-[4px]"
        alt="code craft"
      />
      <img
        src={CloseIcon}
        onClick={closeForm}
        className="absolute w-[21px] h-[21px] right-[20px] top-[20px] cursor-pointer sm:right-[24px] sm:top-[24px]"
        alt="close icon"
      />
      <StepperProvider>
        <Stepper />
        <div className="absolute bottom-[30px] sm:bottom-[50px] right-[30px]">
          <StepperNavButton />
        </div>
      </StepperProvider>
    </div>
  );
};
