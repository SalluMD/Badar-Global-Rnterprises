import React, { Fragment } from "react";
import Hero from "../Components/Hero";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import CTA from "../Components/CTA";

export default function OurTeam() {
  const departments = [
    {
      title: "Management Team",
      description:
        "Our leadership team drives the vision, strategy, and culture of our organization.",
      bg: "bg-white",
      members: [
        {
          name: "Suman Chapala ",
          role: " Program Manager: BGE Pvt. Ltd.",
          image: "/assets/Images/Team/ceo.jpg",
          socials: { linkedin: "#", twitter: "#", instagram: "#" },
        },
        {
          name: "Ismail Ali Khan",
          role: "Executive Coordinator : BGE Pvt. Ltd.",
          image: "/assets/Images/Team/cto.jpg",
          socials: { linkedin: "#", twitter: "#", instagram: "#" },
        },
      ],
    },
    {
      title: "Accounts Team",
      description:
        "The backbone of our company, turning ideas into reality through code and innovation.",
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
      description:
        "Our creative minds responsible for storytelling, branding, and connecting with the audience.",
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
      description:
        "The HR team nurtures our culture and ensures every employee grows with us.",
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

  const timeline = [
    {
      year: "2005",
      title: "The Beginning",
      description:
        "Our journey started with a small team of passionate individuals and a shared vision to innovate.",
    },
    {
      year: "2008",
      title: "First Major Milestone",
      description:
        "We launched our flagship product and expanded into new markets, gaining industry recognition.",
    },
    {
      year: "2020",
      title: "Scaling Up",
      description:
        "Our team grew globally, and we introduced new services to meet customer demand.",
    },
    {
      year: "2023",
      title: "Innovation & Growth",
      description:
        "We embraced cutting-edge technology and continued building solutions that make an impact.",
    },
    {
      year: "Today",
      title: "A Thriving Family",
      description:
        "With multiple departments and hundreds of happy clients, we’re stronger than ever.",
    },
  ];

  return (
    <Fragment>
      {/* Hero */}
      <Hero
        title="Our Team"
        backgroundImage="./../../public/assets/Images/t2.jpg"
        bgPosition="center"
      />

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
        >
          Meet Our Partners
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12"
        >
          We’re more than just a company — we’re a family of innovators,
          creators, and leaders working together to shape the future.
        </motion.p>

        {/* People Cards */}
        <div className="flex flex-wrap justify-center gap-10">
          {[
            {
              name: " Mohammed Abdul Rahman",
              role: "Genius Enterprises.",
              img: "/assets/img/team-designer.jpg",
              // desc: "Designing seamless user experiences and creative visuals.",
            },
            {
              name: "Mohammed Abdul Azeem",
              role: "Insaat Infara Project Pvt Ltd",
              img: "/assets/img/team-dev.jpg",
              // desc: "Building scalable applications and robust backend systems.",
            },
            {
              name: "Mohammed Ali",
              role: "Al Zabiha pvt Ltd",
              img: "/assets/img/team-marketing.jpg",
              // desc: "Crafting strategies that connect brands with audiences.",
            },
            {
              name: "Syed Mukaram Ali ",
              role: "Badoor Al Najed Company",
              img: "/assets/img/team-marketing.jpg",
              // desc: "Crafting strategies that connect brands with audiences.",
            },
            {
              name: "Mohammed Azher ",
              role: "Dana Group",
              img: "/assets/img/team-marketing.jpg",
              // desc: "Crafting strategies that connect brands with audiences.",
            },
            {
              name: "Abdul Mateen",
              role: "USA",
              img: "/assets/img/team-marketing.jpg",
              // desc: "Crafting strategies that connect brands with audiences.",
            },
            {
              name: "Mohammed Abdul Saleem Ahmed ",
              role: "WCS",
              img: "/assets/img/team-marketing.jpg",
              // desc: "Crafting strategies that connect brands with audiences.",
            },
          ].map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition text-center w-80"
            >
              <img
                src={person.img}
                alt={person.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover shadow"
              />
              <h4 className="text-xl font-semibold">{person.name}</h4>
              <p className="text-blue-600 font-medium mb-2">{person.role}</p>
              <p className="text-gray-600 text-sm">{person.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Departments */}
      {departments.map((dept, i) => (
        <section key={i} className={`${dept.bg} py-20`}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2"
            >
              {dept.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-gray-600 text-center mb-12 max-w-3xl mx-auto"
            >
              {dept.description}
            </motion.p>

            <div className="flex flex-wrap justify-center gap-10">
              {dept.members.map((member, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative bg-white shadow-lg rounded-2xl text-center p-6 group overflow-hidden"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-indigo-100 shadow-md"
                  />
                  <h4 className="mt-4 text-lg font-semibold text-gray-800">
                    {member.name}
                  </h4>
                  <span className="inline-block mt-1 px-3 py-1 text-sm bg-indigo-100 text-[#006881] rounded-full">
                    {member.role}
                  </span>
                  <div className="flex justify-center gap-4 mt-4 text-gray-500">
                    <a href={member.socials.linkedin} className="hover:text-indigo-600">
                      <FaLinkedinIn />
                    </a>
                    <a href={member.socials.twitter} className="hover:text-indigo-600">
                      <FaTwitter />
                    </a>
                    <a href={member.socials.instagram} className="hover:text-indigo-600">
                      <FaInstagram />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Quote Section */}
      <section className="bg-gradient-to-r from-[#006881] to-[#006881] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xl md:text-2xl italic mb-6">
            "The strength of our team lies not in the individual, but in our
            unity. Together, we make the impossible possible."
          </p>
          <h4 className="font-semibold text-lg">— Mohammed Arif, Founder BGE</h4>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Journey
          </h3>
          <div className="relative border-l-4 border-[#006881] ml-6">
            {timeline.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="mb-10 ml-4"
              >
                <div className="absolute -left-3.5 w-7 h-7 rounded-full bg-[#006881] border-4 border-white"></div>
                <h4 className="text-xl font-semibold text-gray-800">
                  {event.year} — {event.title}
                </h4>
                <p className="text-gray-600 mt-2">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="bg-indigo-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4 text-gray-900">
            Want to Join Our Team?
          </h3>
          <p className="mb-6 text-lg text-gray-600">
            We’re always looking for passionate people to be part of our journey.
          </p>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition shadow-lg">
            Careers at Our Company
          </button>
        </div>
      </section> */}
      <CTA />
    </Fragment>
  );
}
