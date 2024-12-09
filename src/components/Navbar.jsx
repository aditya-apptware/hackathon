import { Link } from "react-router-dom";

const NavItem = ({ label, to }) => {
  return (
    <li>
      <Link
        to={to}
        className="text-lg font-normal hover:text-red-600 transition duration-300"
      >
        {label}
      </Link>
    </li>
  );
};

export const Navbar = ({ className }) => {
  return (
    <div
      className={`flex items-center justify-between h-[58px] w-[1120px] mx-auto bg-gray-900 text-white rounded-xl ${className}`}
    >
      <div className="w-1/2 text-xl font-bold pl-8">CodeKraft</div>
      <div className="w-1/2">
        <ul className="flex justify-around w-full">
          <NavItem label="Home" to="/" />
          <NavItem label="Problem statements" to="" />
          {/* /problem-statements */}
          <NavItem label="Registration" to="" />
          {/* /registration */}
          <NavItem label="Payment" to="" />
          {/* /payment */}
        </ul>
      </div>
    </div>
  );
};
