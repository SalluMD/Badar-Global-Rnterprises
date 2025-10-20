// CTA.jsx
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#006881] py-24">
      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
        >
          Let’s Build <span>Something Great</span> Together 
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-indigo-100"
        >
          Partner with <span className="font-semibold">Badar Global Enterprises. (BGE)</span> to experience <span>scalable</span>, <span>innovative</span>, and <span>secure</span> solutions for your business growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-5"
        >
          <Link
            to="/contact"
            className="px-8 py-4 rounded-xl bg-white text-[#006881] font-bold shadow-lg hover:text-white hover:bg-[#006881] hover:border-2 hover:border-white hover:scale-105 transform transition"
          >
            📩 Contact Us
          </Link>
          <Link
            to="/services"
            className="px-8 py-4 rounded-xl border-2 border-white text-white font-bold hover:bg-white hover:text-[#006881] hover:scale-105 transform transition"
          >
            🔍 Explore Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
