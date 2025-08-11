import React from 'react';
import Lottie from 'lottie-react';

import aboutJson from "./about.json"
const MyLottieAnimation = () => {
  return (
    <div style={{ width: 500, height: 500 }}>
      <Lottie animationData={aboutJson} loop={true} />
    </div>
  );
};

export default MyLottieAnimation;
