import React from "react";

const Video = () => {
  return (
    <div className="absolute inset-0">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        loading="lazy"
        poster="/about/about-1.webp"
      >
        <source src="/herogb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
};

export default Video;
