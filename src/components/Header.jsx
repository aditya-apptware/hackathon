import { Button } from "./Button";

export const Header = () => {
  return (
    <header className="flex items-center justify-center bg-[#323232] text-textLight pt-12 pb-8">
      <div className="content text-center py-8 w-full max-w-screen-lg">
        <div className="title md:w-full w-[50%] m-auto">
          <h1 className="md:text-3xl text-4xl font-bold">Hackathon is Back</h1>
        </div>
        <div className="subtitle mt-4 md:w-[300px] w-[80%] m-auto">
          <p className="md:text-base text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
          </p>
        </div>
        <div className="register-button mt-8">
          <Button label="Register Now" />
        </div>
      </div>
    </header>
  );
};
