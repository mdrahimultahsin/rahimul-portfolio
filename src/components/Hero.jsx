import React from "react";
import {TypeAnimation} from "react-type-animation";
import {FaDownload, FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import Button from "./Button";
import GradientText from "../utils/GradientText";

const Hero = () => {
  return (
    <div className="w-10/12 mx-auto  flex flex-col md:flex-row items-center justify-between  md:px-8 gap-4 md:gap-40 py-30">
      <div className="space-y-3">
        <h3 className="text-xl font-semibold">Hi There,</h3>
        <h1 className="text-5xl font-bold">
          I'm Md{" "}
          <GradientText label="Rahimul"/>
          Haq
        </h1>

        <TypeAnimation
          sequence={["Frontend Developer", 1000, "Mern Stack Developer", 500]}
          wrapper="span"
          speed={50}
          className="text-2xl inline-block font-bold text-accent"
          repeat={Infinity}
        />
        {/* Social Icons */}
        <div className="flex space-x-6 mt-1">
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
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbkECXtEG_6-RV7CSNgNoYUGZE-JCliYm9g&s" alt="" />
      </div>
    </div>
  );
};

export default Hero;
