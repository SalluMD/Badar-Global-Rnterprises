import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "../Components/Hero";
import { FaCheckCircle, FaShieldAlt, FaLightbulb, FaUsers, FaHeart, FaChartLine, FaFacebook, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import Branches from "../Components/Branches.jsx";
import BranchesData from '../Components/BranchesData.js'

// Animation variants
const fadeUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const cardHover = {
  whileHover: { scale: 1.03, y: -5, transition: { duration: 0.3 } },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.3 },
};

const staggerItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function ContactUs() {
  const form = useRef();
  const [selectedBranch, setSelectedBranch] = useState("headOffice");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6imj3dr",
        "template_5i4pt2b",
        form.current,
        "v7btFO9mcw2VXOncp"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send: " + error.text);
        }
      );
  };

  const teamCommitments = [
  {
    icon: FaCheckCircle,
    title: "Quality First",
    description: "Ensuring every project meets the highest standards of excellence and precision.",
  },
  {
    icon: FaShieldAlt,
    title: "Trust & Ethics",
    description: "Acting with honesty and integrity in every decision and interaction.",
  },
  {
    icon: FaLightbulb,
    title: "Creative Solutions",
    description: "Innovating and thinking outside the box to solve complex challenges.",
  },
  {
    icon: FaUsers,
    title: "Team Synergy",
    description: "Fostering collaboration to achieve common goals efficiently.",
  },
  {
    icon: FaHeart,
    title: "Client Success",
    description: "Prioritizing customer satisfaction with responsive and tailored approaches.",
  },
  {
    icon: FaChartLine,
    title: "Continuous Improvement",
    description: "Always evolving, learning, and growing to stay ahead in our field.",
  },
];


  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero
        title="Contact Us"
        subtitle="We're here to assist you. Reach out to our team at any of our global locations."
        backgroundImage="/assets/Images/t1.jpg"
        bgPosition="top"
        className="bg-gradient-to-b from-gray-900/80 to-transparent"
      />

      {/* Our Commitments Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Our Commitments
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              These core principles guide our interactions, ensuring we deliver value and maintain the highest standards.
            </p>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamCommitments.map((commitment, i) => {
              const Icon = commitment.icon;
              return (
                <motion.div
                  key={i}
                  {...staggerItem}
                  {...cardHover}
                  className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200 hover:border-[#6f1f34] transition-all duration-300 group"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-[#006881] text-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#6f1f34] transition-colors">
                      <Icon size={28} />
                    </div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{commitment.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{commitment.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#006881]">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Our Branches
          </h2>
          <p className="text-gray-50 max-w-3xl mx-auto text-lg leading-relaxed">
            Connect with us at any of our global offices. We're ready to assist you wherever you are.
          </p>
          <Branches />
        </motion.div>
      </section>

      {/* How to Reach Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              How to Reach Us
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Find our offices across India and Saudi Arabia. Select a branch to view its map and contact details.
            </p>
          </motion.div>

          {/* Branch Selection Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(BranchesData).slice(1).map(([key, branch]) => (
              <button
                key={key}
                onClick={() => setSelectedBranch(key)}
                className={`px-6 py-3 rounded-full font-semibold transition ${selectedBranch === key
                    ? "bg-[#006881] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700"
                  }`}
              >
                {branch.city}
              </button>
            ))}
          </div>

          {/* Branch Map + Details */}
          <AnimatePresence>
            <motion.div
              key={selectedBranch}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto"
            >
              {/* Map */}
              <div className="md:w-1/2">
                <iframe
                  className="w-full h-96 rounded-2xl shadow-lg"
                  src={BranchesData[selectedBranch].mapEmbedUrl}
                  allowFullScreen
                  loading="lazy"
                  title={`${BranchesData[selectedBranch].city} Map`}
                />
              </div>

              {/* Info */}
              <div className="md:w-1/2 text-left text-gray-700 text-lg leading-relaxed space-y-4">
                <h3 className="text-2xl font-bold text-[#006881]">
                  {BranchesData[selectedBranch].branchName} ({BranchesData[selectedBranch].country})
                </h3>
                <p><strong>Address:</strong> {BranchesData[selectedBranch].address}</p>
                <p><strong>Phone:</strong> {BranchesData[selectedBranch].phone}</p>
                <p><strong>Email:</strong> {BranchesData[selectedBranch].email}</p>
                
                <div className="flex gap-4 mt-4">
                  <a href={BranchesData[selectedBranch].socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-gray-600 hover:text-[#006881] text-xl transition" />
                  </a>
                  <a href={BranchesData[selectedBranch].socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="text-gray-600 hover:text-[#006881] text-xl transition" />
                  </a>
                  <a href={BranchesData[selectedBranch].socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-gray-600 hover:text-[#006881] text-xl transition" />
                  </a>
                  <a href={BranchesData[selectedBranch].socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-gray-600 hover:text-[#006881] text-xl transition" />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>


      {/* Contact Form */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#006881] text-white">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Send Us a Message
          </h2>
          <p className="text-gray-200 max-w-3xl mx-auto text-lg leading-relaxed">
            Have a question or want to collaborate? Fill out the form below, and we'll get back to you promptly.
          </p>
        </motion.div>
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          {...fadeUp}
          className="max-w-3xl mx-auto bg-white text-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                placeholder="Enter your name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition"
              />
            </div>
            <div>
              <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                placeholder="Enter your email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition"
              />
            </div>
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
              Your Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              id="mobile"
              placeholder="Enter your mobile number"
              required
              pattern="[0-9]{10,15}"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Tell us how we can help"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 h-40 resize-none focus:ring-2 focus:ring-indigo-600 focus:outline-none transition"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#006881] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition transform hover:-translate-y-1"
            >
              🚀 Send Message
            </button>
          </div>
        </motion.form>
      </section>
    </div>
  );
}