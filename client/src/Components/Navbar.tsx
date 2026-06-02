import React from "react";
import logo from "../assets/images/Group 1.png";
import { Link, useLocation } from "react-router-dom";
import logopic from "../assets/Images/Ellipse 1.png";

const Navbar: React.FC = () => {
const location = useLocation();
// useEffect(() => {
//  console.log(location.pathnmame); });


const allLinks = () => {
    return location.pathname === "/" ? (
      <>
        {" "}
        <Link
          to="/newtask"
          className="text-[#292929] py-2 px-4 rounded-md animate-color hover:text-[#B8B6B6]"
        >
          New Task
        </Link>

        <Link
          to="/mytasks"
          className="text-[#292929] py-2 px-4 rounded-md animate-color hover:text-[#B8B6B6]"
        >
          My Tasks
        </Link>
      </>
    ) : location.pathname === "/mytasks" ? (
       <Link
          to="/mytasks"
          className="text-[#292929] py-2 px-4 rounded-md animate-color hover:text-[#B8B6B6]"
        >
          My Tasks
        </Link>
    ) : location.pathname === "/edittask" ? (
       <Link
          to="/mytasks"
          className="text-[#292929] py-2 px-4 rounded-md animate-color hover:text-[#B8B6B6]"
        >
          My Tasks
        </Link>
    ) : location.pathname === "/newtask" ? (
     <Link
          to="/newtask"
          className="text-[#292929] py-2 px-4 rounded-md animate-color hover:text-[#B8B6B6]"
        >
          New Task
        </Link>
    ) : null;
  };


  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-[#FAF9FB] text-[#292929] sticky top-0 z-10 shadow-md">
      <div className="flex items-center gap-2">
        <img src={logo} alt="" />
        <Link to="/" className="text-[#2D0050] font-semibold py-2 px-4 rounded-md animate-color hover:text-[#B8B6B6]">
          Task Duty
        </Link>
      </div>

      <div className="flex items-center gap-1">
        {" "}
        {allLinks()}
        <img src={logopic} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;