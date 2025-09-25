// OurProjects.jsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function OurProjects() {
  const projects = [
    {
      title: "Enterprise ERP Solution",
      desc: "A scalable ERP system that streamlined operations for a global manufacturing company.",
      img: "https://source.unsplash.com/600x400/?technology,erp",
      category: "ERP",
    },
    {
      title: "E-Commerce Platform",
      desc: "Built a modern eCommerce platform with secure payments and real-time inventory tracking.",
      img: "https://source.unsplash.com/600x400/?ecommerce,store",
      category: "E-Commerce",
    },
    {
      title: "Healthcare Management System",
      desc: "Developed a secure system for hospitals to manage patients, doctors, and medical records.",
      img: "https://source.unsplash.com/600x400/?healthcare,software",
      category: "Healthcare",
    },
    {
      title: "AI Data Analytics Dashboard",
      desc: "An AI-powered analytics platform delivering actionable insights for enterprise decision-making.",
      img: "https://source.unsplash.com/600x400/?data,analytics",
      category: "AI",
    },
    {
      title: "Mobile Banking App",
      desc: "A secure mobile banking app with biometric login and instant transfers.",
      img: "https://source.unsplash.com/600x400/?banking,app",
      category: "Finance",
    },
    {
      title: "Education LMS",
      desc: "An online learning management system with real-time classes and progress tracking.",
      img: "https://source.unsplash.com/600x400/?education,online",
      category: "Education",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState(null);

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
        <p className="text-lg text-gray-600 mb-12">
          A glimpse of our latest solutions crafted with innovation and precision.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-blue-50 border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
              onClick={() => setSelected(p)}
            >
              <div className="relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white p-4">
                  <p className="text-sm">{p.desc}</p>
                </div>
              </div>
              <div className="p-5 text-left">
                <h3 className="font-semibold text-lg text-gray-800">{p.title}</h3>
                <p className="text-sm text-gray-500">{p.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-6"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 bg-gray-100 rounded-full p-2 hover:bg-gray-200"
            >
              ✖
            </button>
            <img
              src={selected.img}
              alt={selected.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{selected.title}</h3>
            <p className="text-gray-700">{selected.desc}</p>
            <span className="mt-3 inline-block px-4 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">
              {selected.category}
            </span>
          </motion.div>
        </div>
      )}
    </section>
  );
}
