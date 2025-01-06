import React from "react";
import EmailSVG from "../assets/icons/email.svg";

const EmailInput = () => {
  return (
    <div className="flex items-start md:items-start w-fit mx-auto md:mx-0 md:flex-row flex-col">
      {/* Input Container */}
      <div
        className="flex items-center bg-[#4b5563] text-[#9ca3af] w-[100%] md:w-[360px] h-[44px] border-0 pl-4"
        style={{ borderRadius: 0 }}
      >
        {/* Email Icon */}
        <img src={EmailSVG} width={20} height={20} alt="email icon in the input" />

        {/* Text Input */}
        <input
          type="email"
          placeholder="Enter your email id"
          className="flex-1 bg-transparent text-white placeholder-[#9ca3af] px-4 outline-none border-none"
        />
      </div>

      {/* Button */}
      <button
        className="bg-white text-black w-[144px] h-[44px] flex justify-center items-center self-center mt-2 md:mt-0 text-sm font-bold border-0"
        style={{ borderRadius: 0, padding: "16px" }}
      >
        Join us now!
      </button>
    </div>
  );
};

export default EmailInput;
