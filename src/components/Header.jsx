import { useEffect, useRef } from "react";
import { Button } from "./Button";
import { useAppContext } from "../context/AppContext";

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
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize); // Number of columns
    const drops = Array(columns).fill(1); // Initial y positions for each column

    const draw = () => {
      ctx.fillStyle = "rgba(50, 50, 50, 0.05)"; // Transparent dark background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#121212"; // Matrix green color
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

      setTimeout(() => {
        requestAnimationFrame(draw); // Slow down the animation
      }, 10); // Adjust the delay here (in milliseconds)
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
      <div className="relative px-4 md:px-[217px] py-[100px] md:py-[158px] z-10 flex flex-col items-center justify-center h-[500px] md:h-[805px] text-black font-robotoMono gap-[22px]">
        <div className="title md:w-full">
          <div className="font-karmatic min-w-[366px] text-[38px] md:text-[58px] leading-[48px] md:leading-[77px] text-[#ABD40F] text-center md:text-left">
            Hackathon is <br />
            back 2025
          </div>
        </div>
        <div className="subtitle w-full text-center md:text-left">
          <p className="max-w-[630px] text-[16px] md:text-[22px] md:leading-[32px] font-normal text-white">
            Gear up for an unforgettable coding experience.
            Build. Innovate. Compete.
          </p>
        </div>
        <div className="w-full text-center md:text-left">
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
