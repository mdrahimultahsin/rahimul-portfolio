import React from "react";

const Button = ({label, icon: Icon}) => {
  return (
    <button class="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full flex items-center gap-2 cursor-pointer">
      {label}
       {Icon && <Icon />}
    </button>
  );
};

export default Button;
