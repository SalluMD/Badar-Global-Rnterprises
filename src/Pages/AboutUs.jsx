import { motion } from "framer-motion";
import { Lightbulb, Globe, ShieldCheck } from "lucide-react";
import Hero from "../Components/Hero";
import CTA from "../Components/CTA";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";

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
        {/* About Section */}
        <section id="about" className="mb-12">
          <h1 className="text-3xl md:text-4xl text-center font-bold mb-6 text-gray-900">
            Who We Are
          </h1>
          <p className="text-gray-700 mb-4 text-justify">
            Founded on the principles of <strong>excellence, integrity, and innovation</strong>,{" "}
            <strong>Badar Global Enterprises Pvt. Ltd. (BG)</strong> has evolved into a globally
            respected, multi-sector conglomerate operating across <strong>25+ countries</strong>.
            Our steadfast commitment to delivering customized, high-quality, and sustainable
            solutions has earned the trust of <strong>500+ clients</strong>, including government
            bodies, semi-government agencies, multinational corporations, and private enterprises.
          </p>
          <p className="text-gray-700 mb-4 text-justify">
            BG serves as a <strong>strategic partner</strong> across diverse industries — from{" "}
            <em>infrastructure, technology, healthcare, energy, logistics, education,</em> and{" "}
            <em>consultancy</em> to emerging high-tech domains such as{" "}
            <em>Artificial Intelligence (AI), Blockchain, Robotics, Internet of Things (IoT),</em>{" "}
            and <em>Renewable Energy</em>. Our global presence, powered by innovation and integrity,
            continues to redefine standards in business excellence and client satisfaction.
          </p>
        </section>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Badar Global Enterprise Pvt Ltd: Pioneering Multi-Sector Excellence Since 2005
            </h3>

            <section id="leadership" className="mb-12">
              <p className="text-gray-700 mb-4 text-justify">
                With over <strong>20 years of experience</strong> in full-scale project management,
                strategic leadership, and operational excellence, <strong>Mr. Mohammed Arif</strong> has
                been the visionary force behind BG’s success and global expansion. His leadership blends
                innovation, strategy, and values — inspiring teams to achieve excellence across every
                vertical.
              </p>

              <p className="text-gray-700 mb-4 text-justify">
                His professional footprint spans across{" "}
                <strong>
                  Saudi Arabia, UAE, India, Qatar, Oman, Singapore, Malaysia, Indonesia, China, Japan,
                  South Korea, Russia, USA, UK, Canada,
                </strong>{" "}
                and <strong>Australia</strong>, providing unparalleled exposure to global business
                ecosystems and cultural diversity.
              </p>

              <p className="text-gray-700 mb-4 text-justify">
                Under his leadership, BG has delivered <strong>landmark projects</strong> across{" "}
                <em>infrastructure, IT, healthcare, logistics, energy,</em> and <em>consultancy</em>{" "}
                sectors. As the visionary architect of BG’s expansive{" "}
                <strong>300+ services portfolio</strong>, he continues to drive innovation, reliability,
                and client satisfaction, reinforcing BG’s reputation as a global leader in integrated
                multi-sector solutions.
              </p>
            </section>

            {/* Video Thumbnail */}
            <div
              onClick={() => setIsOpen(true)}
              className="relative rounded-lg overflow-hidden shadow-md cursor-pointer group"
            >
              <img
                src="../../public/assets/Images/Profile/6.jpg"
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
            {/* Bullet Points */}
            <ul className="space-y-3 mb-6 mt-12">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-[#006881] w-10 h-10" />
                <span className="text-gray-700 text-justify">
                  Global Reach: Established in 2005 by Mohammed Arif, Badar Global Enterprise Pvt Ltd operates from India with a key branch in Saudi Arabia, serving clients across international markets.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-[#006881] w-10 h-10" />
                <span className="text-gray-700 text-justify">
                  Diverse Service Portfolio: Offers over 250 services spanning Project Management, IT, Healthcare, Energy, Logistics, Consultancy, Education, and Agro & Livestock, tailored to meet client-specific needs.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-[#006881] w-10 h-10" />
                <span className="text-gray-700 text-justify">
                  Innovative Solutions: Integrates advanced technologies such as AI, IoT, blockchain, and smart grid systems to provide cutting-edge, high-impact solutions.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 text-gray-700 leading-relaxed">

          {/* Our Group & Partnerships */}
          <section id="group" className="mb-12">
            <p className="text-gray-700 mb-4 text-justify">
              BG is more than a business — it is a <strong>global ecosystem</strong> of subsidiaries,
              strategic alliances, and trusted partners united by a common vision of excellence.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Investor Partners:</strong> Providing strategic capital and market intelligence.
              </li>
              <li>
                <strong>Consultancy & Design Partners:</strong> Delivering expert advisory and
                specialized design solutions.
              </li>
              <li>
                <strong>Manpower & Material Supply Partners:</strong> Ensuring world-class resources
                and workforce quality.
              </li>
              <li>
                <strong>Operational & Project Execution Partners:</strong> Driving seamless, end-to-end
                project delivery.
              </li>
            </ul>

            <p className="text-gray-700 mb-4 text-justify">
              Our partnerships span across{" "}
              <strong>
                India, UAE, KSA, Qatar, Oman, Singapore, Malaysia, Indonesia, China, Japan, South
                Korea, Russia, Europe, USA, UK, Canada,
              </strong>{" "}
              and <strong>Australia</strong>, enabling BG to maintain a truly global operational
              footprint.
            </p>
          </section>

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
                  src="https://www.youtube.com/embed/7QLzzSml07Y?autoplay=1"
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


      <section className="bg-[#006881]">
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

      </section>



      {/* Awards & Achievements */}
      <motion.section {...fadeUp} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Awards & Achievements</h2>
          <p className="text-gray-600 mb-12">
            Recognized for excellence in innovation, customer satisfaction, and enterprise solutions worldwide.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Top Innovator Award 2010", img: "/assets/Images/Awards/2010.png" },
              { title: "Global Technology Excellence 2015", img: "/assets/Images/Awards/2015.png" },
              { title: "Best Enterprise Solutions 2020", img: "/assets/Images/Awards/2020.png" },
              { title: "Customer Choice Award 2023", img: "/assets/Images/Awards/2024.png" },
            ].map((award, i) => (
              <motion.div
                {...fadeUp}
                key={i}
                className="relative rounded-3xl shadow-lg hover:shadow-2xl transition h-60 flex flex-col justify-end"
                style={{
                  backgroundImage: `url(${award.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/10 rounded-3xl"></div>

                {/* Text at the bottom */}
                <h4 className="relative text-white text-lg font-semibold text-center p-5">{award.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>



      {/* Leadership Team */}
      <motion.section {...fadeUp} className="py-20 bg-[#006881]">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h2 className="text-white text-3xl font-bold mb-4">Investors</h2>
          <p className="text-white/80">
            Meet the Investors driving innovation and operational excellence.
          </p>
        </div>

        {/* Flexbox instead of grid */}
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-10">
          {[
            {
              name: "Mohammed Osman Amer",
              role: "IT Director",
              img: "../../public/assets/Images/Partners/m-osman-amer.jpg",
            },
            {
              name: "SYED ISHTIAQ UL HAQ",
              role: "System Analyst",
              img: "../../public/assets/Images/Partners/ishtiaq.jpg",
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
              { label: "Projects Completed", value: 100 },
              { label: "Global Clients", value: 500 },
              { label: "Countries", value: 20 },
              { label: "Team Members", value: 150 },
            ].map((stat, i) => (
              <motion.div {...fadeUp} key={i} className="bg-gray-50 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition">
                <h3 className="text-3xl font-bold text-[#006881] mb-2">{stat.value}+</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <CTA />
    </section>
  );
}
