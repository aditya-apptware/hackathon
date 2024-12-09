import { Button } from "./Button";

export const Header = () => {
    return (
      <header className="flex items-center justify-center bg-[#323232] text-textLight pt-12 pb-8">
        <div className="content text-center py-8">
          <div className="title w-[50%] m-auto">
            <h1 className="text-4xl font-bold">Hackathon is Back</h1>
          </div>
          <div className="subtitle mt-4 w-[50%] m-auto">
            <p className="text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              deleniti neque deserunt laboriosam ipsa obcaecati distinctio nobis
              quod, alias amet culpa rem repellendus commodi architecto non totam
              corporis reprehenderit dolorem.
            </p>
          </div>
          <div className="register-button mt-8">
            <Button label="Register Now" />
          </div>
        </div>
      </header>
    );
  };
  
