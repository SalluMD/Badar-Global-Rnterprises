import { motion } from "framer-motion";
import { Lightbulb, Globe, ShieldCheck } from "lucide-react";
import Hero from "../Components/Hero";
import CTA from "../Components/CTA";
import { CheckCircle } from "lucide-react";
import { useState } from "react";


// Reusable fadeUp animation
const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

// Alternate fade left/right for sections
const fadeLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};
const fadeRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};


export default function About() {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <section id="about" className="relative bg-gray-50">
      <Hero
        title="About US"
        backgroundImage="./../../public/assets/Images/HeroSection/14.jpg"
        bgPosition="center"
      />

    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Who We Are
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Building sustainable solutions with innovation, integrity, and
          excellence to empower businesses worldwide.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
        {/* Left Content */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Driving Growth with Values & Commitment
          </h3>

          <p className="text-gray-600 mb-4">
            We aim to deliver value-driven services that transform businesses
            and communities. With our dedicated team and global outlook, we
            focus on delivering excellence in every project.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-[#006881] w-5 h-5 mt-1" />
              <span className="text-gray-700">
                Innovative approaches to solve modern business challenges.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-[#006881] w-5 h-5 mt-1" />
              <span className="text-gray-700">
                Committed to sustainability and ethical practices.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-[#006881] w-5 h-5 mt-1" />
              <span className="text-gray-700">
                Empowering people through knowledge and innovation.
              </span>
            </li>
          </ul>

          <p className="text-gray-700 mb-6">
            From small-scale solutions to global operations, we ensure
            businesses thrive by aligning technology, people, and processes.
          </p>

          {/* Video Thumbnail */}
          <div
            onClick={() => setIsOpen(true)}
            className="relative rounded-lg overflow-hidden shadow-md cursor-pointer group"
          >
            <img
              src="../../public/assets/Images/HeroSection/4.jpg"
              alt="Mission video"
              className="w-full group-hover:scale-105 transition duration-300"
            />
            <button className="absolute inset-0 flex items-center justify-center bg-white/50 bg-opacity-40 text-[#6f1f34] text-6xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 22v-20l18 10-18 10z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="../../public/assets/Images/HeroSection/2.jpg"
            alt="Team work"
            className="rounded-lg shadow-md"
          />
          <p className="text-gray-700 mt-4">
            Collaboration and teamwork are at the heart of everything we do,
            ensuring lasting partnerships with our clients and stakeholders.
          </p>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="max-w-5xl mx-auto text-gray-700 space-y-4">
        <p>
          Our mission is not just about delivering services but also about
          inspiring progress, creating impact, and making a positive difference
          for communities.
        </p>
        <p>
          With each milestone, we continue to redefine industry standards while
          staying true to our values of trust, transparency, and excellence.
        </p>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl bg-black rounded-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700"
            >
              <X size={20} />
            </button>

            {/* YouTube Video */}
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/JRfuAukYTKg?autoplay=1"
                title="Mission Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>


      {/* Company Story */}
      <motion.div
        className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Journey</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Founded with a vision to bridge technology and people, Badar Global Enterprises has grown into a trusted
            partner for enterprises worldwide, delivering impactful solutions across finance, healthcare, education, and retail.
          </p>
          <p className="text-gray-600 leading-relaxed">
            With a passionate team of innovators, we continuously exceed expectations, delivering high-value solutions that adapt to evolving business needs.
          </p>
        </div>
        <div className="relative">
          <img
            src="./../../public/assets/Images/About-image.png"
            alt="Our Enterprise Journey"
            className="rounded-3xl shadow-2xl w-full object-cover"
          />
        </div>
      </motion.div>

      {/* Mission, Vision, Values */}
      <motion.div
        className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition relative">
          <Lightbulb className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Mission</h3>
          <p className="text-gray-600">Empowering organizations by providing cutting-edge solutions that drive growth, efficiency, and innovation.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition relative">
          <Globe className="w-10 h-10 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Vision</h3>
          <p className="text-gray-600">To become a global leader in technology-driven business transformation, setting benchmarks in quality and trust.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition relative">
          <ShieldCheck className="w-10 h-10 text-pink-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Values</h3>
          <p className="text-gray-600">Integrity, Innovation, Collaboration, and Customer-Centricity form the foundation of everything we do.</p>
        </div>
      </motion.div>

       {/* Awards & Achievements */}
      <motion.section {...fadeUp} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Awards & Achievements</h2>
          <p className="text-gray-600 mb-12">Recognized for excellence in innovation, customer satisfaction, and enterprise solutions worldwide.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Best Enterprise Solutions 2023", img: "/assets/img/award1.png" },
              { title: "Top Innovator Award 2022", img: "/assets/img/award2.png" },
              { title: "Global Technology Excellence", img: "/assets/img/award3.png" },
              { title: "Customer Choice Award 2023", img: "/assets/img/award4.png" },
            ].map((award, i) => (
              <motion.div {...fadeUp} key={i} className="bg-gray-50 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition">
                <img src={award.img} alt={award.title} className="mx-auto mb-4 h-24 object-contain" />
                <h4 className="text-lg font-semibold text-gray-800">{award.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

       {/* Leadership Team */}
     <motion.section {...fadeUp} className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 text-center mb-12">
    <h2 className="text-3xl font-bold mb-4">Investors Team</h2>
    <p className="text-gray-600">
      Meet the Investors driving innovation and operational excellence.
    </p>
  </div>

  {/* Flexbox instead of grid */}
  <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-10">
    {[
      {
        name: "Mohammed Ali",
        role: "CEO",
        img: "/assets/img/team-ceo.jpg",
        desc: "--------------------------------------------------",
      },
      {
        name: "SYED ISHTIAQ UL HAQ",
        role: "CTO",
        img: "/assets/img/team-cto.jpg",
        desc: "--------------------------------------------------",
      },
      // { name: "Michael Lee", role: "COO", img: "/assets/img/team-coo.jpg", desc: "Ensuring operational excellence and execution." },
    ].map((member, i) => (
      <motion.div
        {...fadeUp}
        key={i}
        className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition text-center w-80"
      >
        <img
          src={member.img}
          alt={member.name}
          className="w-32 h-32 mx-auto rounded-full mb-4 object-cover shadow"
        />
        <h4 className="text-xl font-semibold">{member.name}</h4>
        <p className="text-[#006881] font-medium mb-2">{member.role}</p>
        <p className="text-gray-600 text-sm">{member.desc}</p>
      </motion.div>
    ))}
  </div>
</motion.section>


      {/* Fun Facts / Stats */}
      <motion.section {...fadeUp} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Impact Globally</h2>
          <p className="text-gray-600 mb-12">Delivering measurable results and driving enterprise success worldwide.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projects Completed", value: 120 },
              { label: "Global Clients", value: 35 },
              { label: "Awards Won", value: 15 },
              { label: "Team Members", value: 50 },
            ].map((stat, i) => (
              <motion.div {...fadeUp} key={i} className="bg-gray-50 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition">
                <h3 className="text-3xl font-bold text-[#006881] mb-2">{stat.value}+</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

       {/* Call to Action */}
      {/* <motion.section {...fadeUp} className="py-20 bg-[#006881] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Build the Future Together</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          We believe in partnerships that last. Whether you're a startup or a large enterprise, we’re here to help you scale and succeed.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-white text-[#006881] font-semibold rounded-xl shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </motion.section> */}
      <CTA />
    </section>
  );
}
