import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Hero from "../Components/Hero";
import CTA from "../Components/CTA";
import Data from "../Components/Data.js";


export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClose = () => setCurrentIndex(null);
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : Data.projects.length - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => (prev < Data.projects.length - 1 ? prev + 1 : 0));

  return (
   <Fragment>
    <Hero
      title="Our Projects"
      backgroundImage={"./../../public/assets/Images/projects.jpg"}
      bgPosition="top"
    />
     <div className="bg-gray-50 py-20">
      {/* Heading */}
      <section className="mb-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Our Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 max-w-3xl mx-auto text-lg"
        >
          We take pride in delivering world-class projects across multiple
          sectors — from construction and maintenance to retail and lifestyle.
        </motion.p>
      </section>

      {/* Projects List */}
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {Data.projects.map((project, i) => (
          <motion.section
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col md:flex-row items-center gap-10 cursor-pointer ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            onClick={() => setCurrentIndex(i)}
          >
            {/* Project Image */}
            <div className="flex-1">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-2xl shadow-lg w-full object-cover h-72 hover:scale-105 transition-transform"
              />
            </div>

            {/* Project Info */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {project.name}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {project.description}
              </p>
              <p className="text-[#006881] mt-3 font-semibold cursor-pointer hover:underline">
                Click to know more →
              </p>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Modal */}
      {currentIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-8 relative shadow-lg">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl cursor-pointer"
            >
              ×
            </button>

            {/* Image */}
            <img
              src={Data.projects[currentIndex].image}
              alt={Data.projects[currentIndex].name}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />

            {/* Content */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {Data.projects[currentIndex].name}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {Data.projects[currentIndex].details}
            </p>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={handlePrev}
                className="flex items-center gap-2 text-[#006881] font-semibold hover:text-[#6f1f34] cursor-pointer"
              >
                <FaArrowLeft /> Previous
              </button>
              <button
                onClick={handleNext}
                className="flex items-center gap-2 text-[#006881] font-semibold hover:text-[#6f1f34] cursor-pointer"
              >
                Next <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    <CTA />
   </Fragment>
  );
}
