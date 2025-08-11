import React, { useRef } from "react";
import { FaEnvelope, FaHeadset, FaPhone } from "react-icons/fa";
import GradientText from "../utils/GradientText";
import WhatsAppButton from "../utils/WhatsAppButton";
import Button from "./Button";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hf0xbmo",
        "template_cn40tkn",
        form.current,
        "AVv9maXtFcxEnegt1"
      )
      .then(
        () => {
          toast.success("Your message has been sent.");
          form.current.reset();
        },
        () => {
          toast.error("Something went wrong, please try again.");
        }
      );
  };

  return (
    <div className="md:w-10/12 mx-auto px-6 py-12 rounded-lg shadow-lg font-inter">
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-12 text-base-content flex items-center justify-center gap-2">
        <FaHeadset /> Get in <GradientText label="Touch" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-base-content mb-1">
              Name
            </label>
            <input
              type="text"
              name="user_name"
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
              name="user_email"
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

          <Button label={`Send Message`} type="submit" />
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
            <FaEnvelope className="text-2xl text-accent" />
            <a
              href="mailto:mdrahimultahsin@email.com"
              className="text-base-content hover:underline"
            >
              mdrahimultahsin@email.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaPhone className="text-2xl text-accent" />
            <span className="text-base-content">+880 1615861498</span>
          </div>
          <div className="flex items-center gap-4">
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
