import { FaGraduationCap, FaUserGraduate } from "react-icons/fa";
import GradientText from "../utils/GradientText";

const Education = () => {
  return (
    <section id="education" className="py-10 bg-base-100">
      <div className="lg:w-8/12 mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-3">
          <FaUserGraduate className="text-primary" />
          My <GradientText label="Education" />
        </h2>

        <div className="w-full mx-auto bg-base-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="bg-primary text-white p-5 rounded-full text-4xl flex-shrink-0">
            <FaGraduationCap />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-semibold mb-1">
              Diploma in Engineering
            </h3>
            <p className="text-base-content/80 font-medium">
              Computer Science & Technology
            </p>
            <p className="text-sm text-base-content/60 mt-1">
              Feni Computer Institute — Completed 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
