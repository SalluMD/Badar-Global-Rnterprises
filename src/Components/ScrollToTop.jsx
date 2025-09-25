import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-4 rounded-full bg-[#6f1634] text-white shadow-lg
                  hover:bg-[#006881] transition-all duration-500 ease-in-out
                  animate-bounce ring-2 hover:ring-[#6f1634] ring-[#006881] ring-offset-2
                  hover:shadow-[0_0_20px_rgba(255,193,7,0.8)]
                  ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <ArrowUp size={22} />
    </button>
  );
}
