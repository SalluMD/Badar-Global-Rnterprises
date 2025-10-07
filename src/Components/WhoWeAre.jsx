import { Fragment } from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaUsers, FaAward, FaHandshake } from "react-icons/fa";
import Hero from "../Components/Hero";
import CTA from "../Components/CTA";

// Animation variants
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" },
};

export default function WhoWeAre() {
    return (
        <Fragment>

            {/* Company Intro */}
            <section className="py-20 bg-gray-50">
  <motion.div
    className="max-w-5xl mx-auto px-6 text-center"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
      We Are{" "}
      <span className="text-[#006881] underline decoration-4 underline-offset-4">
        Badar Global Enterprise
      </span>{" "}
      Private Limited
    </h2>

    <div className="space-y-6 text-left md:text-justify text-gray-600 text-lg leading-relaxed">
      <p>
        Established in <strong>2005</strong> by founder{" "}
        <strong>Mohammed Arif</strong>, <strong>BADAR Global Enterprises Private Limited</strong> has
        grown into a dynamic and multifaceted organization, delivering comprehensive business solutions
        across diverse industries.
      </p>

      <p>
        Specializing in{" "}
        <span className="font-medium text-gray-800">
          project management, manpower supply, import/export operations, information technology, building materials,
          landscaping and construction, multi-item trading, healthcare and surgical sectors, facility management,
          logistics and transportation, and tour and travel services
        </span>
        , the company serves as a trusted partner for organizations seeking efficiency and growth.
      </p>

      <p>
        With a commitment to innovation, quality, and client-centric strategies, BADAR Global ensures seamless execution
        from inception to completion, leveraging global networks and cutting-edge tools to meet both local and
        international market demands.
      </p>

      <p>
        Under <strong>Mohammed Arif’s</strong> visionary leadership, BADAR Global emphasizes reliability, sustainability,
        and value-driven outcomes, enabling businesses to navigate complex challenges without compromising timelines or
        budgets.
      </p>

      <p>
        From supplying skilled professionals for short-term projects to streamlining cross-border trade with compliant
        logistics, or providing end-to-end IT and facility maintenance support, the company fosters long-term
        partnerships built on trust and transparency.
      </p>

      <p>
        By integrating eco-friendly practices in construction and landscaping while prioritizing safety in healthcare
        equipment and travel services, BADAR Global drives operational excellence and contributes to economic
        development, empowering clients to thrive in an ever-evolving global landscape.
      </p>
    </div>
  </motion.div>
</section>


            {/* Leadership Section */}
            <section className="py-20 bg-[#006881]">
                <motion.div
                    className="max-w-6xl mx-auto px-6 text-center"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >

                    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                        <img
                            src="../../public/assets/Images/Profile/7.jpg"
                            alt="Founder"
                            className="w-80 h-80 rounded-full object-cover shadow-lg border-4 border-white"
                            loading="lazy"
                        />
                        <div className="text-left max-w-lg">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Meet Our Founder
                            </h2>
                            <h3 className="text-2xl font-semibold text-white/80">
                                Mohammed Arif
                            </h3>
                            <p className="text-[#006881] font-medium mb-3">
                                Founder & CEO, Badar Global Enterprise
                            </p>
                            <p className="text-white leading-relaxed">
                                A visionary leader with decades of experience in business
                                innovation and strategic development. His leadership has guided
                                Badar Global Enterprise to become a trusted name across multiple
                                industries and regions.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Mission / Vision / Values */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        {
                            title: "Our Mission",
                            icon: <FaGlobe className="text-4xl text-[#006881]" />,
                            text: "To connect global opportunities with sustainable solutions, empowering businesses and communities worldwide.",
                        },
                        {
                            title: "Our Vision",
                            icon: <FaAward className="text-4xl text-[#006881]" />,
                            text: "To be a trusted global enterprise, recognized for innovation, integrity, and excellence in everything we do.",
                        },
                        {
                            title: "Our Values",
                            icon: <FaHandshake className="text-4xl text-[#006881]" />,
                            text: "Integrity, Innovation, Collaboration, and Excellence form the foundation of our culture and operations.",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl p-8 text-center transition"
                        >
                            <div className="mb-4 flex justify-center">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-600">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Company Stats */}
            <section className="py-20 bg-[#006881] text-white">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
                    {[
                        { number: "20+", label: "Years of Excellence" },
                        { number: "15+", label: "Industries Served" },
                        { number: "100+", label: "Projects Completed" },
                        { number: "300+", label: "Global Clients" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                            <p className="text-white/80">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </Fragment>
    );
}
