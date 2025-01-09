import { useEffect, useRef } from "react";
import { Button } from "./Button";
import { useAppContext } from "../context/AppContext";
import HeaderSVG from "../assets/images/header.svg";

export const Header = ({ navigateToRegisterationForm }) => {
  const { openForm } = useAppContext();

  const canvasRef = useRef(null);

  // Matrix Rain Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 12;
    const columns = Math.floor(canvas.width / fontSize); // Number of columns
    const drops = Array(columns).fill(1); // Initial y positions for each column

    const draw = () => {
      // Set black background with a slight opacity for a fading trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text color and font
      ctx.fillStyle = "#ABD40F"; // Matrix green color
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop position when reaching the bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      // Slow down the animation by adding a delay
      setTimeout(() => {
        requestAnimationFrame(draw);
      }, 10); // Adjust the delay (in milliseconds) for slower animation
    };

    draw();

    // Handle canvas resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="relative w-full bg-black overflow-hidden h-[500px] md:h-[805px] px-[32px]">
      {/* Matrix Rain Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-[805px] z-0"
      ></canvas>

      {/* Header Content */}
      <div className="relative px-4 md:px-[50px] lg:px-[150px] py-[100px] md:py-0 lg:py-[158px] z-10 flex flex-col items-center justify-center h-[500px] md:h-[805px] text-black font-robotoMono gap-[22px]">
        <div className="subtitle w-[330px] text-center md:text-left md:w-full">
          <p className="max-w-[630px] mx-auto text-[16px] md:text-[18px] lg:text-[22px] md:leading-[22px] lg:leading-[32px] font-normal text-white text-center">
            Code.Build.Repeat
          </p>
        </div>
        <div className="title md:w-full">
          <div className="font-karmatic min-w-[330px] text-[32px] md:text-[44px] lg:text-[58px] leading-[48px] md:leading-[77px] text-[#ABD40F] text-center">
            Hackathon is <br />
            back 2025
          </div>
        </div>
        <div className="subtitle w-[330px] text-center md:text-left md:w-full">
          <p className="max-w-[630px] mx-auto text-[16px] md:text-[18px] lg:text-[22px] md:leading-[22px] lg:leading-[32px] font-normal text-white text-center">
            17 January 2025 - 19 January 2025,
            <br />
            Pune, Bharat
          </p>
        </div>
        <div className="w-[167px] mx-auto text-center md:text-left">
          <Button
            className="bg-white text-black border-none px-[18px] py-3 rounded-none text-[18px] font-bold hover:bg-default"
            label="Register Now"
            onClick={openForm}
          />
        </div>
      </div>
    </header>
  );
};
