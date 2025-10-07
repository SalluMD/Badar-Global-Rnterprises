import { Fragment, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, CheckCircle } from "lucide-react";
import Hero from "../Components/Hero";
import CTA from "../Components/CTA";
import Data from "../Components/Data.js";

// Animation variants
const fadeUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const cardHover = {
  whileHover: { scale: 1.05, y: -5, transition: { duration: 0.3 } },
};

const modalVariants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.9, opacity: 0 },
  transition: { duration: 0.4, ease: "easeInOut" },
};

export default function Services() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % Data.services.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + Data.services.length) % Data.services.length);
  };

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && selectedIndex !== null) {
        setSelectedIndex(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [selectedIndex]);

  return (
    <Fragment>
      <Hero
        title="Our Premium Services"
        subtitle="Discover innovative solutions crafted to elevate your business success."
        backgroundImage="./../../public/assets/Images/new-data-services-Ar-iTL4QKl4-unsplash.jpg"
        className="bg-gradient-to-b from-gray-900/80 to-transparent"
      />
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div {...fadeUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive suite of services designed to meet your unique business challenges with cutting-edge solutions.
            </p>
          </motion.div>

          {/* Grid of Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Data.services.map((service, i) => (
              <motion.div
                key={i}
                {...cardHover}
                {...fadeUp}
                onClick={() => setSelectedIndex(i)}
                className="cursor-pointer bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-4 left-4 bg-[#006881] text-white text-sm font-medium px-3 py-1 rounded-full">
                    {service.category || "Service"}
                  </span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 line-clamp-3 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <button
                    className="mt-4 text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                    onClick={() => setSelectedIndex(i)}
                  >
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal Popup with Carousel */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                {...modalVariants}
                className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden relative max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition z-10"
                >
                  <X size={28} />
                </button>

                {/* Image */}
                <div className="relative">
                  <img
                    src={Data.services[selectedIndex].image}
                    alt={Data.services[selectedIndex].title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-4 left-4 bg-[#006881] text-white text-sm font-medium px-3 py-1 rounded-full">
                    {Data.services[selectedIndex].category || "Service"}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 sm:p-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    {Data.services[selectedIndex].title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {Data.services[selectedIndex].description}
                  </p>
                  {/* Additional Features */}
                  {Data.services[selectedIndex].features && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                      <ul className="space-y-3">
                        {Data.services[selectedIndex].features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <button
                    className="mt-6 bg-[#006881] text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                    onClick={() => setSelectedIndex(null)}
                  >
                    Get Started
                  </button>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center px-6 pb-6">
                  <button
                    onClick={handlePrev}
                    className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                    aria-label="Previous service"
                  >
                    <ChevronLeft size={24} className="text-gray-700" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                    aria-label="Next service"
                  >
                    <ChevronRight size={24} className="text-gray-700" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <CTA />
    </Fragment>
  );
}