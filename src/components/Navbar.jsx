import { useEffect, useRef, useState } from "react";
import Logo from "../assets/images/logo.svg";
import { useAppContext } from "../context/AppContext";
import { Button } from "./Button";

export const Navbar = () => {
  const { openForm, eventRef, mentorsRef, contactRef, problemStatementsRef } =
    useAppContext();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the menu
  const menuButtonRef = useRef(null); // Ref for the hamburger button

  // Toggle the menu state when the hamburger icon is clicked
  const toggleMenu = () => {
    console.log("i am clicked")
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside of it or the hamburger button
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false); // Close the menu
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollIntoView = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="flex w-full mx-auto justify-center sticky top-0 z-[50] bg-black">
      <div className="relative bg-black py-3 px-4 lg:px-[80px] w-full mx-auto z-1">
        <div
          className={`font-robotoMono flex items-center justify-between h-[58px] w-full bg-black text-textLight rounded-xl`}
        >
          {/* Logo on the Left */}
          <div className="text-xl font-bold pl-4 md:pl-8 flex-shrink-0">
            <img
              src={Logo}
              alt="Logo"
              className="cursor-pointer"
              onClick={scrollToTop}
            />
          </div>

          {/* Hamburger Icon for Mobile */}
          <div
            ref={menuButtonRef} // Add ref to hamburger button
            className="lg:hidden flex items-center cursor-pointer"
            onClick={toggleMenu}
          >
            <div className="space-y-2">
              <div className="w-6 h-0.5 bg-textLight"></div>
              <div className="w-6 h-0.5 bg-textLight"></div>
              <div className="w-6 h-0.5 bg-textLight"></div>
            </div>
          </div>

          {/* Navigation Menu for Large Screens */}
          <div className="hidden lg:block">
            <ul className="flex lg:gap-[45px] md:gap-[20px] w-full">
              <Button
                className="lg:text-[18px] md:text-[16px] font-normal hover:text-default transition duration-300 block"
                label="Home"
                onClick={scrollToTop}
              />
              <Button
                className="lg:text-[18px] md:text-[16px] font-normal hover:text-default transition duration-300 block"
                label="About event"
                onClick={() => scrollIntoView(eventRef)}
              />
              <Button
                className="lg:text-[18px] md:text-[16px] font-normal hover:text-default transition duration-300 block"
                label="Mentors"
                onClick={() => scrollIntoView(mentorsRef)}
              />
              <Button
                className="text-[18px] md:text-[16px] font-normal hover:text-default transition duration-300 block"
                label="Problem statements"
                onClick={() => scrollIntoView(problemStatementsRef)}
              />
              <Button
                className="lg:text-[18px] md:text-[16px] font-normal hover:text-default transition duration-300 block"
                label="Contact"
                onClick={() => scrollIntoView(contactRef)}
              />
            </ul>
          </div>

          {/* Navigation Menu for Mobile */}
          <div
            ref={menuRef} // Add ref to menu container
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:hidden absolute top-[58px] left-0 w-full bg-navbarBackground z-10`}
          >
            <ul className="flex flex-col gap-6 justify-around items-end py-4 px-4 w-full">
              <Button
                className="text-[18px] font-normal hover:text-default transition duration-300 block"
                label="Home"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToTop();
                }}
              />
              <Button
                className="text-[18px] font-normal hover:text-default transition duration-300 block"
                label="About Event"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollIntoView(eventRef);
                }}
              />
              <Button
                className="text-[18px] font-normal hover:text-default transition duration-300 block"
                label="Mentors"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollIntoView(mentorsRef);
                }}
              />
              <Button
                className="text-[18px] font-normal hover:text-default transition duration-300 block"
                label="Problem Statements"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollIntoView(problemStatementsRef);
                }}
              />
              <Button
                className="text-[18px] font-normal hover:text-default transition duration-300 block"
                label="Contact"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollIntoView(contactRef);
                }}
              />
              <Button
                className="text-[18px] font-normal hover:text-default transition duration-300 block"
                label="Register"
                onClick={() => {
                  setIsMenuOpen(false);
                  openForm();
                }}
              />
            </ul>
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <Button
              className="bg-transparent text-[#ABD40F] border border-[#ABD40F] px-[18px] py-3 rounded-none hover:bg-default hover:text-black lg:text-[18px] md:text-[16px]"
              label="Register Now"
              onClick={openForm}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
