import React, { useRef, useState, useEffect } from "react";
import { testimonials } from "../constants";

const Testimonials = () => {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 320; // lebar satu card
      sliderRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const scrollWidth = sliderRef.current.scrollWidth;
      const clientWidth = sliderRef.current.clientWidth;

      setCanScrollLeft(scrollLeft > 0); // Show left button when not at leftmost position
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth); // Show right button when not at rightmost position
    }
  };

  // Attach scroll event listener on component mount and clean up on unmount
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (slider) {
        slider.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="bg-transparent min-h-screen flex flex-col items-center p-8">
      <div className="mt-12 bg-transparent rounded-[20px] w-full max-w-7xl">
        <div className="bg-transparent rounded-2xl p-8 min-h-[300px]">
          <h2 className="text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mt-[1px]">Testimonials.</h2>
        </div>
        <div className="relative pb-14 px-8">
          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="flex flex-nowrap gap-7 overflow-x-hidden scroll-smooth mt-[-150px]"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#FFE893] p-10 rounded-3xl w-full max-w-[320px] flex-shrink-0"
              >
                 <div className="mt-[-15px] flex justify-between items-center gap-1">
                    <div className="flex-1 flex flex-col">
                      <p className="text-white font-medium text-[16px] mt-[5px]">
                        <span className="text-blue-500 item  ">@</span>
                        {testimonial.name}
                      </p>
                      <p className="mt-1 text-gray-200 text-[12px]">
                        {testimonial.position}
                      </p>
                    </div>
                    <img
                      src={testimonial.imgSrc}
                      alt={`Portrait of ${testimonial.name}, ${testimonial.position}`}
                      className="w-10 h-10 rounded-full object-cover relative top-[-35px]"
                      width="40"
                      height="40"
                    />
                  </div>
                <p className="text-black font-boldk text-[16px] ">"</p> 
                <div className="mt-[10px]">
                  <p className="text-black tracking-wider text-[12px] mt-[-19px]">
                    {testimonial.text}
                  </p>
                 
                </div>
              </div>
            ))}
          </div>

         {/* Navigation Buttons */}
         <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-8 top-[120px] ">
            {/* Left button, only visible when we can scroll left */}
            {canScrollLeft && (
              <button
                className="bg-[#FFD768] to-indigo-600 text-white p-4 rounded-full shadow-lg transform transition-all hover:scale-110 hover:bg-white-600 hover:to-blue-500 focus:outline-none flex items-center justify-center absolute left-[-26px] "
                onClick={() => scrollSlider("prev")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}

            {/* Right button, always visible, but hides when at the far-right */}
            {canScrollRight && (
              <button
                className="bg-[#FFD768] to-indigo-600 text-white p-4 rounded-full shadow-lg transform transition-all hover:scale-110 hover:bg-white-500 focus:outline-none flex items-center justify-center absolute right-[29px]"
                onClick={() => scrollSlider("next")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;