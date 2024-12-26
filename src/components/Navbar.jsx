import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import { Register } from "../pages/Register";
import { Button } from "./Button";

const NavItem = ({ label, to, onClick }) => {
  return (
    <li>
      <Link
        href={to}
        onClick={onClick} // Close menu after clicking the link
        className="text-[18px] font-normal hover:text-primary transition duration-300 block"
      >
        {label}
      </Link>
    </li>
  );
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null); // Ref for the menu
  const menuButtonRef = useRef(null); // Ref for the hamburger button
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const handleCloseRegisterForm = () => {
    setShowRegistrationForm(false);
  };

  // Toggle the menu state when the hamburger icon is clicked
  const toggleMenu = () => {
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

  const navigateToRegisterationForm = () => {
    setShowRegistrationForm(true);
  };

  const navigateToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="flex w-[100%] justify-center">
      {showRegistrationForm && (
        <div
          className="absolute bg-white backdrop-blur w-full px-[16px] sm:w-[1728px] h-full sm:h-[1134px] bg-[#ffffff90] flex flex-col justify-center items-center"
          style={{ zIndex: 99 }}
        >
          <Register onCloseIconClick={handleCloseRegisterForm} />
        </div>
      )}

      <div className="relative bg-black py-3 px-4 md:px-[40px] w-full md:w-[1728px] mx-auto z-1">
        <div
          className={`font-robotoMono flex items-center justify-between h-[58px] w-full bg-black text-textLight rounded-xl`}
        >
          {/* Logo on the Left */}
          <div className="text-xl font-bold pl-4 md:pl-8 flex-shrink-0">
            <img
              src={Logo}
              alt="Logo"
              className="cursor-pointer"
              onClick={navigateToHomePage}
            />
          </div>

          {/* Hamburger Icon for Mobile */}
          <div
            ref={menuButtonRef} // Add ref to hamburger button
            className="md:hidden flex items-center cursor-pointer"
            onClick={toggleMenu}
          >
            <div className="space-y-2">
              <div className="w-6 h-0.5 bg-textLight"></div>
              <div className="w-6 h-0.5 bg-textLight"></div>
              <div className="w-6 h-0.5 bg-textLight"></div>
            </div>
          </div>

          {/* Navigation Menu for Large Screens */}
          <div className="hidden md:block">
            <ul className="flex gap-[45px] w-full">
              <NavItem label="Home" to="/" />
              <NavItem label="About event" to="/" />
              <NavItem label="Problem statements" to="/" />
              <NavItem label="Mentors" to="/" />
              <NavItem label="Contact" to="/" />
            </ul>
          </div>

          {/* Navigation Menu for Mobile */}
          <div
            ref={menuRef} // Add ref to menu container
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:hidden absolute top-[58px] left-0 w-full bg-navbarBackground z-10`}
          >
            <ul className="flex flex-col gap-6 justify-around items-end py-4 px-4 w-full">
              <NavItem
                label="Home"
                to="/"
                onClick={() => setIsMenuOpen(false)}
              />
              <NavItem
                label="Problem statements"
                to="/"
                onClick={() => setIsMenuOpen(false)}
              />
              {/* Registration as NavItem */}
              <NavItem
                label="Registration"
                to="/"
                onClick={navigateToRegisterationForm} // Trigger the registration form on click
              />
              <NavItem
                label="Payment"
                to="/"
                onClick={() => setIsMenuOpen(false)}
              />
            </ul>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Button
              className="bg-transparent text-[#ABD40F] border border-[#ABD40F] px-[18px] py-3 rounded-none"
              label="Register Now"
              onClick={navigateToRegisterationForm}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
