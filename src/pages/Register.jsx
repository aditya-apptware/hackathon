import CloseIcon from "../assets/icons/closeRegisterPopup.svg";
import CodeCraftImage from "../assets/images/codecraft.svg";
import FormBg from "../assets/images/formbg.png";
import { StepperNavButton } from "../components/buttons/StepperNavButton";
import Stepper from "../components/Stepper";
import { StepperProvider } from "../context/StepperContext";

export const Register = ({ onCloseIconClick }) => {
  return (
    <div className="relative font-robotoMono bg-[#ABD40F] w-[1485px] h-[884px] mx-auto flex px-[200px] z-1 rounded rounded-[10px]">
      <img
        src={FormBg}
        className="w-[100%] absolute left-0 opacity-[40%]"
        alt="form background"
      />
      <img
        src={CodeCraftImage}
        className="absolute right-[100px]"
        alt="code craft"
      />
      <img
        src={CloseIcon}
        onClick={onCloseIconClick}
        className="absolute w-[21px] h-[21px] right-[24px] top-[24px] cursor-pointer"
        alt="close icon"
      />
      <StepperProvider>
        <Stepper />
        <div className="absolute bottom-[50px] right-[400px]">
          <StepperNavButton />
        </div>
      </StepperProvider>
    </div>
  );
};
