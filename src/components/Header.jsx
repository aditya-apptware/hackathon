import { Button } from "./Button";

export const Header = () => {
  return (
    <header className="flex items-center justify-center bg-[#323232] text-textLight pt-12 pb-8">
      <div className="content text-center py-8 w-full max-w-screen-lg">
        <div className="title md:w-full m-auto text-center">
          <h1 className="text-[30px] leading-[35px] md:text-[86.2px] md:leading-[100px] font-extrabold">
            &lt;/HACKATHON
            <br />
            IS BACK&gt;
          </h1>
        </div>
        <div className="subtitle mt-4 m-auto">
          <p className="text-[16px] md:text-[28px] md:leading-[42px] font-normal">
            &lt;Lorem ipsum dolor sit, amet consectetur
            <br />
            adipisicing elit. Veniam&gt;
          </p>
        </div>
        <div className="register-button mt-8">
          <Button label="Register Now" />
        </div>
      </div>
    </header>
  );
};
