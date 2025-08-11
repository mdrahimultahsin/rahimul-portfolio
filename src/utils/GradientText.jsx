import React from "react";

const GradientText = ({label}) => {
  return (
    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
      {label}
    </span>
  );
};

export default GradientText;
