// WhatWeDo.jsx
import { HandPlatter, Ship , Cpu, FolderKanban , Globe, ShieldCheck, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function WhatWeDo() {
  const services = [
    {
      icon: <FolderKanban className="w-12 h-12 text-blue-600 group-hover:scale-110 transition-transform" />,
      title: "Project Management & Consulting",
      desc: "From concept to execution, we manage complex projects with precision. Our consulting experts ensure on-time delivery, optimized processes, and cost-effective solutions tailored for your industry.",
      color: "from-blue-50 to-blue-100"
    },
    {
      icon: <HandPlatter  className="w-12 h-12 text-green-600 group-hover:scale-110 transition-transform" />,
      title: "Manpower Supply",
      desc: "We provide skilled and unskilled workforce across industries. Our reliable staffing solutions help businesses scale efficiently while maintaining quality and compliance standards.",
      color: "from-green-50 to-green-100"
    },
    {
      icon: <Ship className="w-12 h-12 text-purple-600 group-hover:scale-110 transition-transform" />,
      title: "Import / Export",
      desc: "Connecting businesses worldwide with seamless trade solutions. We specialize in procurement, logistics, and compliance to help you expand globally with confidence.",
      color: "from-purple-50 to-purple-100"
    },
    {
      icon: <Cpu className="w-12 h-12 text-orange-600 group-hover:scale-110 transition-transform" />,
      title: "Information Technology",
      desc: "Delivering modern IT solutions including software development, infrastructure management, and digital transformation strategies to empower business growth in the digital era.",
      color: "from-orange-50 to-orange-100"
    },
  ];

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
    })
  };

  return (
    <section id="whatwedo" className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* 🔹 Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-slow"></div>
      <div className="absolute top-40 left-1/2 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        
        {/* Section Header */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What We Do
        </motion.h2>

        <motion.p 
          className="text-lg text-gray-600 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          At <span className="font-semibold text-[#006881]">Badar Global Enterprises Private Limited</span>, 
          we operate as a dynamic multinational conglomerate. With expertise across multiple sectors, 
          we deliver innovative, reliable, and sustainable solutions that drive growth and global success.
        </motion.p>

        {/* Services Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 relative">
          {services.map((s, index) => (
            <motion.div
              key={index}
              className={`group p-6 bg-gradient-to-br ${s.color} rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition transform`}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex justify-center mb-4">{s.icon}</div>
              <h3 className="font-semibold text-gray-900 text-xl mb-3 group-hover:text-blue-700 transition">
                {s.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            to="/services"
            className="px-6 py-3 bg-[#006881] text-white text-lg font-medium rounded-xl shadow-md hover:bg-[#6f1634] transition"
          >
            Explore More Services →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
