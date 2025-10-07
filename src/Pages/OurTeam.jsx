import React, { Fragment } from "react";
import Hero from "../Components/Hero";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaInstagram, FaCheckCircle, FaShieldAlt, FaLightbulb, FaUsers, FaHeart, FaChartLine, FaGraduationCap } from "react-icons/fa";
import CTA from "../Components/CTA";

// Animation variants
const fadeUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
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

const cardHover = {
  whileHover: { scale: 1.05, y: -5, transition: { duration: 0.3 } },
};

export default function OurTeam() {
  const departments = [
    {
      title: "Management Team",
      description: "Our leadership team drives the vision, strategy, and culture of our organization with unwavering commitment.",
      bg: "bg-white",
      members: [
        {
          name: "Suman Chapala",
          role: "Program Manager: BGE Pvt. Ltd.",
          image: "/assets/Images/Team/ceo.jpg",
          socials: { linkedin: "#", twitter: "#", instagram: "#" },
        },
        {
          name: "Ismail Ali Khan",
          role: "Executive Coordinator: BGE Pvt. Ltd.",
          image: "/assets/Images/Team/cto.jpg",
          socials: { linkedin: "#", twitter: "#", instagram: "#" },
        },
      ],
    },
    {
      title: "Accounts Team",
      description: "Managing our financial operations with precision, expertise, and a keen eye for detail to ensure sustainable growth.",
      bg: "bg-gray-50",
      members: [
        {
          name: "Yaser Ali Ahemad Khan",
          role: "Junior Accountant",
          image: "/assets/Images/Team/dev.jpg",
          socials: { linkedin: "#", twitter: "#", instagram: "#" },
        },
        {
          name: "SHIVA KRISHNA TANGELLA",
          role: "Senior Accountant",
          image: "/assets/Images/Team/frontend.jpg",
          socials: { linkedin: "#", twitter: "#", instagram: "#" },
        },
        {
          name: "Talha Farooqi",
          role: "Network Engineer",
          image: "/assets/Images/Team/backend.jpg",
          socials: { linkedin: "#", twitter: "#", instagram: "#" },
        },
      ],
    },
    {
      title: "Marketing Team",
      description: "Our creative minds responsible for storytelling, branding, and connecting with audiences through innovative strategies.",
      bg: "bg-white",
      members: [
        {
          name: "Emma Brown",
          role: "Head of Marketing",
          image: "/assets/Images/Team/marketing.jpg",
          socials: { linkedin: "#", twitter: "#", instagram: "#" },
        },
        {
          name: "Liam Carter",
          role: "Content Strategist",
          image: "/assets/Images/Team/content.jpg",
          socials: { linkedin: "#", twitter: "#", instagram: "#" },
        },
      ],
    },
    {
      title: "Human Resources",
      description: "The HR team nurtures our culture and ensures every employee grows with us through supportive and inclusive practices.",
      bg: "bg-gray-50",
      members: [
        {
          name: "Sophia Miller",
          role: "HR Manager",
          image: "/assets/Images/Team/hr.jpg",
          socials: { linkedin: "#", twitter: "#", instagram: "#" },
        },
      ],
    },
  ];

  const partners = [
    {
      name: "Mohammed Abdul Rahman",
      role: "Genius Enterprises",
      img: "/assets/Images/Team/team-designer.jpg",
    },
    {
      name: "Mohammed Abdul Azeem",
      role: "Insaat Infara Project Pvt Ltd",
      img: "/assets/Images/Team/team-dev.jpg",
    },
    {
      name: "Mohammed Ali",
      role: "Al Zabiha Pvt Ltd",
      img: "/assets/Images/Team/team-marketing.jpg",
    },
    {
      name: "Syed Mukaram Ali",
      role: "Badoor Al Najed Company",
      img: "/assets/Images/Team/team-marketing.jpg",
    },
    {
      name: "Mohammed Azher",
      role: "Dana Group",
      img: "/assets/Images/Team/team-marketing.jpg",
    },
    {
      name: "Abdul Mateen",
      role: "USA",
      img: "/assets/Images/Team/team-marketing.jpg",
    },
    {
      name: "Mohammed Abdul Saleem Ahmed",
      role: "WCS",
      img: "/assets/Images/Team/team-marketing.jpg",
    },
  ];

  const teamCommitments = [
    {
      icon: FaCheckCircle,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, delivering exceptional results that exceed expectations.",
    },
    {
      icon: FaShieldAlt,
      title: "Integrity",
      description: "Honesty and transparency guide our actions, building trust with our clients, partners, and team members.",
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "We embrace creative thinking and cutting-edge solutions to stay ahead in a rapidly evolving world.",
    },
    {
      icon: FaUsers,
      title: "Collaboration",
      description: "Teamwork is at our core, where diverse perspectives come together to achieve shared success.",
    },
    {
      icon: FaHeart,
      title: "Customer Focus",
      description: "Our clients are our priority; we listen, understand, and deliver solutions tailored to their needs.",
    },
    {
      icon: FaChartLine,
      title: "Growth",
      description: "Continuous learning and development empower our team to reach new heights and adapt to challenges.",
    },
  ];

  const timeline = [
    {
      year: "2005",
      title: "The Beginning",
      description: "Our journey started with a small team of passionate individuals and a shared vision to innovate.",
    },
    {
      year: "2008",
      title: "First Major Milestone",
      description: "We launched our flagship product and expanded into new markets, gaining industry recognition.",
    },
    {
      year: "2020",
      title: "Scaling Up",
      description: "Our team grew globally, and we introduced new services to meet customer demand.",
    },
    {
      year: "2023",
      title: "Innovation & Growth",
      description: "We embraced cutting-edge technology and continued building solutions that make an impact.",
    },
    {
      year: "Today",
      title: "A Thriving Family",
      description: "With multiple departments and hundreds of happy clients, we're stronger than ever.",
    },
  ];

  return (
    <Fragment>
      {/* Hero */}
      <Hero
        title="Our Team"
        subtitle="Meet the dedicated professionals driving innovation and excellence."
        backgroundImage="/assets/Images/t2.jpg"
        bgPosition="center"
        className="bg-gradient-to-b from-gray-900/80 to-transparent"
      />

      {/* Intro - Partners Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Meet Our Partners
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              We're more than just a company — we're a family of innovators, creators, and leaders working together to shape the future.
            </p>
          </motion.div>

          {/* Partners Grid */}
          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                {...staggerItem}
                {...cardHover}
                className="bg-white rounded-2xl shadow-xl p-6 text-center border border-gray-100 hover:border-indigo-200 transition-all duration-300"
              >
                <div className="relative mb-4">
                  <img
                    src={partner.img}
                    alt={partner.name}
                    className="w-24 h-24 mx-auto rounded-full object-cover shadow-lg border-4 border-white"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h4>
                <p className="text-indigo-600 font-medium">{partner.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Departments */}
      {departments.map((dept, i) => (
        <section key={i} className={`${dept.bg} py-24 border-b border-gray-100`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                {dept.title}
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                {dept.description}
              </p>
            </motion.div>

            <motion.div
              {...staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
            >
              {dept.members.map((member, index) => (
                <motion.div
                  key={index}
                  {...staggerItem}
                  {...cardHover}
                  className="relative bg-white shadow-lg rounded-2xl p-8 text-center w-full max-w-sm border border-gray-100 hover:border-indigo-200 transition-all duration-300 overflow-hidden group"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-indigo-100 shadow-xl mb-4"
                    />
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                    <span className="inline-block px-4 py-2 text-sm bg-indigo-100 text-indigo-700 rounded-full font-medium mb-4">
                      {member.role}
                    </span>
                    <div className="flex justify-center gap-4 mb-4">
                      <a href={member.socials.linkedin} className="text-gray-500 hover:text-indigo-600 transition-colors p-2">
                        <FaLinkedinIn size={20} />
                      </a>
                      <a href={member.socials.twitter} className="text-gray-500 hover:text-indigo-600 transition-colors p-2">
                        <FaTwitter size={20} />
                      </a>
                      <a href={member.socials.instagram} className="text-gray-500 hover:text-indigo-600 transition-colors p-2">
                        <FaInstagram size={20} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}

      {/* Team Commitments Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Our Team Commitments
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              These core principles guide everything we do, ensuring we deliver value and maintain the highest standards.
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

      {/* Quote Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <blockquote className="text-2xl md:text-3xl italic leading-relaxed mb-8">
              "The strength of our team lies not in the individual, but in our unity. Together, we make the impossible possible."
            </blockquote>
            <cite className="text-lg font-semibold not-italic">— Mohammed Arif, Founder BGE</cite>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Our Journey
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mt-4">
              From humble beginnings to industry leadership, trace our path of innovation and growth.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 h-full" />
            {timeline.map((event, i) => (
              <motion.div
                key={i}
                {...staggerItem}
                className={`flex items-center mb-12 ${
                  i % 2 === 0 ? "flex-row-reverse justify-end" : "justify-start"
                }`}
              >
                <div className={`w-full md:w-5/12 px-6 order-${i % 2 === 0 ? 2 : 1}`}>
                  <div className={`bg-white p-6 rounded-2xl shadow-lg border border-gray-200 ${
                    i % 2 === 0 ? "ml-auto" : ""
                  }`}>
                    <div className="flex items-center mb-2">
                      <span className="text-2xl font-bold text-indigo-600 mr-3">{event.year}</span>
                      <h4 className="text-xl font-semibold text-gray-900">{event.title}</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                  </div>
                </div>
                <div className="w-1/12 flex justify-center relative">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </Fragment>
  );
}