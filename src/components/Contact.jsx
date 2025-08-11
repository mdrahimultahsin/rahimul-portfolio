import React from "react";
import { FaEnvelope, FaHeadset, FaPhone } from "react-icons/fa";
import GradientText from "../utils/GradientText";

const Contact = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 bg-base-100 rounded-lg shadow-lg font-inter">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-12 text-base-content flex items-center justify-center gap-2">
        <FaHeadset /> Get in <GradientText label="Touch" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form
          action="mailto:mdrahimultahsin@email.com"
          method="POST"
          encType="text/plain"
          className="space-y-5"
        >
          <div>
            <label className="block text-sm font-medium text-base-content mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded-lg bg-base-200 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-base-content mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded-lg bg-base-200 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-base-content mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 border rounded-lg bg-base-200 outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="space-y-6 flex flex-col justify-center">
          <div>
            <h3 className="text-xl font-semibold text-base-content mb-2">
              Let’s Connect
            </h3>
            <p className="text-base-content/80">
              I’m always open to discussing new projects, creative ideas, or
              opportunities to collaborate. Drop me a message and I’ll get back
              to you as soon as possible.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-2xl text-primary" />
            <a
              href="mailto:mdrahimultahsin@email.com"
              className="text-base-content hover:underline"
            >
              mdrahimultahsin@email.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaPhone className="text-2xl text-primary" />
            <span className="text-base-content">+880 1615861498</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
