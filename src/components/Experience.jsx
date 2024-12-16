import React, { useState } from "react";
import VIDEOAUTOPLAY from "../assets/VIDEOAUTOPLAY.mp4";
import Autoplay3 from "../assets/Autoplay3.mp4";

const VideoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    VIDEOAUTOPLAY,
    "https://project-god-id.vercel.app/assets/video%20compressed-sIOTjM6d.mp4",
     Autoplay3,
  ];

  const showSlide = (index) => {
    if (index >= videos.length) {
      setCurrentIndex(videos.length - 1);
    } else if (index < 0) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  const updateButtons = () => {
    return {
      prev: currentIndex > 0,
      next: currentIndex < videos.length - 1,
    };
  };

  const { prev, next } = updateButtons();

  return (
    <div className="flex items-center justify-center h-screen p-4">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="font-bold text-black text-center mb-4 mt-20 sm:mt-40 text-2xl sm:text-4xl lg:text-6xl">
          VIEW GLOBAL OMNI DIGITAL'S CREATION
        </h1>

        <div className="relative overflow-hidden">
          <div
            className="slider flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {videos.map((video, index) => (
              <div className="slider-item min-w-full" key={index}>
                <div className="video-container w-full h-[300px] sm:h-[500px] overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    controls
                    className="w-full h-full object-cover"
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ))}
          </div>
          {prev && (
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black-600 hover:bg-white-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-10"
              onClick={() => showSlide(currentIndex - 1)}
              style={{ opacity: prev ? 1 : 0.5, pointerEvents: prev ? "auto" : "none" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          )}
          {next && (
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black-600 hover:bg-white-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-10"
              onClick={() => showSlide(currentIndex + 1)}
              style={{ opacity: next ? 1 : 0.5, pointerEvents: next ? "auto" : "none" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;
