import { Fragment, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import Hero from "../Components/Hero";
import CTA from "../Components/CTA";
import Data from "../Components/Data.js";
import { useNavigate } from "react-router-dom";

// Animation variants
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const cardHover = {
  whileHover: { scale: 1.03, y: -5, transition: { duration: 0.3 } },
};

const modalVariants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.9, opacity: 0 },
  transition: { duration: 0.4, ease: "easeInOut" },
};

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const navigate = useNavigate();

  const handleClose = () => setCurrentIndex(null);
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : Data.projects.length - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => (prev < Data.projects.length - 1 ? prev + 1 : 0));

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && currentIndex !== null) {
        setCurrentIndex(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [currentIndex]);

  return (
    <Fragment>
      <Hero
        title="Our Signature Projects"
        subtitle="Explore our portfolio of transformative projects across diverse industries."
        backgroundImage={"./../../public/assets/Images/projects.jpg"}
        bgPosition="top"
        className="bg-gradient-to-b from-gray-900/80 to-transparent"
      />
      <div className="bg-gray-50 py-24">
        {/* Heading */}
        <motion.section {...fadeUp} className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Our Projects
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            We take pride in delivering world-class projects across multiple sectors—from construction and maintenance to retail and lifestyle.
          </p>
        </motion.section>

        {/* Projects List */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {Data.projects.map((project, i) => (
            <motion.section
              key={i}
              {...cardHover}
              {...fadeUp}
              className={`flex flex-col md:flex-row items-center gap-12 cursor-pointer ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              onClick={() => setCurrentIndex(i)}
            >
              {/* Project Image */}
              <div className="flex-1 relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-2xl shadow-xl w-full object-cover h-80 hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-[#006881] text-white text-sm font-medium px-3 py-1 rounded-full">
                  {project.category || "Project"}
                </span>
              </div>

              {/* Project Info */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  {project.description}
                </p>
                <button
                  className="text-[#006881] font-semibold hover:text-[#6f1f34] transition-colors"
                  onClick={() => setCurrentIndex(i)}
                >
                  Discover More →
                </button>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {currentIndex !== null && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                {...modalVariants}
                className="bg-white rounded-2xl max-w-4xl w-full relative shadow-2xl max-h-[90vh] overflow-y-auto scrollbar-none"
              >
                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition z-10"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Image */}
                <div className="relative">
                  <img
                    src={Data.projects[currentIndex].image}
                    alt={Data.projects[currentIndex].name}
                    className="w-full h-96 object-cover rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-4 left-4 bg-[#006881] text-white text-sm font-medium px-3 py-1 rounded-full">
                    {Data.projects[currentIndex].category || "Project"}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 sm:p-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {Data.projects[currentIndex].name}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {Data.projects[currentIndex].details}
                  </p>
                  {/* Project Highlights */}
                  {Data.projects[currentIndex].highlights && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Project Highlights</h4>
                      <ul className="space-y-3">
                        {Data.projects[currentIndex].highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <FaCheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <button
                    className="mt-6 bg-[#006881] text-white px-6 py-3 rounded-lg hover:bg-[#6f1f34] cursor-pointer transition-colors"
                    onClick={() => navigate("/contact")}
                  >
                    Get in Touch
                  </button>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center px-6 pb-6">
                  <button
                    onClick={handlePrev}
                    className="flex items-center gap-2 text-[#006881] font-semibold hover:text-[#6f1f34] cursor-pointer transition-colors"
                  >
                    <FaArrowLeft /> Previous
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 text-[#006881] font-semibold hover:text-[#6f1f34] cursor-pointer transition-colors"
                  >
                    Next <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <CTA />
    </Fragment>
  );
}