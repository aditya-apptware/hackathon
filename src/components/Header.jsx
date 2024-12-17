import { useEffect, useRef } from "react";
import { Button } from "./Button";
import Hackathon from "../assets/images/hackathon.svg";

export const Header = () => {
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
    <header className="relative w-full bg-black overflow-hidden">
      {/* Matrix Rain Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-[604px] z-0"
      ></canvas>

      {/* Header Content */}
      <div className="relative px-[217px] py-[158px] z-10 flex flex-col items-center text-black font-robotoMono gap-[22px]">
        <div className="title md:w-full m-auto">
          <img
            src={Hackathon}
            alt="hackathon is back 2025"
            width={544}
            height={154}
          />
        </div>
        <div className="subtitle w-full">
          <p className="text-[16px] md:text-[22px] md:leading-[32px] font-normal text-white">
            &lt;Lorem ipsum dolor sit, amet consectetur
            <br />
            adipisicing elit. Veniam&gt;
          </p>
        </div>
        <div className="hidden md:block w-full">
          <Button
            className="bg-white text-black border-none px-[18px] py-3 rounded-none text-4 font-bold"
            label="Know more"
          />
        </div>
      </div>
    </header>
  );
};
