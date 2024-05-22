import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ReactDOM from "react-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full">
      <div className="flex justify-between h-16 items-center bg-slate-300 px-4 ">
        <div>
          <img src="/src/assets/logo.png" className="size-10"></img>
        </div>
        <button className="md:hidden" onClick={handleNav}>
          {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
        <div className="hidden md:flex">
          <ul className="flex gap-3 ">
            <li className="cursor-pointer">
              <Link
                className="hover:bg-slate-500 transition duration-100"
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
                activeClass="active"
                easing="easeInOutQuad"
              >
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
                activeClass="active"
                easing="easeInOutQuad"
              >
                About Me
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
                activeClass="active"
                easing="easeInOutQuad"
              >
                Services
              </Link>
            </li>
            <li className="cursor-pointer">
              <a href="">Community</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`mt-16 ${
          isOpen
            ? "fixed md:hidden left-0 top-0 w-full h-[40%]  bg-slate-400 ease-in-out duration-500"
            : "ease-in-out w-full h-[40%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }`}
      >
        <ul className="px-3 py-2 text-center ">
          <li className="hover:text-gray-50 hover:bg-red-500 transition duration-500 block text-base cursor-pointer px-3 py-2 rounded-md font-medium">
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70}
              activeClass="active"
              easing="easeInOutQuad"
            >
              Home
            </Link>
          </li>
          <li className="hover:text-gray-50 hover:bg-red-500 transition duration-500 block text-base cursor-pointer px-3 py-2 rounded-md font-medium">
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70}
              activeClass="active"
              easing="easeInOutQuad"
            >
              About me
            </Link>
          </li>
          <li className="hover:text-gray-50 hover:bg-red-500 transition duration-500 block text-base cursor-pointer px-3 py-2 rounded-md font-medium">
            <Link
              to="services"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70}
              activeClass="active"
              easing="easeInOutQuad"
            >
              Services
            </Link>
          </li>
          <li className="hover:text-gray-50 hover:bg-red-500 transition duration-500 block text-base cursor-pointer px-3 py-2 rounded-md font-medium">
            <Link
              to="community"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70}
              activeClass="active"
              easing="easeInOutQuad"
            >
              Community
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
