// OurProjects.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wrench, Building2, Hammer } from "lucide-react";

export default function ProjectDetails() {
  //   const projects = [
  //     {
  //     title: "Lifestyle — Maintenance",
  //     desc:
  //       "Providing complete maintenance services ensuring seamless operations, long-term sustainability, and customer satisfaction for Lifestyle projects.",
  //     img: "../../public/assets/Images/projects/Maintenance1.jpg",
  //     details:
  //       "Our Lifestyle maintenance project covers electrical, mechanical, and civil maintenance services. With a dedicated team, we ensure zero downtime and smooth functionality of facilities.",
  //   },
  //   {
  //     title: "Arabia Project",
  //     desc:
  //       "A landmark project contributing to the urban development of Arabia, focused on modern infrastructure and world-class construction standards.",
  //     img: "../../public/assets/Images/projects/Arabia-Project.jpg",
  //     details:
  //       "Landmark Arabia is a mixed-use development project featuring commercial, residential, and leisure spaces designed with modern architecture and sustainability in mind.",
  //   },
  //   {
  //     title: "MSLC — Construction",
  //     desc:
  //       "Major civil construction project under MSLC, delivering durable and high-quality structures with innovative engineering.",
  //     img: "../../public/assets/Images/projects/Construction.jpg",
  //     details:
  //       "MSLC construction project includes industrial, residential, and infrastructure works. We incorporate modern design with advanced safety and quality standards.",
  //   },


  // //   {
  // //     title: "ROCON — Construction",
  // //     desc:
  // //       "Delivering excellence in construction with ROCON, including commercial and residential projects meeting global quality benchmarks.",
  // //     img: "../../public/assets/Images/Rocon.jpg",
  // //     details:
  // //       "ROCON construction focuses on eco-friendly materials, efficient workflows, and international-level finishing for corporate and residential complexes.",
  // //   },
  // //   {
  // //     title: "LULU Mall",
  // //     desc:
  // //       "One of the largest shopping malls, offering complete facility management and construction solutions with high efficiency.",
  // //     img: "../../public/assets/Images/Lulu_Trivandrum.jpg",
  // //     details:
  // //       "LULU Mall is a mega retail hub, developed with sustainable design, modern architecture, and a focus on providing customers with a world-class shopping experience.",
  // //   },
  // //   {
  // //     title: "City Flower Mall",
  // //     desc:
  // //       "Developed to provide a premium shopping and lifestyle experience, City Flower Mall reflects innovation and modern architecture.",
  // //     img: "../../public/assets/Images/jubail-hyper.jpeg",
  // //     details:
  // //       "City Flower Mall combines retail, dining, and entertainment under one roof, designed with attention to detail and customer convenience.",
  // //   },
  // //   {
  // //     title: "IKEA Mall",
  // //     desc:
  // //       "A state-of-the-art retail and lifestyle space built for IKEA, with sustainable design and customer-centric facilities.",
  // //     img: "../../public/assets/Images/IKEA_Shopping_centre_Sweden.jpg",
  // //     details:
  // //       "IKEA Mall project was delivered with precision planning, focusing on functionality, design excellence, and sustainability for global retail operations.",
  // //   },
  //   ];

  const projects = [
    {
      title: "Lifestyle — Maintenance",
      desc:
        "Providing complete maintenance services ensuring seamless operations, long-term sustainability, and customer satisfaction for Lifestyle projects.",
      icon: Wrench,
      details:
        "Our Lifestyle maintenance project covers electrical, mechanical, and civil maintenance services. With a dedicated team, we ensure zero downtime and smooth functionality of facilities.",
    },
    {
      title: "Arabia Project",
      desc:
        "A landmark project contributing to the urban development of Arabia, focused on modern infrastructure and world-class construction standards.",
      icon: Building2,
      details:
        "Landmark Arabia is a mixed-use development project featuring commercial, residential, and leisure spaces designed with modern architecture and sustainability in mind.",
    },
    {
      title: "MSLC — Construction",
      desc:
        "Major civil construction project under MSLC, delivering durable and high-quality structures with innovative engineering.",
      icon: Hammer,
      details:
        "MSLC construction project includes industrial, residential, and infrastructure works. We incorporate modern design with advanced safety and quality standards.",
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
        <p className="text-lg text-gray-600 mb-12">
          A glimpse of our latest solutions crafted with innovation and precision.
        </p>

        {/* Project Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col cursor-pointer p-6"
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelected(p)}
            >
              {/* Icon */}
              <p.icon className="w-12 h-12 text-[#006881] mb-4 mx-auto" />

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{p.title}</h3>
              <p className="text-gray-600">{p.desc}</p>
            </motion.div>
          ))}
        </div>


        {/* Explore More Button */}
        <Link to='/Ourprojects' className="px-6 py-3 bg-[#006881] text-white font-semibold rounded-lg hover:bg-[#6f1f34] transition">
          Explore More
        </Link>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-[#006881] bg-opacity-70 flex items-center justify-center z-50 p-6"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white rounded-2xl shadow-xl max-w-3xl w-full p-6 relative"
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
          </motion.div>
        </div>
      )}
    </section>
  );
}
