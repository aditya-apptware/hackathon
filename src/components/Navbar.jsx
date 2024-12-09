import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const NavItem = ({ label, to, onClick }) => {
  return (
    <li>
      <Link
        to={to}
        onClick={onClick} // Close menu after clicking the link
        className="text-lg font-normal hover:text-primary transition duration-300 block py-2 px-4"
      >
        {label}
      </Link>
    </li>
  );
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the menu
  const menuButtonRef = useRef(null); // Ref for the hamburger button

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

  return (
    <div
      className={`flex items-center justify-between h-[58px] w-full md:w-[1120px] mx-auto bg-navbarBackground text-textLight rounded-xl px-4 md:px-8`}
    >
      <div className="w-full md:w-1/2 text-xl font-bold pl-4 md:pl-8">CodeKraft</div>

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
        <ul className="flex justify-end w-full">
          <NavItem label="Home" to="/" />
          <NavItem label="Problem statements" to="/" />
          <NavItem label="Registration" to="/" />
          <NavItem label="Payment" to="/" />
        </ul>
      </div>

      {/* Navigation Menu for Mobile */}
      <div
        ref={menuRef} // Add ref to menu container
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-[58px] left-0 w-full bg-navbarBackground z-10`}
      >
        <ul className="flex flex-col items-end py-4 px-4 w-full">
          <NavItem label="Home" to="/" onClick={() => setIsMenuOpen(false)} />
          <NavItem
            label="Problem statements"
            to="/"
            onClick={() => setIsMenuOpen(false)}
          />
          <NavItem
            label="Registration"
            to="/"
            onClick={() => setIsMenuOpen(false)}
          />
          <NavItem
            label="Payment"
            to="/"
            onClick={() => setIsMenuOpen(false)}
          />
        </ul>
      </div>
    </div>
  );
};
