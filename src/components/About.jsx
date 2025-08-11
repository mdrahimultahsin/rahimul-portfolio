import React from "react";
import MyLottieAnimation from "./MyLottieAnimation";
import GradientText from "../utils/GradientText";

const About = () => {
  return (
        <>
        <h2 className="text-center py-10 gap-2 text-3xl font-bold font-heading text-base-content">
          <span className="text-2xl">👤</span>
          About  <GradientText label="Me"/>
        </h2>
      <div className="w-10/12 mx-auto px-6 py-5 flex flex-col md:flex-row items-center gap-20 font-inter text-base-content bg-base-100 rounded-lg shadow-lg">
      
        
      {/* Text Content */}
      <div className=" space-y-4">
        

        <h3 className="text-2xl font-bold text-primary-content">I'm Md Rahimul Haq</h3>
        <p className="text-primary text-sm font-semibold mb-2">
         Frontend Developer
        </p>

        <p className="text-base-content leading-relaxed">
  Hi, I’m Md Rahimul Haq, a Frontend-Focused MERN Stack Developer from Feni, Bangladesh. "I started coding when I was admitted and completed my Diploma in Engineering in Computer Science in 2021.
</p>

<p className="text-base-content leading-relaxed">
I enjoy programming and building full-stack projects that solve real-world problems. I’m skilled in React, Tailwind CSS, and modern JavaScript (ES6+), and currently expanding my backend knowledge with Node.js, Express, and MongoDB. <br /> <br />
Outside of coding, I love playing cricket and badminton in my free time — hobbies that keep me active and refreshed.
</p>

        <div className="space-y-2">
          <p>
            <span className="text-primary font-semibold">Email :</span>{" "}
            <a
              href="mailto:jigarsable21@gmail.com"
              className="text-accent underline"
            >
             mdrahimultahsin@gmail.com
            </a>
          </p>
          <p>
            <span className="text-primary font-semibold">Place :</span>{" "}
            <span>Feni Bangladesh</span>
          </p>
        </div>

        <button
          type="button"
          className="btn btn-primary mt-6 px-6 py-3 rounded-md font-semibold shadow-lg"
          >
          Resume &gt;
        </button>
      </div>
      {/* Animation + Image */}
      <div className="flex-shrink-0 flex flex-col items-center gap-6">
        <MyLottieAnimation />
      </div>
    </div>
                </>
  );
};

export default About;
