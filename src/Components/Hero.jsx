// Hero.jsx
import { motion } from "framer-motion";

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  height = "h-[50vh]",
  bgPosition,
}) {
  return (
    <section
      className={`relative ${height} flex items-center justify-lest text-left`}
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-${bgPosition} bg-fixed`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
      </div>

      {/* Hover Text */}
      <motion.div
        className="relative z-10 max-w-3xl px-6 py-8  text-white opacity-80 hover:opacity-100 transition duration-500 ml-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl">{subtitle}</p>
      </motion.div>
    </section>
  );
}
