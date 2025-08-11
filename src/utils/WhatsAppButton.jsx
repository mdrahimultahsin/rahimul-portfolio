import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "8801615861498"; 
  const message = "Hello! I would like to get in touch with you.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
        
    <button
      onClick={handleClick}
      className="flex items-center gap-2 px-4 py-2 btn-accent text-accent hover:text-white hover:border-transparent rounded hover:bg-green-600 transition btn-outline btn"
    >
      <FaWhatsapp className="text-xl" />
      Chat on WhatsApp
    </button>
  );
};

export default WhatsAppButton;