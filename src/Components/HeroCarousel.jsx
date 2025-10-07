import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Data from "../Components/Data.js";


export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const delay = 5000; // 5s auto-play

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev === Data.herosection.length - 1 ? 0 : prev + 1));
    }, delay);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? Data.herosection.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === Data.herosection.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      {/* Slides wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {Data.herosection.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 relative h-full"
          >
            <img 
              src={slide.img}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-6">
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-6 max-w-5xl">
                {slide.title}
              </h2>
              
              <p className="text-2xl md:text-3xl text-white mb-6 mx-auto max-w-4xl">
                {slide.desc}
              </p>

              <Link
                to={slide.link}
                className="px-8 py-3 bg-[#006881] hover:bg-[#6f1f34] text-white rounded-lg shadow-md transition"
              >
                {slide.btn}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-[#006881]/20 hover:bg-[#006881]/60 p-3 rounded-full text-white"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#006881]/20 hover:bg-[#006881]/60 p-3 rounded-full text-white"
      >
        <ChevronRight size={28} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {Data.herosection.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-[#006881]" : "bg-[#6f1f34]/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
