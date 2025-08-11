import React from 'react';
import Lottie from 'lottie-react';

import aboutJson from "./about.json"
const MyLottieAnimation = () => {
  return (
    <div className='max-w-100 h-100' >
      <Lottie animationData={aboutJson} loop={true} />
    </div>
  );
};

export default MyLottieAnimation;
