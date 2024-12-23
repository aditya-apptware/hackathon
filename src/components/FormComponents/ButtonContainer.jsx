import { AddMemberButton } from "./AddMemberButton";
import { NextButton } from "./NextButton";
import { OkButton } from "./OkButton";

export const ButtonContainer = () => {
  return (
    <div className="flex align-center gap-6">
      <NextButton />
      <AddMemberButton />
      <OkButton />
    </div>
  );
};
