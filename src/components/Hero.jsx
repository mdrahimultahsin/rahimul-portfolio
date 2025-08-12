import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaGithub, FaLinkedin, FaTwitter, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import Button from "./Button";
import GradientText from "../utils/GradientText";
import heroImg from "../assets/Layer 1.png"
const Hero = () => {
  return (
    <div className="md:w-10/12 mx-auto flex flex-col md:flex-row md:items-center justify-between md:px-8 gap-4 md:gap-40 py-30 px-8">
      {/* Left Side */}
      <div className="space-y-1 md:space-y-3">
        <h3 className="text-lg md:text-xl font-semibold">Hi There,</h3>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading">
          I'm Md <GradientText label="Rahimul " /> Haq
        </h1>

        <TypeAnimation
          sequence={["Frontend Developer", 1000, "MERN Stack Developer", 500]}
          wrapper="span"
          speed={50}
          className="text-lg md:text-xl inline-block font-bold text-accent"
          repeat={Infinity}
        />
        <p className="text-gray-300">
          I build modern, scalable web applications using the MERN stack.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-3">
          <a
            href="https://github.com/mdrahimultahsin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-700 hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/rahimultahsin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-700 hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/MdrhTahsin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-700 hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>

        <div className="my-6">
          <Button label="Download CV" icon={FaDownload} />
        </div>
      </div>

      {/* Right Side - Profile Image with Icons */}
      <div className="relative w-80 h-80 md:w-100 md:h-100 mx-auto">
        {/* Background Circle */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-accent to-secondary p-1">
          <div className="w-full h-full rounded-full bg-base-100 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={heroImg}
              alt="Profile"
            />
          </div>
        </div>

        {/* Technology Icons Around the Image */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-lg">
          <FaReact className="text-3xl text-sky-500" />
        </div>
        <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
          <SiTailwindcss className="text-3xl text-sky-400" />
        </div>
        <div className="absolute bottom-1/2 -left-6 transform translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
          <SiMongodb className="text-3xl text-green-600" />
        </div>
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-lg">
          <FaNodeJs className="text-3xl text-green-500" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
