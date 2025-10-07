import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "../Components/Hero";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaCheckCircle, FaShieldAlt, FaLightbulb, FaUsers, FaHeart, FaChartLine } from "react-icons/fa";
import branches from "../Components/branches.js";

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
      title: "Excellence",
      description: "Delivering exceptional results that exceed expectations in every interaction.",
    },
    {
      icon: FaShieldAlt,
      title: "Integrity",
      description: "Building trust through honesty, transparency, and ethical practices.",
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "Embracing creative solutions to stay ahead in a dynamic world.",
    },
    {
      icon: FaUsers,
      title: "Collaboration",
      description: "Working together to combine diverse expertise for shared success.",
    },
    {
      icon: FaHeart,
      title: "Customer Focus",
      description: "Prioritizing client needs with tailored, responsive solutions.",
    },
    {
      icon: FaChartLine,
      title: "Growth",
      description: "Fostering continuous learning to adapt and thrive in challenges.",
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
                  className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200 hover:border-indigo-300 transition-all duration-300 group"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-700 transition-colors">
                      <Icon size={28} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Our Branches
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Connect with us at any of our global offices. We're ready to assist you wherever you are.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto space-y-12">
          {Object.entries(branches).map(([key, branch], i) => (
            <motion.div
              key={i}
              {...fadeUp}
              {...cardHover}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-indigo-200 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-center text-indigo-700 mb-6">
                {branch.country} - {branch.city} ({branch.branchName || (key === "headOffice" ? "Head Office" : "Branch Office")})
              </h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Info */}
                <div className="space-y-4">
                  <p className="flex items-center text-gray-700">
                    <MapPin className="w-5 h-5 text-indigo-600 mr-2" />
                    <span><strong>Address:</strong> {branch.address}</span>
                  </p>
                  <a href={`tel:${branch.phone}`} className="flex items-center text-gray-700 hover:text-indigo-600 transition">
                    <Phone className="w-5 h-5 text-indigo-600 mr-2" />
                    <span><strong>Phone:</strong> {branch.phone}</span>
                  </a>
                  <a href={`mailto:${branch.email}`} className="flex items-center text-gray-700 hover:text-indigo-600 transition">
                    <Mail className="w-5 h-5 text-indigo-600 mr-2" />
                    <span><strong>Email:</strong> {branch.email}</span>
                  </a>
                </div>
                {/* Map */}
                <iframe
                  src={branch.mapEmbedUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-xl shadow-md"
                  title={`${branch.city} Map`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How to Reach Us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            How to Reach Us
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Visit us at any of our offices, easily accessible with ample parking and public transport options.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(branches).map(([key, branch]) => (
              <button
                key={key}
                onClick={() => setSelectedBranch(key)}
                className={`px-6 py-3 rounded-full font-semibold transition ${
                  selectedBranch === key
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700"
                }`}
              >
                {branch.city}
              </button>
            ))}
          </div>
          <AnimatePresence>
            <motion.div
              key={selectedBranch}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto"
            >
              <div className="md:w-1/2">
                <iframe
                  className="w-full h-96 rounded-2xl shadow-lg"
                  src={branches[selectedBranch].mapEmbedUrl}
                  allowFullScreen
                  loading="lazy"
                  title={`${branches[selectedBranch].city} Map`}
                />
              </div>
              <div className="md:w-1/2 text-gray-700 text-lg leading-relaxed">
                <p>
                  Our {branches[selectedBranch].city} office is strategically located for easy access via public transport and is just a short distance from the city center. Ample parking is available for visitors, ensuring a hassle-free experience.
                </p>
                <p className="mt-4">
                  <strong>Address:</strong> {branches[selectedBranch].address}
                </p>
                <p className="mt-2">
                  <strong>Nearest Transport:</strong>{" "}
                  {branches[selectedBranch].city === "Hyderabad"
                    ? "Hyderabad Metro (10 min walk)"
                    : branches[selectedBranch].city === "Riyadh"
                    ? "Riyadh Metro (15 min walk)"
                    : "Dammam Bus Station (5 min drive)"}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white">
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
              className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition transform hover:-translate-y-1"
            >
              🚀 Send Message
            </button>
          </div>
        </motion.form>
      </section>
    </div>
  );
}