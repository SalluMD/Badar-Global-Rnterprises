// WhatWeDo.jsx
import { HandPlatter, Ship, Cpu, FolderKanban } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function WhatWeDo() {
  const services = [
    {
      icon: <FolderKanban className="w-12 h-12 text-[#006881] group-hover:scale-110 transition-transform" />,
      title: "Project Management & Consulting",
      desc: "From concept to execution, we manage complex projects with precision and provide expert consulting for optimized delivery.",
      gradient: "from-blue-50 via-white to-blue-100",
    },
    {
      icon: <HandPlatter className="w-12 h-12 text-[#006881] group-hover:scale-110 transition-transform" />,
      title: "Manpower Supply",
      desc: "We offer skilled and unskilled workforce solutions, enabling businesses to scale efficiently with quality assurance.",
      gradient: "from-green-50 via-white to-green-100",
    },
    {
      icon: <Ship className="w-12 h-12 text-[#006881] group-hover:scale-110 transition-transform" />,
      title: "Import / Export",
      desc: "Connecting businesses globally with seamless trade, logistics, and compliance solutions to help you grow with confidence.",
      gradient: "from-purple-50 via-white to-purple-100",
    },
    {
      icon: <Cpu className="w-12 h-12 text-[#006881] group-hover:scale-110 transition-transform" />,
      title: "Information Technology",
      desc: "We deliver modern IT solutions including software, infrastructure, and digital transformation strategies for growth.",
      gradient: "from-orange-50 via-white to-orange-100",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="whatwedo"
      className="relative py-20 bg-gradient-to-br from-[#00465c] via-[#006881] to-[#1a91a8] overflow-hidden"
    >
      {/* Decorative blurred circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What We Do
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-14 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          At <span className="font-semibold text-white">Badar Global Enterprises Private Limited</span>, 
          we operate as a dynamic multinational conglomerate. Our expertise across diverse sectors helps 
          businesses innovate, expand, and thrive globally.
        </motion.p>

        {/* Services Grid */}
        <motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={`group relative p-8 rounded-3xl shadow-lg bg-gradient-to-br ${s.gradient} 
              backdrop-blur-md transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl`}
            >
              <div className="flex justify-center mb-5">{s.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-[#006881] transition">
                {s.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">{s.desc}</p>

              {/* Glow border on hover */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#006881] transition-all"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            to="/services"
            className="px-8 py-4 bg-white text-[#006881] text-lg font-semibold rounded-full shadow-md hover:bg-[#6f1f34] hover:text-white transition-all duration-300"
          >
            Explore More Services →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
