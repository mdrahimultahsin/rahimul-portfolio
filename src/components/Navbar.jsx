import React, {useState} from "react";
import {FaDownload} from "react-icons/fa";
import {FaXmark} from "react-icons/fa6";
import {IoMenu} from "react-icons/io5";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="related z-50">
      <div className="w-10/12 mx-auto flex justify-between items-center bg-base-200 px-5 py-2 lg:py-4 mt-4 rounded-full">
        <div>
          <a href="#" className="bg-gradient-to-r from-primary to-accent text-white btn btn-circle ">RT</a>
        </div>
        <div className="hidden md:flex pl-4">
          <ul className="flex justify-center items-center gap-5 font-heading">
            <li>
              <a href="#about" className="text-sm font-medium active:text-primary lg:text-base active:border-b-2 border-primary">About Me</a>
            </li>
            <li>
              <a href="#skills" className="text-sm font-medium active:text-primary lg:text-base active:border-b-2 border-primary">Skills</a>
            </li>
            <li>
              <a href="#education" className="text-sm font-medium active:text-primary lg:text-base active:border-b-2 border-primary">Education</a>
            </li>
            <li>
              <a href="#projects" className="text-sm font-medium active:text-primary lg:text-base active:border-b-2 border-primary">Projects</a>
            </li>
            <li>
              <a href="#contact" className="text-sm font-medium active:text-primary lg:text-base active:border-b-2 border-primary">Contact</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex">
                <Button label="Download CV" icon={FaDownload}/>
          {/* <button className="flex items-center gap-2 btn btn-primary btn-sm md:btn-md rounded-full">
            Download CV <FaDownload />
          </button> */}
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer md:hidden"
        >
          {isMenuOpen ? <FaXmark size={28} /> : <IoMenu size={28} />}
        </button>
      </div>
      <div
        className={`bg-base-300 w-2/4 md:w-1/4 rounded-xl absolute right-10 ${
          isMenuOpen ? "top-24" : "-top-150"
        } p-2 py-4 duration-500`}
      >
        <ul className="flex items-center flex-col gap-4">
          <li onClick={() => setIsMenuOpen(false)}>
            <a href="#about">About Me</a>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <a href="#skills">Skills</a>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <a href="#education">Education</a>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <button className="flex justify-center items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 text-sm cursor-pointer rounded-full">
              Download CV <FaDownload />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
